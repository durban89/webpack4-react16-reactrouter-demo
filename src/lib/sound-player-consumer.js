import SoundPlayer from './sound-player';

export default class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  play() {
    const coolSoundFileName = 'song.mp3';
    this.soundPlayer.choicePlaySoundFile(coolSoundFileName);
    this.soundPlayer.playSoundFile();
  }
}
