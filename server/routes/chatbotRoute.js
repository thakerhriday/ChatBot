import express from 'express';
import { chatbotResponse } from '../controllers/chatbotController.js';

const router = express.Router();

router.post('/chatbot', chatbotResponse);

export default router;
