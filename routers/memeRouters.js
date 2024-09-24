import express from 'express';
import memeController from '../controllers/memeController.js';

const router = express.Router();

router.post('/memes', memeController.createMeme)
router.get('/memes', memeController.getAllMemes)
router.get('/memes/:id', memeController.getOneMeme)
router.put('/memes/:id', memeController.updateMeme)
router.delete('/memes/:id', memeController.deleteMeme)

export default router