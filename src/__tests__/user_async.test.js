import Users from '../lib/user';

jest.mock('../lib/request');

// The assertion for a promise must be returned.
it('works with promises', () =>
  // expect.assertions(1);
  Users
    .getUserName(4)
    .then(data => expect(data).toEqual('Mark')));

it('works with resolves', () => {
  expect.assertions(1);
  return expect(Users.getUserName(5)).resolves.toEqual('Paul');
});
