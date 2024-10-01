import express from "express";
import memeController from "../controllers/memeController.js";
import { createMemeValidator, updateMemeValidator, idValidator } from "../validators/memeValidator.js";
import validate from "../validators/handleValidator.js";

const router = express.Router();

router.post("/newmeme",createMemeValidator, validate, memeController.createMeme);
router.get("/memes", memeController.getAllMemes);
router.get("/meme/:id", idValidator, validate, memeController.getOneMeme);
router.put("/meme/:id", updateMemeValidator, validate, memeController.updateMeme);
router.delete('/meme/:id', idValidator, validate, memeController.deleteMeme);

export default router;
