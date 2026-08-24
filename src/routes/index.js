import { Router } from 'express';
import authRouter from './auth.routes.js';
import usersRouter from './users.routes.js';
import adminRouter from './admin.routes.js';
import reservationRouter from './reservation.routes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/admin', adminRouter);
router.use('/reservations', reservationRouter);

export default router;