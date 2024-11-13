import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { groceryReducer } from './store/reducers/grocery.reducer';
import { bucketReducer } from './store/reducers/bucket.reducer';
import { GroceryEffects } from './store/effects/grocery.effects';

@NgModule({
  declarations: [
    AppComponent,
    BucketComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([GroceryEffects]),
    StoreModule.forRoot({groceries: groceryReducer, myBucket: bucketReducer}),
    StoreDevtoolsModule.instrument({ logOnly: true }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
