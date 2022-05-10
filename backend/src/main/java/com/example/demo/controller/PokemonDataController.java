package com.example.demo.controller;

import java.util.List;

import com.example.demo.PokemonDataDto;
import com.example.demo.services.PokemonDataService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemon")
public class PokemonDataController {
    @Autowired
    private PokemonDataService pokemonDataService;

    @GetMapping("data")
    public ResponseEntity<List<PokemonDataDto>> getPokemonData() {
        return new ResponseEntity<List<PokemonDataDto>>(pokemonDataService.retrievePokemonData(),
                HttpStatus.OK);
    }
}
