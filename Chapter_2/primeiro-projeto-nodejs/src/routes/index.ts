import { Router } from 'express';
import { appointmentsRoutes } from './appointments.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/users", usersRoutes);
router.use("/appointments", appointmentsRoutes)

export { router };