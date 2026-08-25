import prisma from '../config/prisma.js';

const getUsersAppoiment = async (userId) => {
    try {
        const appointments = prisma.appointment.findMany( {
            where: { userId: parseInt(userId, 10)},
            include: { timeBlock: true }
        });
        return appointments;
    } catch (error) {
        throw new Error("Error fetching appointment history.");
    }
}

export { getUsersAppoiment };