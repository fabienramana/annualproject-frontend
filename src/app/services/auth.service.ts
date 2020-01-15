import * as jwt_decode from 'jwt-decode';

export class AuthService {

  getIfIsAdmin() {
    console.log(localStorage.getItem('isAdmin'));
    if (localStorage.getItem('isAdmin') === 'true') {
      return true;
    }
    return false;
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
  }

}
