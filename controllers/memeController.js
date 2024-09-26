import memeModel from "../models/memeModel.js";

const memeController = {
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
      res.status(500).json({ Message: "❌ Error al crear meme" });
    }
  },
  getAllMemes: async (req, res) => {
    try {
      const allMemes = await memeModel.findAll();
      res.status(200).json(allMemes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "❌ Error al obtener memes" });
    }
  },
  getOneMeme: async (req, res) => {
    try {
      const { id } = req.params;
      const oneMeme = await memeModel.findByPk(id);
      res.status(200).json(oneMeme);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "❌ Error al obtener meme" });
    }
  },
};
export default memeController;
