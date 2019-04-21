import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {
  @Input() giphyList: any;
  @Input() bookmark: boolean;

  constructor() {}

  ngOnInit() {}

  onBookmark(giphy) {
    const favourites = JSON.parse(localStorage.getItem('favoriteGiphies'));
    let newFavourites = [];
    if (favourites) {
      if (this.bookmark) {
        const index = favourites.findIndex(gip => gip.id === giphy.id);
        if (index > -1) {
          favourites.splice(index, 1);
          newFavourites = [...favourites];
          this.giphyList = newFavourites;
        }
      } else {
        newFavourites = [
          ...JSON.parse(localStorage.getItem('favoriteGiphies')),
          giphy
        ];
      }
    } else {
      newFavourites = [giphy];
    }
    localStorage.setItem('favoriteGiphies', JSON.stringify(newFavourites));
  }

  isGiphyExists(giphy) {
    const favourites = JSON.parse(localStorage.getItem('favoriteGiphies'));
    return (
      !this.bookmark &&
      favourites &&
      favourites.filter(gip => gip.id === giphy.id).length > 0
    );
  }
}
