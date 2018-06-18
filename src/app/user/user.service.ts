import {Subject} from 'rxjs/Subject';

export class UserService {
  activatedUser = new Subject();

  /*
  Subject is basically similar to Observable.
  The difference is Subject is both Observer + Subscriber. While,
  Observable, you need to create Observer (initialize) and subscribe to retrieve the value.
  */
}
