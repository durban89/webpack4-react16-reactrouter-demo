import axios from 'axios';
import Users from '../lib/user';

jest.mock('axios');

test('should fetch users', () => {
  const resp = {
    data: [
      {
        name: 'Durban',
      },
    ],
  };

  axios.get.mockResolvedValue(resp);
  // 或者也可以使用下面的代码
  // axios.get.mockImplementation(() => Promise.resolve(resp));


  return Users.all().then(users => expect(users).toEqual(resp.data));
});
