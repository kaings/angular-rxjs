import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNum = Observable.interval(1000);

    this.subscription = myNum.subscribe(
      (num: number) => {
        console.log(num);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
