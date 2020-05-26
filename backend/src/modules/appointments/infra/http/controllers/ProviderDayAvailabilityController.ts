import { container } from 'tsyringe';
import { Request, Response } from 'express';

import ProviderDayAvalabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvalabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvailability = container.resolve(
      ProviderDayAvalabilityService,
    );

    const availability = await listProviderDayAvailability.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
