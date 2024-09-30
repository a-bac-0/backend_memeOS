import express from "express";
import memeController from "../controllers/memeController.js";

const router = express.Router();

router.post("/newmeme", memeController.createMeme);
router.get("/memes", memeController.getAllMemes);
router.get("/meme/:id", memeController.getOneMeme);
router.put("/meme/:id", memeController.updateMeme)
router.delete('/meme/:id', memeController.deleteMeme)

export default router;
