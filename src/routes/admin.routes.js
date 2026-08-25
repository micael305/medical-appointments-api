import { Router } from "express";
import { createTimeBlock, listReservations } from '../controllers/adminController.js';
import authenticateToken from "../middlewares/auth.js";
import { authorizeRole } from "../middlewares/role.js"

const router = Router();

router.use(authenticateToken, authorizeRole('ADMIN'));

router.post('/time-blocks', createTimeBlock);
router.get('/reservations', listReservations);

export default router;