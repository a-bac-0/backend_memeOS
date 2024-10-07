import express from "express";
import memeController from "../controllers/memeController.js";
import { createMemeValidator, updateMemeValidator, idValidator } from "../validators/memeValidator.js";
import validate from "../validators/handleValidator.js";

const router = express.Router();

router.post("/",createMemeValidator, validate, memeController.createMeme);
router.get("/", memeController.getAllMemes);
router.get("/:id", idValidator, validate, memeController.getOneMeme);
router.put("/:id", updateMemeValidator, validate, memeController.updateMeme);
router.delete('/:id', idValidator, validate, memeController.deleteMeme);

export default router;
