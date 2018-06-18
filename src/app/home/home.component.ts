import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/Rx'; // in order for interval to work, this import is necessary. This import is to unlock the operators of Observable
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscription2: Subscription;

  constructor() { }

  ngOnInit() {

    /* Observable Interval */
    const myNum = Observable.interval(1000)
      .map(
        (someNum: number) => {
          return someNum * 2;
        }
      );

    this.subscription = myNum.subscribe(
      (num: number) => {
        console.log(num);
      }
    );

    /* Observable Create */
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first batch');
        }, 2000);
      setTimeout(() => {
        observer.next('second batch');
      }, 4000);
      setTimeout(() => {
        // observer.error('error occurs');  // it is either error or complete.. choose one. They cannot coexist
      }, 5000);
      setTimeout(() => {
        observer.complete();            // it is either error or complete.. choose one. They cannot coexist
      }, 7000);
      setTimeout(() => {
        observer.next('retry after complete');
      }, 9000);
    });

    /* findings:
     * - error message and next data must be separated in the subscribe()
     * - error and complete will not exist both at the same time, it is only either one of them complete or error */
    this.subscription2 = myObservable.subscribe(
      (message: string) => {
        console.log(message);
      },
      (errorMessage: string) => {
        console.log(errorMessage);
      },
      () => {
        console.log('the Observable is completed!');
      }

    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
