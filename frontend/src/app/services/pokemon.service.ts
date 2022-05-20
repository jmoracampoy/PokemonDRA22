import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {
   }


   /*Guardar un equipo en la base de datos*/
   saveTeam(team:Team):Observable<any>{
    return this.http.post('http://localhost:8081/api/teams',team,this.httpOptions);
   }

   /**Obtener los equipos pokemons */
   getTeams():Observable<any>{
     return this.http.get('http://localhost:8081/api/teams',this.httpOptions)
   }

   /**Eliminar un equipo pokemon */
   deleteTeam(id:number):Observable<any>{
     return this.http.delete('http://localhost:8081/api/teams/' + id,this.httpOptions);
   }



}
