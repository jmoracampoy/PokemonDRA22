import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

    pokemons:any[] = [];
    pokemonSearch:any[] = [];
    pokemonSearchForm:string ="";
    search = false;
    pokemonGen=[
    {"generacion": 1,"inicio":1,"fin":151},
    {"generacion": 2,"inicio":152,"fin":251},
    {"generacion": 3,"inicio":252,"fin":386},
    {"generacion": 4,"inicio":387,"fin":493},
    {"generacion": 5,"inicio":494,"fin":649},
    {"generacion": 6,"inicio":650,"fin":721},
    {"generacion": 7,"inicio":722,"fin":809},
    {"generacion": 8,"inicio":810,"fin":898}
    ];

    /**Primera generación por defecto */
    numeroGen:number = 0;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons(this.numeroGen);
  }

  public async getPokemons(gen: number){

    for(let id = this.pokemonGen[this.numeroGen].inicio;id<=this.pokemonGen[this.numeroGen].fin;id++){
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let rest = await fetch(url);
    let pokemon = await rest.json();
    this.pokemons.push(pokemon);
    }
  }

  public async cambiarGeneracion1(){
    if(this.numeroGen < this.pokemonGen.length-1){
      this.pokemons = [];
      this.numeroGen++;
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
    }
  }
    exitSearch(){
    this.pokemonSearch=[];
    this.search = false;
  }
 public async searchPokemon(){
  if(this.pokemonSearchForm != ""){
  this.search = true;
  let pokeSearch = this.pokemonSearchForm.trim();
  let pokeSearchLower = pokeSearch.toLowerCase();
  this.pokemonSearch=[];
  let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearchLower}`;
  let rest = await fetch(url);
  let pokemon = await rest.json();
  this.search = true;
  this.pokemonSearch.push(pokemon);
  }
 }
}
