import { NewProjectAngluarPage } from './app.po';

describe('new-project-angluar App', function() {
  let page: NewProjectAngluarPage;

  beforeEach(() => {
    page = new NewProjectAngluarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
