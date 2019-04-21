import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-giphy-list",
  templateUrl: "./giphy-list.component.html",
  styleUrls: ["./giphy-list.component.css"]
})
export class GiphyListComponent implements OnInit {
  @Input() giphyList: any;
  giphySource: {};
  stageArray = [];

  constructor() {}

  ngOnInit() {
  }

  bookMarkSelected(giphy) {
    localStorage.setItem("selectedGiphy", JSON.stringify(giphy));
    this.stageArray.push(JSON.parse(localStorage.getItem("selectedGiphy")));
    localStorage.setItem("favoriteGiphies", JSON.stringify(this.stageArray));
  }
}
