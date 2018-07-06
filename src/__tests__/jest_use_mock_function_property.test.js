const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);

test('do test', () => {
  expect(true).toBe(true);
});
