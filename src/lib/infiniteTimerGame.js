function infiniteTimerGame(callback) {
  console.log('Ready....go!');

  setTimeout(() => {
    console.log('Times up! 10 seconds before the next game starts...');

    if (callback) {
      callback();
    }

    // 10秒钟后执行下一个
    setTimeout(() => {
      infiniteTimerGame(callback);
    }, 10000);
  }, 1000);
}

module.exports = infiniteTimerGame;
