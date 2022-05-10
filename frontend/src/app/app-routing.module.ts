import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { LegendaryComponent } from './components/legendary/legendary.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { TeamsComponent } from './components/teams/teams.component';


const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  {path:'teams', component: TeamsComponent},
  {path:'createTeam', component: CreateTeamComponent},
  {path:'legendary',component: LegendaryComponent},
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
