import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemon:any[]=[];
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.getPokemon(params.id);
    });
  }

  public async getPokemon(id:any){
    this.pokemon=[];
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let rest = await fetch(url);
    let pokemonDetails = await rest.json();
    this.pokemon.push(pokemonDetails);
    }

   }


