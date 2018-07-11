import SoundPlayer from '../lib/sound-player';
import SoundPlayerConsumer from '../lib/sound-player-consumer';

jest.mock('../lib/sound-player'); // SoundPlayer 现在是一个模拟构造函数

beforeEach(() => {
  // 清除所有实例并调用构造函数和所有方法：
  SoundPlayer.mockClear();
});

it('我们可以检查SoundPlayerConsumer是否调用了类构造函数', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('我们可以检查SoundPlayerConsumer是否在类实例上调用了一个方法', () => {
  // 检查 mockClear() 会否起作用:
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // 类构造函数再次被调用
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.play();

  // mock.instances可用于自动模拟
  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
  const mockChoicePlaySoundFile = mockSoundPlayerInstance.choicePlaySoundFile;
  expect(mockChoicePlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  // 相当于上面的检查
  expect(mockChoicePlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockChoicePlaySoundFile).toHaveBeenCalledTimes(1);
});
