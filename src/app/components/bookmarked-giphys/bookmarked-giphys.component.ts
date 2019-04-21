import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked-giphys',
  templateUrl: './bookmarked-giphys.component.html',
  styleUrls: ['./bookmarked-giphys.component.css']
})
export class BookmarkedGiphysComponent implements OnInit {
  favouriteGiphys: [];
  stageArray = [];
  constructor() {}

  ngOnInit() {
    this.favouriteGiphys = JSON.parse(localStorage.getItem('favoriteGiphies'));
  }
}
