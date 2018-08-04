import { AppmoduleModule } from './appmodule.module';

describe('AppmoduleModule', () => {
  let appmoduleModule: AppmoduleModule;

  beforeEach(() => {
    appmoduleModule = new AppmoduleModule();
  });

  it('should create an instance', () => {
    expect(appmoduleModule).toBeTruthy();
  });
});
