import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import SessionsControllers from '../controllers/SessionsControllers';

const sessionsRouter = Router();
const sessionsControllers = new SessionsControllers();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string(),
    },
  }),
  sessionsControllers.create,
);

export default sessionsRouter;
