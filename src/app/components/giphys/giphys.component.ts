import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { UserService } from './../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-giphys',
  templateUrl: './giphys.component.html',
  styleUrls: ['./giphys.component.css']
})
export class GiphysComponent implements OnInit {
  searchControl = new FormControl('search');
  giphyList = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getGiphys()
      .pipe(first())
      .subscribe(list => {
        this.giphyList = list.data;
        // console.log(users);
        // this.users = users;
      });
  }
}
