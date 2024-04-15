import express from 'express';
import { createJob } from '../controllers/Job.controllers.js';

const router = express.Router();

router.post('/', createJob);
// router.get('/', getJobs);
// router.get('/:id', getJobById);

export default router;