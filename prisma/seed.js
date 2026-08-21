import prisma from '../src/config/prisma.js';
import bcrypt from 'bcryptjs';

async function main() {
  await prisma.appointment.deleteMany();
  await prisma.timeBlock.deleteMany();
  await prisma.user.deleteMany();
  console.log('Datos anteriores eliminados correctamente.');

  // Crear usuarios
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: await bcrypt.hash('password123', 10),
      name: 'User One',
      role: 'USER'
    }
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: await bcrypt.hash('admin123', 10),
      name: 'Admin User',
      role: 'ADMIN'
    }
  });

// Crear bloques de tiempo
  const timeBlock1 = await prisma.timeBlock.create({
    data: {
      startTime: new Date('2026-11-15T09:00:00Z'),
      endTime: new Date('2026-11-15T10:00:00Z')
    }
  });

  const timeBlock2 = await prisma.timeBlock.create({
    data: {
      startTime: new Date('2026-11-15T10:00:00Z'),
      endTime: new Date('2026-11-15T11:00:00Z')
    }
  });

  // Crear citas
  await prisma.appointment.create({
    data: {
      date: new Date('2026-11-15T09:00:00Z'),
      user: { connect: { id: user1.id } },
      timeBlock: { connect: { id: timeBlock1.id } }
    }
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2026-11-15T10:00:00Z'),
      user: { connect: { id: user2.id } },
      timeBlock: { connect: { id: timeBlock2.id } }
    }
  });
}
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });