export default class SoundPlayer {
  constructor() {
    this.name = 'Player1';
    this.fileName = '';
  }

  choicePlaySoundFile(fileName) {
    this.fileName = fileName;
  }

  playSoundFile() {
    console.log('播放的文件是:', this.fileName);
  }
}
