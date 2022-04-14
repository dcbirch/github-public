package com.claim.repository;

import com.claim.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer>{

    Player findByEmail(String email);


    @Query("SELECT p from Player p WHERE p.email = ?1 AND p.password = ?2")
    Player loginPlayer(String email, String password);
}
