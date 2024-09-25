import db from './database/db.js'
import memeModel from './models/memeModel.js'

const app = express ();
const PORT = process.env.PORT||3000;

//middleware es para convertir json/js-js/json
app.use(express.json());

//para usar la ruta que queremos
app.use("/api", memeRouters)

try {
    await db.authenticate();
    console.log('👍Connection has been established successfully.');

    await memeModel.sync({force: true});
    console.log('The table for the meme model was just (re)created!💕')


  }catch (error) {
    console.error('❌Unable to connect to the database:', error);
  }

  app.listen(PORT,()=>{
    console.log(`🏃‍♂️Server running on http://localhost:${PORT}`);
  })