import { Router } from 'express';

import UserRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const userRepository = new UserRepository();
  const autheticateUser = new AuthenticateUserService(userRepository);

  const { user, token } = await autheticateUser.execute({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
