import * as appointmentService from "../services/appointmentService.js";

const getMyAppointments = async (req, res) => {
    try {
        const appointments = await appointmentService.getUsersAppoiment(req.user.id);
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching appointment history.' });
    }
};

const getUserAppointmentsByAdmin = async (req, res) => {
    try {
        const appointments = await appointmentService.getUsersAppoiment(req.params.id);
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching appointment history.' });
    }
};

export { getMyAppointments, getUserAppointmentsByAdmin };