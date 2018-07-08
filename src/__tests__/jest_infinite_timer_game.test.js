const infiniteTimerGame = require('../lib/infiniteTimerGame');

jest.useFakeTimers();

describe('infiniteTimerGame', () => {
  test('schedules a 10-second timer after 1 second', () => {
    const callback = jest.fn();

    infiniteTimerGame(callback);

    // 在这里，会在意秒钟后执行callback的回调
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // 只有当前待定的计时器（但不是在该过程中创建的任何新计时器）
    jest.runOnlyPendingTimers();

    // 此时，1秒钟的计时器应该已经被回调了
    expect(callback).toBeCalled();

    // 它应该创建一个新的计时器，以便在10秒内启动游戏
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});
