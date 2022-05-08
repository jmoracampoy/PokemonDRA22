
package com.example.demo.controller;

import java.util.List;

import com.example.demo.entity.Team;
import com.example.demo.repository.TeamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TeamController {

    @Autowired
    private TeamRepository repository;

    @GetMapping(path = "/teams")
    public List<Team> allTeams() {
        return (List<Team>) repository.findAll();
    }

    @GetMapping(path = "/teams/{id}")
    public Team getTeam(@PathVariable long id) {
        return repository.findById(id).get();
    }

    @PostMapping(path = "/teams")
    public Team postTeam(@RequestBody Team team) {
        return repository.save(team);
    }

    @DeleteMapping(path = "teams/{id}")
    public void deleteTeam(@PathVariable long id) {
        repository.deleteById(id);
    }
}