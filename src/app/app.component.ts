import { Component } from '@angular/core';
import { Beers } from './models/beer.model';
import { BeerComponent } from './beer/beer.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
}
