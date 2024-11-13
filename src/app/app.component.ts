import { Component, ElementRef, ViewChild } from '@angular/core';
import { on, Store } from '@ngrx/store';
import { Observable, Subscription, filter, from, fromEvent, interval, map, of, pluck, take, timer, toArray } from 'rxjs';
import { Grocery } from 'src/models/grocery.model';
import { groceryActions } from './store/actions/grocery.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<{groceries: Grocery[]}>){

    }

    ngOnInit(){
      this.store.dispatch(groceryActions.loadGroceries());
    }
}
