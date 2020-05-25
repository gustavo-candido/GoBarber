import handlebars from 'handlebars';

import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IMailTemplateProviderDTO from '../dtos/IParseMailTemplateDTO';

class HandleBarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IMailTemplateProviderDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandleBarsMailTemplateProvider;
