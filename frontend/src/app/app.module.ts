import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamsComponent } from './components/teams/teams.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LegendaryComponent } from './components/legendary/legendary.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PokemonsComponent,
    TeamsComponent,
    CreateTeamComponent,
    LegendaryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
