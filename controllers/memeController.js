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
  updateMeme: async (req, res) => {
    try {
        const { id } = req.params;
        const { name, date, author, stream, description } = req.body;
        await memeModel.update({
            name,
            date,
            author,
            stream,
            description
            },
            { where: { id } } );
            const updateMeme = await memeModel.findByPk(id);
          res.status(200).json(updateMeme);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "❌ Error al actualizar meme" });
      }
  },

  deleteMeme: async (req, res) => {
    try {
      const {id} = req.params;
      const deletedMeme = await memeModel.findByPk(id);
      if (!deletedMeme){
        return res.status(404).json({Message: "❌ Meme no encontrado"});
      }
      else {
        deletedMeme.destroy(
          { where: {id}
        });
        return res.status(204).json({Message:"Happy meme"})
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ Message:"❌ Error al eliminar el meme"});
    }
  }
};
export default memeController;
