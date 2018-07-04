const myMockFunc = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation(v => 42 + v)
  .mockName('add42');

test('add 42', () => {
  expect(myMockFunc(1)).toEqual(43);
});
