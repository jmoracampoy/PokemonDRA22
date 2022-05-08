import { Pokemon } from "./pokemon";

export interface Team {
  id: number;
  name: string;
  pokemons:Pokemon[];
}
