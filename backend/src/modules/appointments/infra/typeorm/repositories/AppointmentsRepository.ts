import { EntityRepository, Repository } from 'typeorm';

import IAppointmestsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import Appointment from '../entities/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>
  implements IAppointmestsRepository {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date }, // date:date
    });
    return findAppointment;
  }
}

export default AppointmentsRepository;
