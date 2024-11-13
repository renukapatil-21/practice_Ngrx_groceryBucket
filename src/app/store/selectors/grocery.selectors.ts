import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "src/models/grocery.model";


//export const selectGrocery = (state: { groceries: Grocery[] }) => state.groceries;

export const selectGrocery = createFeatureSelector<Grocery[]>("groceries");

export const selectGroceryByType = (type: string) => createSelector(
    selectGrocery,
    (state) => {
        return state.filter(item => item.type === type);
    }
);