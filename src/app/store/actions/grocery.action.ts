import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "src/models/grocery.model";


export const groceryActions = createActionGroup({
    source:"Grocery API",
    events:{
        "Load Groceries": emptyProps(),
        "Load Groceries Success": props<{grocery: Grocery[]}>(),
        "Load Groceries Failure": emptyProps(),
    }
})