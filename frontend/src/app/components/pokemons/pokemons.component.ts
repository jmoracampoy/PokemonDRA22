import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  /*Colores tipo pokemon*/
    colors = {
      fire: '#FFA05D',
      grass: '#8FD594',
      electric: '#FFE43B',
      water: '#7E97C0',
      ground: '#CAAC4D',
      rock: '#90642D',
      poison: '#9D5B9B',
      bug: '#EAFD71',
      dragon: '#97b3e6',
      psychic: '#FF96B5',
      flying: '#CDCDCD',
      fighting: '#FF5D5D',
      normal: '#FFFFFF'
    };

   tipos_pokemon = Object.keys(this.colors);
   pokemonGen = {
    1:[1, 151],
    2:[152,251],
    3:[252, 386]
  };

   numeroGen = 1;
   generacion:number[] = this.pokemonGen[1];
   inicioGeneracion:number = this.generacion[0];
   finGeneracion: number = this.generacion[1];
   pokemons:any[] = [];


  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  async getPokemon(){
    for(let id = this.inicioGeneracion;id<=this.finGeneracion;id++){
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let rest = await fetch(url);
    let pokemon = await rest.json();
    this.pokemons.push(pokemon);
    }
  }
}
