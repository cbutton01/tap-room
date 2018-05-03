import { Component, Output, EventEmitter } from '@angular/core';
import { Beers } from '../models/beer.model'

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent {
  @Output() sendBeer = new EventEmitter();

  submitForm(name: string, brewery: string, abv: string, ibu: string){
    let newBeer: Beers = new Beers(name, brewery, parseInt(abv), parseInt(ibu));
    this.sendBeer.emit(newBeer);
  }
}
