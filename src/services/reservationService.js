import prisma from '../config/prisma.js'

const createReservation = async data => {
    const conflict = await prisma.appointment.findFirst({
        where: {
            date: data.date,
            timeBlockId: data.timeBlockId
        }
    });
    if (conflict) {
        throw new Error('This time slot is already booked.');
    }
    return prisma.appointment.create({ data });
}

const getReservation = (id) => {
    return prisma.appointment.findUnique({
        where: { id: parseInt(id, 10) }
    });
}

const updateReservation = async (id, data) => {
    const conflict = await prisma.appointment.findFirst({
        where: {
            date: data.date,
            timeBlockId: data.timeBlockId,
            id: { not: parseInt(id, 10) }
        }
    })
     if (conflict) {
        throw new Error('The requested time slot is already booked.');
    }
    return prisma.appointment.update({
        where: { id: parseInt(id, 10) },
        data
    })
}

const deleteReservation = async (id) => {
    return prisma.appointment.delete({
        where: { id: parseInt(id, 10) }
    });
}

export {
  createReservation,
  getReservation,
  updateReservation,
  deleteReservation
};