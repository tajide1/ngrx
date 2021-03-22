import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custum-counter-input',
  templateUrl: './custum-counter-input.component.html',
  styleUrls: ['./custum-counter-input.component.css']
})
export class CustumCounterInputComponent implements OnInit {

  value!: number
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({value: +this.value}))
  }

}
