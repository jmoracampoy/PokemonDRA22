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

    pokemons:any[] = [];
    pokemonGen=[{"generacion": 1,"inicio":1,"fin":151},
    {"generacion": 2,"inicio":152,"fin":251},
    {"generacion": 3,"inicio":252,"fin":386}];
    numeroGen:number = 0;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons(this.numeroGen);
  }

  public async getPokemons(gen: number){

    for(let id = this.pokemonGen[gen].inicio;id<=this.pokemonGen[gen].fin;id++){
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let rest = await fetch(url);
    let pokemon = await rest.json();
    this.pokemons.push(pokemon);
    }
  }

  public async cambiarGeneracion1(){
    if(this.numeroGen < this.pokemonGen.length - 1){
      this.pokemons = [];
      this.numeroGen++;
      console.log(this.numeroGen);
    for(let id = this.pokemonGen[this.numeroGen].inicio;id<=this.pokemonGen[this.numeroGen].fin;id++){
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      let rest = await fetch(url);
      let pokemon = await rest.json();
      this.pokemons.push(pokemon);
      }
    }
  }

  public async cambiarGeneracion2(){
    if(this.numeroGen != 0){
      this.pokemons = [];
      this.numeroGen--;
    for(let id = this.pokemonGen[this.numeroGen].inicio;id<=this.pokemonGen[this.numeroGen].fin;id++){
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      let rest = await fetch(url);
      let pokemon = await rest.json();
      this.pokemons.push(pokemon);
      }
    }else{
      console.log(this.numeroGen);
    }
  }
}
