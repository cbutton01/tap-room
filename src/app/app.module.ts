import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Beers } from './models/beer.model';
import { BeerComponent } from './beer/beer.component'
import { NewBeerComponent } from './new-beer/new-beer.component';
import { KegComponent } from './keg/keg.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    NewBeerComponent,
    KegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
