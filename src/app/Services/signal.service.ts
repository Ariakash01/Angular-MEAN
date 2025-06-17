import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }
  Counter=signal(0);
  increment(){
    this.Counter.update(v=>v+1);
  }
}
