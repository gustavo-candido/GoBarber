import { inject, injectable } from 'tsyringe';
import { getHours } from 'date-fns';
import AppointmentRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}

type IResponse = Array<{
  hour: number;
  avaliable: boolean;
}>;

@injectable()
class ListProviderDayAvailabilityService {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: AppointmentRepository,
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentRepository.findAllInDayFromProvider(
      {
        provider_id,
        day,
        month,
        year,
      },
    );

    const hourStart = 8;

    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + hourStart,
    );

    const avalability = eachHourArray.map((hour) => {
      const hasAppointmentInHour = appointments.some(
        (appointment) => getHours(appointment.date) === hour,
      );
      return {
        hour,
        avaliable: !hasAppointmentInHour,
      };
    });

    return avalability;
  }
}

export default ListProviderDayAvailabilityService;
