import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent
  implements OnChanges, OnInit, OnDestroy, AfterViewInit
{
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // before render
    // una vez
    // this.duration = 123;
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (const inputName in changes) {
  //     const inputValues = changes[inputName];
  //     console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
  //     console.log(`Current ${inputName} == ${inputValues.currentValue}`);
  //     console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
  //   }
  // }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron pintandos
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
    // async
  }
}
