package com.claim.repository;

import com.claim.entity.PlayerReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;


@Repository
public interface PlayerReportRepository extends JpaRepository<PlayerReport, Integer> {

//    PlayerReport findReportById(Integer reportId);

}
