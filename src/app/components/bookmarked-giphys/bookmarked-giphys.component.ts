import { GiphyService } from './../../services/giphy.service';
import { Component, OnInit } from '@angular/core';
import { giphyObject } from 'src/app/models/giphyObject';

@Component({
  selector: 'app-bookmarked-giphys',
  templateUrl: './bookmarked-giphys.component.html',
  styleUrls: ['./bookmarked-giphys.component.css']
})
export class BookmarkedGiphysComponent implements OnInit {
  favouriteGiphys: [];
  stageArray = [];
  constructor(private svc: GiphyService) {}

  ngOnInit() {
    // this.favouriteGiphys = JSON.parse(localStorage.getItem('favoriteGiphies'));
    this.svc
      .getFavoriteGiphys(
        JSON.parse(localStorage.getItem('currentUser')).username
      )
      .subscribe(response => {
        this.favouriteGiphys = response;
      });
  }
}
