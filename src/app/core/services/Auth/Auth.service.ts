import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUserLogin } from '../../../shared/models/IUserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UrlBase = 'http://localhost:5000/user';
  public jwtHelpers = new JwtHelperService();
  public decodedToken: any;

  constructor(private http: HttpClient) { }

  Login(model: any) {
    return this.http.post(`${this.UrlBase}/login`, model).pipe(
      map((response: IUserLogin) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelpers.decodeToken(user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
        }
      })
    );
  }

  Register(model: any) {
    return this.http.post(`${this.UrlBase}/register`, model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelpers.decodeToken(user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
        }
      })
    );
  }

  LoggedIn() {
    const token = localStorage.getItem('token');
    return this.jwtHelpers.isTokenExpired(token);
  }
}
