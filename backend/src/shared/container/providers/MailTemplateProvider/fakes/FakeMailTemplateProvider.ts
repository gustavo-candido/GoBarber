import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IMailTemplateProviderDTO from '../dtos/IParseMailTemplateDTO';

class FakeTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IMailTemplateProviderDTO): Promise<string> {
    return template;
  }
}

export default FakeTemplateProvider;
