import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable, map, filter } from 'rxjs';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;
  constructor() {
    console.log('This is Constructor');
  }
  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customInteravalObs = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
      }, 1000);
    });
    this.firstObsSubscription = customInteravalObs
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data: number) => {
          console.log(data);
        },
        (error: any) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Count Completed');
        }
      );
  }
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
