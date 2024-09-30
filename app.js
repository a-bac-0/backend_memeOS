import express from "express";
import db from "./database/db.js";
import memeModel from "./models/memeModel.js";
import memeRoutes from "./routes/memeRoutes.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

//middleware es para convertir json/js-js/json
app.use(express.json());

//para usar la ruta que queremos
app.use("/api", memeRoutes);

try {
  await db.authenticate();
  console.log("👍Connection has been established successfully.");

  await memeModel.sync({ alter: true });
  console.log("The table for the meme model was just (re)created!💕");
} catch (error) {
  console.error("❌Unable to connect to the database:", error);
}

app.listen(PORT, () => {
  console.log(`🏃‍♂️Server running on http://localhost:${PORT}`);
});
