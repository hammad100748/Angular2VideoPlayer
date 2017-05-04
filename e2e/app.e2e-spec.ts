import { Angular2VideoPlayerPage } from './app.po';

describe('angular2-video-player App', () => {
  let page: Angular2VideoPlayerPage;

  beforeEach(() => {
    page = new Angular2VideoPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
