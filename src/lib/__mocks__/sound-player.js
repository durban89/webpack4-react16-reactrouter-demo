export const mockChoicePlaySoundFile = jest.fn();
const mockPlaySoundFile = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  const data = {
    choicePlaySoundFile: mockChoicePlaySoundFile,
    playSoundFile: mockPlaySoundFile,
  };

  return data;
});

export default mock;
