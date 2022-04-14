package com.claim.controller;
import com.claim.entity.Player;
import com.claim.entity.PlayerReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.claim.repository.PlayerReportRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class PlayerReportController {

    @Autowired
    private PlayerReportRepository playerReportRepository;


    @RequestMapping(value="/findAllPlayerReports",
            produces=MediaType.APPLICATION_JSON_VALUE,
            method= RequestMethod.GET)
    public ResponseEntity<List<PlayerReport>> findAll()
    {
        List<PlayerReport> playerReports = playerReportRepository.findAll();
        return new ResponseEntity<>(playerReports, HttpStatus.OK);
    }

    @RequestMapping(value="/findReportById",
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    private ResponseEntity<Optional<PlayerReport>> findById(Integer reportId)

    {
        Optional<PlayerReport> reportById = playerReportRepository.findById(reportId);
        return new ResponseEntity<>(reportById, HttpStatus.OK);
    }



}
