import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { giphyObject } from '../models/giphyObject';
import { config } from '../config';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  constructor(private http: HttpClient) {}

  saveBookmarked(giphy: giphyObject[]) {
    console.log(giphy);
    return this.http.post<any>(`${config.apiUrl}/saveMultipleFiles`, giphy);
  }

  deleteBookmarked(giphyId: string, userName: string) {
    return this.http.delete<any>(
      `${config.apiUrl}/delete/${giphyId}/${userName}`
    );
  }

  getFavoriteGiphys(userId: string) {
    return this.http.get<any>(`${config.apiUrl}/favorites?userId=${userId}`);
  }
}
