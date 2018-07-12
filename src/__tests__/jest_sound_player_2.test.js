import SoundPlayer, { mockChoicePlaySoundFile } from '../lib/sound-player';
import SoundPlayerConsumer from '../lib/sound-player-consumer';

jest.mock('../lib/sound-player'); // SoundPlayer 现在是一个模拟构造函数

beforeEach(() => {
  // 清除所有实例并调用构造函数和所有方法：
  SoundPlayer.mockClear();
  mockChoicePlaySoundFile.mockClear();
});

it('我们可以检查SoundPlayerConsumer是否调用了类构造函数', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('我们可以检查SoundPlayerConsumer是否在类实例上调用了一个方法', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.play();
  expect(mockChoicePlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
