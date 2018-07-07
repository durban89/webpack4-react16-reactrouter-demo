import Users from '../lib/user';

jest.mock('../lib/request');

it('works with async/await', async () => {
  const data = await Users.getUserName(4);
  expect(data).toEqual('Mark');
});

it('works with async/await and resolves', async () => {
  expect.assertions(1);
  await expect(Users.getUserName(5)).resolves.toEqual('Paul');
});
