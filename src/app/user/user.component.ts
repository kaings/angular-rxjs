import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate() {
    this.userService.activatedUser.next(this.id);
    // if you put this line on ngOnInit, it will only initialize for once, there are other ways to make it more dynamic
  }
}
