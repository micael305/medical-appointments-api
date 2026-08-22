import { createTimeBlockService, listReservationService } from '../services/adminService.js';

const createTimeBlock = async (req, res) => {
    if(req.user.role !== 'ADMIN') {
        return res.status(403).json({error: 'Access denied'});
        }

        const { startTime, endTime } = req.body;

        try {
            const newTimeBlock = await createTimeBlockService(startTime, endTime);
            res.status(201).json(newTimeBlock);
        } catch (error) {
            res.status(500).json({error: 'Error creating time block'});
        }    
}

const listReservations = async (req, res) => {
    if(req.user.role !== 'ADMIN'){
        return res.status(403).json({error: 'Acess denied'});
    } 

    try {
        const reservations = await listReservationService();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({error: 'Error fetching reservations'});
    }
}

export { createTimeBlock, listReservations };