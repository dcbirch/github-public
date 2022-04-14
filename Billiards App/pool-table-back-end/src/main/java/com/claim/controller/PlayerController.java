package com.claim.controller;
import com.claim.entity.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.claim.repository.PlayerRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;

    @RequestMapping(value="/save",
            consumes= MediaType.APPLICATION_JSON_VALUE,
            produces=MediaType.APPLICATION_JSON_VALUE,
            method= RequestMethod.POST)
    private void submitPlayerDetails(@RequestBody Player player) {
        playerRepository.save(player);

    }

    @RequestMapping(value="/findPlayerByEmail",
            produces=MediaType.APPLICATION_JSON_VALUE,
            method= RequestMethod.GET)
    private ResponseEntity<Optional<Player>> findByEmail(String email)
    {
        Optional<Player> playerByEmail = Optional.ofNullable(playerRepository.findByEmail(email));
        return new ResponseEntity<>(playerByEmail, HttpStatus.OK);

    }

    @RequestMapping(value="/login",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces=MediaType.APPLICATION_JSON_VALUE,
            method= RequestMethod.POST)
    @ResponseBody
    private ResponseEntity <Player> loginPlayer(@RequestBody Player player) {
        Player loginPlayer = playerRepository.loginPlayer(player.getEmail(), player.getPassword());

        if (loginPlayer != null) {
            return new ResponseEntity<>(loginPlayer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);


        }
    }


    @RequestMapping(value="/findAllPlayers",
            produces=MediaType.APPLICATION_JSON_VALUE,
            method= RequestMethod.GET)
    public ResponseEntity<List<Player>>findAll()
    {
        List<Player> players = playerRepository.findAll();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

}
