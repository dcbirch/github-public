package com.claim.controller;
import com.claim.entity.Game;
import com.claim.entity.Player;
import com.claim.entity.PlayerReport;
import com.claim.repository.PlayerReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.claim.repository.GameRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class GameController {

    @Autowired
    private GameRepository gameRepository;

    @RequestMapping(value="/findAllGames",
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    public ResponseEntity<List<Game>> findAll()
    {
        List<Game> games = gameRepository.findAll();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @RequestMapping(value="/findGameById",
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    private ResponseEntity<Optional<Game>> findById(Integer gameId)

    {
        Optional<Game> gameById = gameRepository.findById(gameId);
        return new ResponseEntity<>(gameById, HttpStatus.OK);
    }

    @RequestMapping(value="/endGame",
            consumes= MediaType.APPLICATION_JSON_VALUE,
            produces=MediaType.APPLICATION_JSON_VALUE,
            method= RequestMethod.POST)
    private void saveGame(@RequestBody Game game) {
        gameRepository.save(game);

    }

}
