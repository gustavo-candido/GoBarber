// import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotEmailPasswordService from './SendForgotEmailPasswordService';

describe('SendForgotPasswordEmail', () => {
  it('shout be able to recover password using email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotEmailPassword = new SendForgotEmailPasswordService(
      fakeUsersRepository,
      fakeMailProvider,
    );

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });

    await sendForgotEmailPassword.execute({
      email: 'jhondoe@example.com',
    });

    expect(sendMail).toBeCalled();
  });
});
