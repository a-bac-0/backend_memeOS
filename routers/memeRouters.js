import express from "express";
import memeController from "../controllers/memeController.js";
import { validateCreateMeme, validateGetAllMemes, validateGetOneMemes } from '../validations/memeValidations.js';



const router = express.Router();

router.post("/memes", validateCreateMeme, memeController.createMeme);
router.get("/memes", validateGetAllMemes, memeController.getAllMemes);
router.get("/memes/:id", validateGetOneMemes, memeController.getOneMeme);
router.put("/memes/:id", memeController.updateMeme)
router.delete('/memes/:id', memeController.deleteMeme)

export default router;
