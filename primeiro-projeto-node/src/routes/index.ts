import { Router } from 'express';

import appointmentsRouter from './appointments.routs';
import usersRouter from './users.routs';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
