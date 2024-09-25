import memeModel from "../models/memeModel.js";

const memeController = {
  // Crear un nuevo meme
  createMeme: async (req, res) => {
    try {
      const { name, image, date, author, stream, description } = req.body;
      const newMeme = await memeModel.create({
        name,
        image,
        date,
        author,
        stream,
        description,
      });
      res.status(201).json(newMeme);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear el meme" });
    }
  },
};

export default memeController;
