import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUserLogin } from '../../../shared/models/IUserLogin';
import { environment } from '../../../../environments/environment';
import { IUser } from 'src/app/shared/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UrlBase = `${environment.UrlApi}/user`;
  public jwtHelpers = new JwtHelperService();
  public decodedToken: any;

  constructor(private http: HttpClient) { }

  Login(model: any) {
    return this.http.post(`${this.UrlBase}/login`, model).pipe(
      map((response: IUserLogin) => {
        const user = response;
        if (user) {
          localStorage.setItem(environment.VariavelToken, user.token);
          this.decodedToken = this.jwtHelpers.decodeToken(user.token);
          localStorage.setItem(environment.VariavelUsuario, JSON.stringify(user.user));
        }
      })
    );
  }

  EsqueciSenha(model: any) {
    return this.http.post(`${this.UrlBase}/esqueciSenha`, model);
  }

  ResetSenha(model: any) {
    return this.http.post(`${this.UrlBase}/resetarSenha`, model);
  }

  Register(model: any) {
    return this.http.post(`${this.UrlBase}/register`, model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem(environment.VariavelToken, user.token);
          this.decodedToken = this.jwtHelpers.decodeToken(user.token);
          localStorage.setItem(environment.VariavelUsuario, JSON.stringify(user.user));
        }
      })
    );
  }

  Put(model: IUser) {
    return this.http.put(`${this.UrlBase}/atualizarUsuario`, model).pipe(
      map((response: IUserLogin) => {
        const user = response;
        if (user) {
          localStorage.setItem(environment.VariavelToken, user.token);
          this.decodedToken = this.jwtHelpers.decodeToken(user.token);
          localStorage.setItem(environment.VariavelUsuario, JSON.stringify(user.user));
        }
      })
    );
  }

  LoggedIn() {
    const token = localStorage.getItem(environment.VariavelToken);
    return this.jwtHelpers.isTokenExpired(token);
  }
}
