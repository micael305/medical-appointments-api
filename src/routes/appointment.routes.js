import { Router } from "express";
import authenticateToken from "../middlewares/auth.js";
import * as appointmentController from "../controllers/appointmentController.js";

const router = Router();

router.get('/:id/appointments', authenticateToken,
     appointmentController.getUserAppointmentsByAdmin);

router.get('/my-appointments', authenticateToken,
     appointmentController.getMyAppointments);

export default router;