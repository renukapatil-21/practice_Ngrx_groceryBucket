import { createReducer, on } from "@ngrx/store"
import { Grocery } from "src/models/grocery.model"
import { groceryActions } from "../actions/grocery.action";

// const initialState:Grocery[] = [
//     { "id": 1, "name": "Milk", "type": "fruit" },
//     { "id": 2, "name": "Banana", "type": "fruit" },
//     { "id": 3, "name": "lays chips", "type": "snacks" },
//     { "id": 4, "name": "doritos", "type": "snacks" }
// ]


const initialState:Grocery[] = [];


export const groceryReducer = createReducer(initialState,
    on(groceryActions.loadGroceriesSuccess, (state, action) => {
        return action.grocery;
    }),
    on(groceryActions.loadGroceriesFailure, (state, action) => {
        return [];
    }),

);