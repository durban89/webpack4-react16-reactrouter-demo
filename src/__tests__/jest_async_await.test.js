const fetchData = (err) => {
  const promise = new Promise((resolve, reject) => {
    if (err) {
      return reject('error');
    }

    return setTimeout(() => resolve('gowhich'), 3000);
  });
  return promise;
};


test('data的数据是"gowhich"', async () => {
  const data = await fetchData();
  expect(data).toBe('gowhich');
});

test('获取数据失败', async () => {
  try {
    await fetchData(true);
  } catch (err) {
    expect(err).toBe('error');
  }
});

test('data的数据是"gowhich"', async () => {
  await expect(fetchData()).resolves.toBe('gowhich');
});

test('获取数据失败', async () => {
  await expect(fetchData(true)).rejects.toMatch('error');
});
