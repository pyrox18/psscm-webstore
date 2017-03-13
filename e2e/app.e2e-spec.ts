import { PsscmWebstorePage } from './app.po';

describe('psscm-webstore App', () => {
  let page: PsscmWebstorePage;

  beforeEach(() => {
    page = new PsscmWebstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
