import { Router } from "express";
import authenticateToken from "../middlewares/auth.js";
import { createReservation, getReservation ,updateReservation,deleteReservation } from "../controllers/reservationController.js";

const router = Router();

router.post('/', authenticateToken, createReservation);
router.get('/:id', authenticateToken, getReservation);
router.put('/:id', authenticateToken, updateReservation);
router.delete('/:id', authenticateToken, deleteReservation);

export default router;