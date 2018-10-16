import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Auth } from '@app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string = environment.api;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  getAuth(): Auth {
    return new Auth(
      localStorage.getItem('_id'),
      localStorage.getItem('email'),
      localStorage.getItem('access_token'),
      localStorage.getItem('refresh_token'),
      localStorage.getItem('client')
    );
  }

  refresh(): Observable<any> {
    const refresh_token: string = localStorage.getItem('refresh_token');
    const client: string = localStorage.getItem('client');

    if (!refresh_token || !client) {
      return throwError('');
    }

    return this.http.post(this.api + 'users/refresh', {
      'refresh_token': refresh_token,
      'client': client
    })
      .pipe(
        map((res: { access_token: string }) => res.access_token),
        tap((access_token: string) => {
          localStorage.setItem('access_token', access_token);
        })
      );
  }

  loggedIn(): boolean {
    return (localStorage.getItem('access_token')) ? true : false;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.api + 'users/login', {
      email: email,
      password: password
    })
      .pipe(
        tap((auth: Auth) => {
          localStorage.setItem('_id', auth._id);
          localStorage.setItem('user', auth.email);
          localStorage.setItem('access_token', auth.access_token);
          localStorage.setItem('refresh_token', auth.refresh_token);
          localStorage.setItem('client', auth.client);
        })
      );
  }

  logout() {
    localStorage.removeItem('_id');
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('client');

    this.router.navigateByUrl('login', { skipLocationChange: true });
  }
}
