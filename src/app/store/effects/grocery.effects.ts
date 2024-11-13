import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { GroceryService } from "src/services/grocery.service";
import { groceryActions } from "../actions/grocery.action";


@Injectable()
export class GroceryEffects{

    loadGrocery$ = createEffect(() => this.actions$.pipe(
        ofType(groceryActions.loadGroceries),
        exhaustMap(() => this.groceryService.fetchAllGroceries().
        pipe(
            map((groceries:any) => (groceryActions.loadGroceriesSuccess({grocery: groceries}))),
            catchError(() => of(groceryActions.loadGroceriesFailure()))
        ))

    ))


    constructor(private actions$: Actions, private  groceryService: GroceryService){}
}