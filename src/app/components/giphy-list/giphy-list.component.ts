import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {
  @Input() giphyList: any;

  constructor() {}

  ngOnInit() {}
}
