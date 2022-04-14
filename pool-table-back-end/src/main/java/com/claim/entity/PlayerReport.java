package com.claim.entity;
import javax.persistence.*;

@Entity
@Table(name="player_report")
public class PlayerReport {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="report_id")
    private Integer reportId;

    //REFERENCES Player
    @OneToOne
    @JoinColumn (name="player_id")
    private Player player;


    @Column(name="total_won")
    private Integer totalWon;


    @Column(name="total_played")
    private Integer totalPlayed;

    @Column(name="rating")
    private Integer rating;

    public PlayerReport() {
    }

    public PlayerReport(Integer reportId, Player player, Integer totalWon, Integer totalPlayed, Integer rating) {
        this.reportId = reportId;
        this.player = player;
        this.totalWon = totalWon;
        this.totalPlayed = totalPlayed;
        this.rating = rating;
    }

    public Integer getReportId() {
        return reportId;
    }

    public void setReportId(Integer reportId) {
        this.reportId = reportId;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Integer getTotalWon() {
        return totalWon;
    }

    public void setTotalWon(Integer totalWon) {
        this.totalWon = totalWon;
    }

    public Integer getTotalPlayed() {
        return totalPlayed;
    }

    public void setTotalPlayed(Integer totalPlayed) {
        this.totalPlayed = totalPlayed;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
