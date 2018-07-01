function forEach(items, callback) {
  for (let i = 0; i < items.length; i += 1) {
    callback(items[i]);
  }
}

const mockFunction = jest.fn();
forEach([0, 1], mockFunction);


test('mockFunction被调用2次', () => {
  expect(mockFunction.mock.calls.length).toBe(2);
});

test('第一次调用第一个参数是0', () => {
  expect(mockFunction.mock.calls[0][0]).toBe(0);
});

test('第一次调用第一个参数是1', () => {
  expect(mockFunction.mock.calls[1][0]).toBe(1);
});

