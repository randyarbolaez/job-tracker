import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = {
    username: '',
    password: '',
  };

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}

  //HTTP METHODS

  postUser(user: User) {
    return this.http.post(
      `${environment.apiBaseUrl}/register`,
      user,
      this.noAuthHeader
    );
  }

  login(authCredentials) {
    return this.http.post(
      `${environment.apiBaseUrl}/authenticate`,
      authCredentials,
      this.noAuthHeader
    );
  }

  getUserProfile() {
    return this.http.get(`${environment.apiBaseUrl}/userprofile`);
  }

  //Helper methods

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = localStorage.getItem('token');
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
