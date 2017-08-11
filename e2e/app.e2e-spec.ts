import { Week1Page } from './app.po';

describe('week1 App', function() {
  let page: Week1Page;

  beforeEach(() => {
    page = new Week1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
