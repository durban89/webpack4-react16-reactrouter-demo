import Users from '../lib/user';

jest.mock('../lib/request');

test('tests error with promises', async () => {
  expect.assertions(1);
  return Users.getUserName(2).catch(e =>
    expect(e).toEqual({
      error: 'User with 2 not found.',
    }));
});

it('tests error with async/await', async () => {
  expect.assertions(1);
  try {
    await Users.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: 'User with 1 not found.',
    });
  }
});
