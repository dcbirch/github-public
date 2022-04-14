package com.claim.entity;
import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name="game")
public class Game {

    @Column(name = "end")
    private Timestamp end;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name= "game_id")
    private Integer gameId;

    @Column(name="loser")
    private String loser;

    //FOREIGN KEY Player
    @ManyToOne
    @JoinColumn (name="player_1")
    private Player player1;

    //FOREIGN KEY Player
    @ManyToOne
    @JoinColumn(name="player_2")
    private Player player2;

    @Column(name="start")
    private Timestamp start;

    @Column(name="winner")
    private String winner;

    public Game() {
    }

    public Game(Timestamp end, Integer gameId, String loser, Player player1, Player player2, Timestamp start, String winner) {
        this.end = end;
        this.gameId = gameId;
        this.loser = loser;
        this.player1 = player1;
        this.player2 = player2;
        this.start = start;
        this.winner = winner;
    }

    public Timestamp getEnd() {
        return end;
    }

    public void setEnd(Timestamp end) {
        this.end = end;
    }

    public Integer getGameId() {
        return gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public String getLoser() {
        return loser;
    }

    public void setLoser(String loser) {
        this.loser = loser;
    }

    public Player getPlayer1() {
        return player1;
    }

    public void setPlayer1(Player player1) {
        this.player1 = player1;
    }

    public Player getPlayer2() {
        return player2;
    }

    public void setPlayer2(Player player2) {
        this.player2 = player2;
    }

    public Timestamp getStart() {
        return start;
    }

    public void setStart(Timestamp start) {
        this.start = start;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }
}
