import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { UserService } from "./../../services/user.service";
import { first } from "rxjs/operators";
import { MatPaginator, PageEvent } from "@angular/material";

@Component({
  selector: "app-giphys",
  templateUrl: "./giphys.component.html",
  styleUrls: ["./giphys.component.css"]
})
export class GiphysComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchControl = new FormControl("", Validators.required);
  giphyList = [];
  giphySearch: string;
  giphySearchLimit: number;
  giphySearchOffset: number;

  searchPageInfo = {
    pageSize: 10,
    pageIndex: 0,
    totalCount: 1
  };
  constructor(private userService: UserService) {}

  ngOnInit() {}

  getGiphies() {
    this.userService
      .getGiphys(this.searchControl.value, this.searchPageInfo)
      .pipe(first())
      .subscribe(list => {
        const { count, total_count } = list.pagination;
        this.giphyList = list.data;
        this.searchPageInfo = {
          ...this.searchPageInfo,
          totalCount: total_count
        };
      });
  }

  onPagination(event: PageEvent) {
    const { pageSize, pageIndex } = event;
    this.searchPageInfo = {
      ...this.searchPageInfo,
      pageSize,
      pageIndex
    };
    this.getGiphies();
  }
}
