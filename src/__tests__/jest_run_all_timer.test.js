const timerGame = require('../lib/timerGame');

jest.useFakeTimers();

test('1分钟后调用回调callback', () => {
  const callback = jest.fn();

  timerGame(callback);

  // 在这个时间点上，callback回调函数还没有被调用
  expect(callback).not.toBeCalled();

  // 所有timers被执行
  jest.runAllTimers();

  // 现在我们的callback回调函数被调用
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
