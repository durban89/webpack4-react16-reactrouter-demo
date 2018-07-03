import axios from 'axios';

class Users {
  static all() {
    return axios.get('/user.json').then(resp => resp.data);
  }
}

export default Users;
