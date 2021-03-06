import { Component } from '@angular/core';
import { Beers } from './models/beer.model';
import { BeerComponent } from './beer/beer.component';
import { NewBeerComponent } from './new-beer/new-beer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  masterBeerList: Beers[] = [
    new Beers('Appricot Blonde','Dry Dock', 5, 10),
    new Beers('Milk Stout','Left Hand', 6, 6)
  ];
  addBeer(newBeer: Beers){
    this.masterBeerList.push(newBeer);
  }
}
