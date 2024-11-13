import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Grocery } from 'src/models/grocery.model';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from 'src/app/store/actions/bucket.action';
import { selectGrocery, selectGroceryByType } from 'src/app/store/selectors/grocery.selectors';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]>;
  filteredGroceries$?:Observable<Grocery[]>;

constructor(private store: Store<{groceries: Grocery[]}>){
//this.groceries$ = this.store.select("groceries");
  this.groceries$ = this.store.select(selectGrocery);
}

  onTypeChange(event: Event){
      const selectedType = (event.target as HTMLSelectElement).value;
      if(selectedType){
        this.filteredGroceries$ = this.store.select(selectGroceryByType(selectedType));
      }else{
        this.filteredGroceries$ = undefined;
      }
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }

    //this.store.dispatch({type:"UPDATE_TO_GROCERY", payload:payload});
    this.store.dispatch(addToBucket({payload:payload}));

  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name
    }

    this.store.dispatch(removeFromBucket({payload:payload}));

  }

}
