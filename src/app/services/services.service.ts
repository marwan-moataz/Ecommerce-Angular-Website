import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  counter: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  constructor() {}

  updateCounter(value: number) {
    this.counter.next(value);
  }
  getCounter(): Observable<any> {
    return this.counter;
  }
}
