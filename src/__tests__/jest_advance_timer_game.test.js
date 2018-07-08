const timerGame = require('../lib/timerGame');

jest.useFakeTimers();

it('1秒钟后通过advanceTimersByTime调用回调函数', () => {
  const callback = jest.fn();

  timerGame(callback);

  // callback还没有被执行
  expect(callback).not.toBeCalled();

  // 提前1秒钟执行
  jest.advanceTimersByTime(1000);

  // 所有的callback被调用
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
