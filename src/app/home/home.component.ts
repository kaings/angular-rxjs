import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, Observer, interval} from 'rxjs';
import {map} from 'rxjs/operators';


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
    const myNum = interval(1000)   // for rxjs (non compat), interval is directly imported from rxjs, not a method of observable
      .pipe(map(
          (someNum: number) => {
            return someNum * 2;
          }
        ));

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
