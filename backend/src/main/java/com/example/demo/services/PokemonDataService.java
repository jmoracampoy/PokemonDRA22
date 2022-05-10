package com.example.demo.services;

import com.example.demo.PokemonDataDto;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

@Component("pokemonDataService")
public class PokemonDataService {
    public List<PokemonDataDto> retrievePokemonData() {

        List<PokemonDataDto> pokemonData = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://alfabetajuega.com/listas/pokemon-legendarios-mas-fuertes")
                    .get();
            Element ul = webPage.getElementById("main-container").getElementsByTag("ul").get(0);
            Elements p = webPage.getElementById("main-container").getElementsByTag("p");
            Elements img = webPage.getElementById("main-container").getElementsByTag("img");
            List<Element> rows = ul.children().subList(0, ul.children().size());
            List<Element> rows2 = p.subList(4, p.size());
            List<Element> rows3 = img.subList(1, img.size());
            int j = 0;
            for (int i = 0; i < rows.size(); i++) {
                Elements li = rows.get(i).getElementsByTag("li");
                String nombrePokemon = li.get(0).text();
                String descripcion = rows2.get(j).text();
                String image = rows3.get(i).attr("src");
                pokemonData.add(new PokemonDataDto(nombrePokemon, image, descripcion));
                j = j + 2;
            }
            try (Writer writer = new FileWriter(
                    "C:\\Users\\jorge\\git\\PokemonDRA22\\frontend\\src\\app\\scraping\\Scraping.json")) {
                Gson gson = new GsonBuilder().setPrettyPrinting().create();
                gson.toJson(pokemonData, writer);
            }
            return pokemonData;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
