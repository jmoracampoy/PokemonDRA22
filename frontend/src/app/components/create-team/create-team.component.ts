import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { PokemonService } from 'src/app/services/pokemon.service';
import * as $ from "jquery";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  pokemons:any[] = [];
  pokemonsTeam:any[]=[];
  pokemonSearch:any[] = [];
  teamName:string="";
  pokemonsDatabase:number[] = [];
  team = { "name": this.teamName, "pokemons": this.pokemonsDatabase } as unknown as Team;
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

  constructor(  private _router:Router, private pokemonService:PokemonService) { }

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

   removeItemFromArr ( arr:any[], item:any ) {
    var i = arr.indexOf( item );

    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}

  public addPokemonTeam(id:any){
    if(this.pokemonsTeam.length<6){
    this.pokemonsTeam.push(this.pokemons[id]);
    this.team.pokemons.push(this.pokemons[id].id);
    this.removeItemFromArr(this.pokemons,this.pokemons[id]);

    }
  }

  public saveTeam(){
    this.team.name = this.teamName;
    this.pokemonService.saveTeam(this.team).subscribe(data=>{
      this.pokemonsTeam=[];
      this.team.name="";
      this.team.pokemons=[];
    });
  }

  public resetPokemonTeam(){
    this.pokemonsTeam = [];
    this.team.pokemons =[];
    this.pokemons = [];
    this.getPokemons(this.numeroGen);
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
  this.pokemonSearch.push(pokemon);
 }
}

}
