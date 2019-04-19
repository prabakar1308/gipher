import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked-giphys',
  templateUrl: './bookmarked-giphys.component.html',
  styleUrls: ['./bookmarked-giphys.component.css']
})
export class BookmarkedGiphysComponent implements OnInit {
  favouriteGiphys = [
    {
      title: 'Praba',
      subTitle: 'Cat',
      imgSrc: 'https://media2.giphy.com/media/FiGiRei2ICzzG/200.gif'
    },
    {
      title: 'Mohan',
      subTitle: 'Cat',
      imgSrc: 'https://media0.giphy.com/media/feqkVgjJpYtjy/200.gif'
    },
    {
      title: 'Test',
      subTitle: 'Cat',
      imgSrc: 'https://media2.giphy.com/media/FiGiRei2ICzzG/200.gif'
    },
    {
      title: 'Test',
      subTitle: 'Cat',
      imgSrc: 'https://media2.giphy.com/media/FiGiRei2ICzzG/200.gif'
    },
    {
      title: 'Test',
      subTitle: 'Cat',
      imgSrc: 'https://media2.giphy.com/media/FiGiRei2ICzzG/200.gif'
    },
    {
      title: 'Mohan',
      subTitle: 'Cat',
      imgSrc: 'https://media0.giphy.com/media/feqkVgjJpYtjy/200.gif'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
