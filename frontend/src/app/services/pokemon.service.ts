import { Injectable } from '@angular/core';
import { Global } from './global';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public url:string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {
    this.url = Global.url;
   }

   /*Devuelve un pokemon en base al ID de la pokedex*/
   getPokemon(id:number) : Observable<any>{
    return this.http.get(this.url + id,this.httpOptions);
   }



}
