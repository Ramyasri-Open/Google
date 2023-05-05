export class AuthService {
  IsAuthenticated() {
    return localStorage.getItem('user');
  }
}
