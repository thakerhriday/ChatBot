import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import chatbotRoute from './routes/chatbotRoute.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', chatbotRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
