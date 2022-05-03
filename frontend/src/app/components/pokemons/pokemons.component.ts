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
   generacion:number = 1;
   pokemon= {} as Pokemon;
   pokemons = {} as Pokemon[];


  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemon(10);
  }

  getPokemon(id:number){
  this.pokemonService.getPokemon(id).subscribe(response =>{
    this.pokemon.idPokedex = id;
    this.pokemon.nombre = response.forms[0].name;
    this.pokemon.imagen = response.sprites.front_default;
    response.types.forEach((tipo: any) => {
      this.pokemon.tipo.push(tipo.type.name.toString());
    });

  });

  }

}
