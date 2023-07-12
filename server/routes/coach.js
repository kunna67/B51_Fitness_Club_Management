import express from 'express';

import { addCoach , getCoaches , deleteTrainer} from '../controllers/coach.js';

const router = express.Router();

router.post('/coach' , addCoach)

router.get('/getCoach' , getCoaches)

router.delete('/deleteCoach/:coachId', deleteTrainer);

export default router;