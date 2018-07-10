// import '../lib/matchMedia.mock';
import { useMatchMedia } from '../lib/useMatchMedia';

describe('useMatchMedia()', () => {
  it('useMatchMedia() 被调用', () => {
    const res = useMatchMedia();
    expect(res).toBeUndefined();
    // expect(res).toBeDefined();
  });
});
