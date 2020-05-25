import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('shout be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Trê',
      email: 'jhontre@example.com',
      password: '123456',
    });

    const logged_user = await fakeUsersRepository.create({
      name: 'John Qua',
      email: 'jhonqua@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: logged_user.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
