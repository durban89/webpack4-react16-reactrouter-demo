function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter');
  }, 1000);
}

test('two section the data is peanut butter', (done) => {
  function callback(data) {
    // console.log('two section data = ', data);
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});
