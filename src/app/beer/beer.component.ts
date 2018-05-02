import { Component, OnInit } from '@angular/core';
import { Beers } from './../models/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})

export class BeerComponent {
  beer: Beers[] = [
    new Beers('Appricot Blonde','Dry Dock', 5, 10),
    new Beers('Milk Stout','Left Hand', 6, 6)
  ];
}
