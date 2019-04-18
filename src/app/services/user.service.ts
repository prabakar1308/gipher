import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { config } from './../config';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${config.apiUrl}/users`);
    // return this.http.get(
    //   `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=khEvGzeaobaAFox2S2drkFKQhATlIyAo`
    // );
  }
}
