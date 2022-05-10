import { Component, OnInit } from '@angular/core';
import data from '../../scraping/Scraping.json';

@Component({
  selector: 'app-legendary',
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.scss']
})
export class LegendaryComponent implements OnInit {

  pokemons:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadJson();
  }

  loadJson(){
    this.pokemons = data;
  }

}
