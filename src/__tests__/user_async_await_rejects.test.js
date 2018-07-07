import Users from '../lib/user';

jest.mock('../lib/request');
it('tests error with rejects', () => {
  expect.assertions(1);
  return expect(Users.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});

it('tests error with async/await and rejects', async () => {
  expect.assertions(1);
  await expect(Users.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});
