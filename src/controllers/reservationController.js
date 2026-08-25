import * as reservationService from "../services/reservationService.js"

const createReservation = async (req, res) => {
    try {
        const reservation = await reservationService.createReservation(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
} 

const getReservation = async (req, res) => {
    try {
        const reservation = await reservationService.getReservation(req.params.id);
        if (!reservation) {
            return res.status(404).json( {error: 'Reservation not found'});
        }
        res.json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateReservation = async (req, res) => {
    try {
        const reservation = await  reservationService.updateReservation(req.params.id, req.body);
        if (!reservation) {
            return res.status(404).json( {error: 'Reservation not found'});
        }
        res.send(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteReservation = async (req, res) => {
    try {
        const result = await reservationService.deleteReservation(req.params.id);
        if (!result) {
            return res.status(404).json( {error: 'Reservation not found'});
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export {
  createReservation,
  getReservation,
  updateReservation,
  deleteReservation
};