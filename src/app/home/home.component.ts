import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNum = Observable.interval(1000);

    myNum.subscribe(
      (num: number) => {
        console.log(num);
      }
    );
  }

}
