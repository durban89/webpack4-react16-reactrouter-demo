const timerGame = require('../lib/timerGame');

jest.useFakeTimers();

test('等待1分钟后结束游戏', () => {
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
