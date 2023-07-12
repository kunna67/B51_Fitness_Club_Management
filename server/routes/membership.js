import express from 'express';
import { addMembership } from '../controllers/membership';

const router = express.Router();

router.post('/memership' , addMembership);

export default router;