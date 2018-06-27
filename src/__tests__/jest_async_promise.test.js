const fetchData = (err) => {
  const promise = new Promise((resolve, reject) => {
    if (err) {
      return reject('error');
    }

    return setTimeout(() => resolve('peanut butter'), 3000);
  });
  return promise;
};

test('the data is peanut butter', () => {
  const promise = fetchData().then((data) => {
    // console.log('third section data = ', data);
    expect(data).toBe('peanut butter');
  });

  return promise;
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  const promise = fetchData(true).catch((err) => {
    expect(err).toMatch('error');
  });

  return promise;
});

test('the data is peanut butter', () => {
  const promise = expect(fetchData()).resolves.toBe('peanut butter');
  return promise;
});

test('the fetch fails with an error', () => {
  const promise = expect(fetchData(true)).rejects.toMatch('error');
  return promise;
});
