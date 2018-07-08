function timerGame(callback) {
  console.log('Ready....go!');
  setTimeout(() => {
    console.log('Times up -- stop!');
    return callback && callback();
  }, 1000);
}

module.exports = timerGame;
