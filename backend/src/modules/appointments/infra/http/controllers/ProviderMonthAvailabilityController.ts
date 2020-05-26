import { container } from 'tsyringe';
import { Request, Response } from 'express';

import ProviderMonthAvalabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProviderMonthAvalabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvailability = container.resolve(
      ProviderMonthAvalabilityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
