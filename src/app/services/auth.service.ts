import * as jwt_decode from 'jwt-decode';

export class AuthService {


  decodeToken() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
  }

}
