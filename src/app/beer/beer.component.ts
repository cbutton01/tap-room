import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beers } from './../models/beer.model';
import { KegComponent } from '../keg/keg.component';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})

export class BeerComponent {
  @Input() childBeerList: Beers[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(beerToEdit: Beers){
    this.clickSender.emit(beerToEdit);
  }
  
  beer: Beers[] = [];


}
