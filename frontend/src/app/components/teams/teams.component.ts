import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams:Team[] = [];
  teamsWithPokemons:Team[] = [];
  pokemons:any =[];
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getTeams();

  }

  getTeams(){
    this.pokemonService.getTeams().subscribe(data=>{
      this.teams = data;
      this.getPokemons();

    });
  }

  public deleteTeam(indice:number){
    this.pokemonService.deleteTeam(this.pokemons[indice].id).subscribe(data=>{
      window.location.reload()});

  }

  public async getPokemons(){
    for(let i = 0; i< this.teams.length;i++){
      for(let j = 0; j< this.teams[i].pokemons.length; j++){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.teams[i].pokemons[j].idPokemon}`;
        let rest = await fetch(url);
        let pokemon = await rest.json();
        this.teamsWithPokemons.push(pokemon);
      }
      this.pokemons.push({"id": this.teams[i].id ,"name": this.teams[i].name,"pokemons": this.teamsWithPokemons})
      this.teamsWithPokemons = [];
    }
  }

}
