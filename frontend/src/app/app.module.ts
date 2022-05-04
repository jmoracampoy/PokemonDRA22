import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamsComponent } from './components/teams/teams.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PokemonsComponent,
    TeamsComponent,
    CreateTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
