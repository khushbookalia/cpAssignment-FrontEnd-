import { CpFrontPage } from './app.po';

describe('cp-front App', () => {
  let page: CpFrontPage;

  beforeEach(() => {
    page = new CpFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
