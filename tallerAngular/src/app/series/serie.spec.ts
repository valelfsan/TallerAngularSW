import { Serie } from './serie';

describe('Serie', () => {
  it('should create an instance', () => {
    const s = new Serie(
      1, 'Name', 'Channel', 1,
      'desc', 'https://example.com', 'poster.jpg'
    );
    expect(s).toBeTruthy();
  });
});
