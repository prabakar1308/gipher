import { GiphyService } from './../../services/giphy.service';
import { Component, OnInit, Input } from '@angular/core';
import { giphyObject } from 'src/app/models/giphyObject';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {
  @Input() giphyList: any;
  @Input() bookmark: boolean;

  constructor(private svc: GiphyService) {}

  ngOnInit() {}

  getImageUrl(giphy) {
    if (this.bookmark) {
      return giphy.imageUrl;
    }
    return giphy.images.original.url;
  }

  onBookmark(giphy) {
    JSON.parse(localStorage.getItem('currentUser'));
    const { username } = JSON.parse(localStorage.getItem('currentUser'));
    if (this.bookmark) {
      this.svc.deleteBookmarked(giphy.id, username).subscribe(response => {
        console.log('Removed Sucessfully');
      });
    } else {
      const {
        id,
        title,
        images: {
          original: { url }
        }
      } = giphy;

      const giphyReq = {
        userId: username,
        title,
        imageId: id,
        imageUrl: url
      };
      this.svc.saveBookmarked([giphyReq]).subscribe(response => {
        console.log('bookmarked sucessfully');
      });
    }
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
