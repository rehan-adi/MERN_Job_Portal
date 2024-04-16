import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postJob from './routes/Job.routs.js'
import authRoute from './routes/Auth.routs.js'
import cors from 'cors'

dotenv.config();
const server = express();
server.use(express.json());
server.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

server.use('/postjob', postJob);
server.use('/auth', authRoute);

server.listen(process.env.PORT || 1000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});