import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeStatus1 = false;
  activeStatus2 = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.activatedUser.subscribe(
      (userId: number) => {
        if (userId === 1) {
          this.activeStatus1 = true;
          this.activeStatus2 = false;
        } else {
          this.activeStatus1 = false;
          this.activeStatus2 = true;
        }
      }

    );
  }
}
