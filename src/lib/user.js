import axios from 'axios';
import request from './request';

class Users {
  static all() {
    return axios.get('/user.json').then(resp => resp.data);
  }

  static getUserName(userID) {
    return request(`/users/${userID}`).then(user => user.name);
  }
}

export default Users;
