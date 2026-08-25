import { Router } from "express";
import authenticateToken from "../middlewares/auth.js";
import { authorizeRole } from "../middlewares/role.js";
import * as appointmentController from "../controllers/appointmentController.js";

const router = Router();

router.get('/:id/appointments', authenticateToken, authorizeRole('ADMIN'), 
     appointmentController.getUserAppointmentsByAdmin);

router.get('/my-appointments', authenticateToken,
     appointmentController.getMyAppointments);

export default router;