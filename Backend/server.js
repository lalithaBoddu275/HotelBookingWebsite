// server.js
import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';


import clerkWebhooks from './controllers/clerkWebhooks.js';
import userRouter from './routes/userRoutes.js';
await connectDB();


const app = express();

app.use(cors())

// ✅ After raw middleware, now apply json parsing for other routes
app.use(express.json());

// Clerk middleware
app.use(clerkMiddleware());

// CLERK WEBHOOK API
app.use('/api/clerk',clerkWebhooks);



// Health check
app.get('/', (req, res) => {
    res.send('QuickStay server is live!');
});

app.use('/api/user',userRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});