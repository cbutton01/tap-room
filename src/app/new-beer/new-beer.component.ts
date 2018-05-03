import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Beers } from '../models/beer.model'

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent {
  @Output() sendBeer = new EventEmitter();

  submitForm(name: string, brewery: string, abv: number, ibu: number){
  let newBeer: Beers = new Beers(name, brewery, abv, ibu);
}

}
