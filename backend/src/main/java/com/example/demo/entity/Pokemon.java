package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pokemon")
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Name is mandatory")
    private Number idPokemon;

    public Pokemon() {
    }

    public Pokemon(int idPokemon) {
        this.idPokemon = idPokemon;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Number getIdPokemon() {
        return this.idPokemon;
    }

    public void setIdPokemon(int idPokemon) {
        this.idPokemon = idPokemon;
    }

    @Override
    public String toString() {
        return "Pokemon [id=" + id + ", idPokemon=" + idPokemon + "]";
    }

}
