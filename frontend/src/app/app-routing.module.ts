import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { TeamsComponent } from './components/teams/teams.component';


const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  {path:'teams', component: TeamsComponent},
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
