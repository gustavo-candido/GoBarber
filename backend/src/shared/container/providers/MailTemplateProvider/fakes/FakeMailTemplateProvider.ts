import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'mail content';
  }
}

export default FakeTemplateProvider;
