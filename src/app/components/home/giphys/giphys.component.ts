import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphys',
  templateUrl: './giphys.component.html',
  styleUrls: ['./giphys.component.css']
})
export class GiphysComponent implements OnInit {
giphyList=[
  {title:'Praba',   subTitle:'Cat',imgSrc:'https://media2.giphy.com/media/FiGiRei2ICzzG/200.gif'},
  {title:'Mohan',   subTitle:'Cat',imgSrc:'https://media0.giphy.com/media/feqkVgjJpYtjy/200.gif'},
  {title:'Test',   subTitle:'Cat',imgSrc:'https://media2.giphy.com/media/FiGiRei2ICzzG/200.gif'}
];
  

  constructor() { }

  ngOnInit() {
  }

}
