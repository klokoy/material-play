import { MaterialPlayPage } from './app.po';

describe('material-play App', function() {
  let page: MaterialPlayPage;

  beforeEach(() => {
    page = new MaterialPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
