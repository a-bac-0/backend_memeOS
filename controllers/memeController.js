import memeModel from "../models/memeModel.js";

const memeController = {
	// Create a new meme
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
			console.log("✅ Meme created successfully");
			return res.status(201).json(
				newMeme,
			);
		} catch (error) {
			console.error("Error creating meme:", error);
			return res.status(500).json({
				message: "❌ Failed to create meme",
				error: error.message,
			});
		}
	},
	// Get all memes
	getAllMemes: async (req, res) => {
		try {
			const allMemes = await memeModel.findAll();
			console.log("✅ Memes retrieved successfully");
			return res.status(200).json(
				allMemes,
			);
		} catch (error) {
			console.error("Error retrieving memes:", error);
			return res.status(500).json({
				message: "❌ Failed to retrieve memes",
				error: error.message,
			});
		}
	},
	// Get one meme by ID
	getOneMeme: async (req, res) => {
		try {
			const { id } = req.params;
			const oneMeme = await memeModel.findByPk(id);
			if (!oneMeme) {
				return res.status(404).json({
					message: "❌ Meme not found",
				});
			}
			console.log("✅ Meme retrieved successfully");
			return res.status(200).json(
				oneMeme,
			);
		} catch (error) {
			console.error("Error retrieving meme:", error);
			return res.status(500).json({
				message: "❌ Failed to retrieve meme",
				error: error.message,
			});
		}
	},
	// Update a meme by ID
	updateMeme: async (req, res) => {
		try {
			const { id } = req.params;
			const { name, date, author, stream, description } = req.body;
			await memeModel.update(
				{
					name,
					date,
					author,
					stream,
					description,
				},
				{ where: { id } }
			);
			return res.status(200).json({
				message: "✅ Meme updated successfully"
			});
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				message: "❌ Failed to update meme",
				error: error.message,
			});
		}
	},
	// Delete a meme by ID
	deleteMeme: async (req, res) => {
		try {
			const { id } = req.params;
			await memeModel.destroy({ where: { id } });
			return res.status(200).json({
				message: "✅ Meme deleted successfully",
			});
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				message: "❌ Failed to delete meme",
				error: error.message,
			});
		}
	},
};
export default memeController;