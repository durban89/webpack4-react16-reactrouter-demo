import SoundPlayer from '../lib/sound-player';
import SoundPlayerConsumer from '../lib/sound-player-consumer';

jest.mock('../lib/sound-player'); // SoundPlayer 现在是一个模拟构造函数

describe('SoundPlayer被调用的时候抛出异常', () => {
  beforeAll(() => {
    SoundPlayer.mockImplementation(() => ({
      playSoundFile: () => {
        throw new Error('Test error');
      },
      choicePlaySoundFile: () => {
        throw new Error('Test error');
      },
    }));
  });

  it('play被调用的收抛出异常', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(() => soundPlayerConsumer.play()).toThrow();
  });
});

