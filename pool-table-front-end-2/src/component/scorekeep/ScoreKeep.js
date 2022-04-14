import { useState, useEffect } from "react";
import List from "./List";
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




function ScoreKeep() {


    const navigate = useNavigate();
    
    const [solids, setSolids] = useState([]);

    const[stripes, setStripes] = useState([]);

    const[cue, setCue] = useState([]);

    const[eight, setEight] = useState([]);

    const[player1, setPlayer1] = useState({email:''});

    const[player2, setPlayer2] = useState({email:''});

    const[winnerLoser, setWinnerLoser] = useState({winner:'', loser:''});
    
    const [firstBall, setFirstBall] = useState();

    

    

    const assignPlayers = () =>{
        const tempPlayer1 = [player1]
        const tempPlayer2 = [player2]
        .then(response => localStorage.setItem('player1', 
            response.data.email)('player2', 
            response.data.email));
       
    }

    const assignPlayer1 = () => {
    
        axios.post("http://localhost:8080/findPlayerByEmail", player1)
        .then(response => {localStorage.setItem('player1', 
            response.data.email); // In the real world we would use a token to keep track
            console.log("")
             }
             )
             .catch(error => { console.log("") 
                }
                );
        }

    const assignPlayer2 = () => {
    
        axios.post("http://localhost:8080/findPlayerByEmail", player2)
        .then(response => {localStorage.setItem('player2', 
            response.data.email); // In the real world we would use a token to keep track
            console.log("")
            }
            )
            .catch(error => { console.log("") 
                }
                );
               
        }

    const populateSolids = () => {
        const tempBalls = [];
        for(let i = 1; i<8; i++){
            tempBalls.push({
                image:require("../../images/balls/"+i+"ball.png"),
                isDropped: false
            });
        }

        setSolids(tempBalls)
    }

    const populateStripes = () => {
        const tempBalls = [];
        for(let i = 9; i<16; i++){
            tempBalls.push({
                image:require("../../images/balls/"+i+"ball.png"),
                isDropped: false
            });
        }

        setStripes(tempBalls)
    }

    const populateCue = () => {
        const tempBalls = [];
        for(let i = 0; i<1; i++){
            tempBalls.push({
                image:require("../../images/balls/"+i+"ball.png"),
                isDropped: false
            });
        }

        setCue(tempBalls)
    }

    const populateEight = () => {
        const tempBalls = [];
        //for(let i = 0; i<1; i++){
            tempBalls.push({
                image:require("../../images/balls/8ball.png"),
                isDropped: false
            });
        //}
        setEight(tempBalls)
    }

    useEffect(() => {
        populateSolids();
        populateStripes();
        populateCue();
        populateEight();
       
    }, [] // This argument allows a render when this variable  
          // updates. Since we only want to call this function once 
          // when the component loads, no need to add a tracking 
          // variable
          );

    const droppedSolid = (index) =>{
        const tempSolids = [...solids]
        const tempFirstBall = 'True'
        tempSolids[index].isDropped = !tempSolids[index].isDropped;
        setSolids(tempSolids)
        if(firstBall == null){
        handleShowFirstBallModal(tempFirstBall)
        setFirstBall(tempSolids)};
        

        }
    

    const droppedStripe = (index) =>{
        const tempBalls = [...stripes]
        const tempFirstBall = 'True'
        tempBalls[index].isDropped = !tempBalls[index].isDropped;
        setStripes(tempBalls)
        if(firstBall == null){
        handleShowFirstBallModal(tempFirstBall)
        setFirstBall(tempBalls)};
    }

    const droppedCue = (index) =>{
        const tempBalls = [...cue]
        tempBalls[index].isDropped = !tempBalls[index].isDropped;
        setCue(tempBalls)
    }

    const droppedEight = (index) =>{
        const tempBalls = [...eight]
        tempBalls[index].isDropped = !tempBalls[index].isDropped;
        setEight(tempBalls)
    }
    
    const toggleDisplay =() => {
        
    }

    const [show8BallModal, setShow8BallModal] = useState(false);

    const handleClose8BallModal = () => setShow8BallModal(false);
    const handleShow8BallModal = () => setShow8BallModal(true)

    const [showCueBallModal, setShowCueBallModal] = useState(false);

    const handleCloseCueBallModal = () => setShowCueBallModal(false);
    const handleShowCueBallModal = () => setShowCueBallModal(true)

    const [showFirstBallModal, setShowFirstBallModal] = useState(false);
    const handleCloseFirstBallModal = () => setShowFirstBallModal(false);
    const handleShowFirstBallModal = () => setShowFirstBallModal(true)

    const [showAssignPlayerModal, setAssignPlayerModal] = useState(true);
    const handleCloseAssignPlayerModal = () => setAssignPlayerModal(false);
    const handleShowAssignPlayerModal = () => setAssignPlayerModal(true)

    const player1ChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempPlayer1 = {...player1};
        tempPlayer1[name] = value;
        setPlayer1(tempPlayer1);
    }

    const player2ChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempPlayer2 = {...player2};
        tempPlayer2[name] = value;
        setPlayer2(tempPlayer2);
    }

    const endGame = () =>{
        axios.post("http://localhost:8080/endGame", winnerLoser)
        .then(response => { 
            console.log(navigate('/thank-you'))
             }).catch( error => { console.log("in the future add logic to navigate to the error page") 
                });
    }



return (
    <div className=''>
    <div className='background-3  background-4'>
    <div className='score-keep-container'>

    <Modal
        show={showAssignPlayerModal}
        onHide={handleCloseAssignPlayerModal}
        backdrop="static"
        keyboard={false}
        >
            
       
        <Modal.Body className="modal-container">
          Who is playing?
          <input onChange ={player1ChangeHandler} name= "email" value={player1.email} className="form-control me-2 player-email-button" type="email" placeholder="Player 1 Email"/>
          <Button variant ="secondary player-button" onClick={assignPlayer1}>
           Assign Player 1
          </Button>
          <input onChange ={player2ChangeHandler} name= "email" value={player2.email} className="form-control me-2 player-email-button" type="email" placeholder="Player 2 Email"/>
          <Button variant="secondary player-button" onClick={assignPlayer2}>Assign Player 2</Button>
          <Button variant="primary go-back-container" onClick={handleCloseAssignPlayerModal}>Done</Button>
        </Modal.Body>
      </Modal>

        <span className="test-background profile-button ">{player1.email} VS. {player2.email}</span>
        <h1>Solids</h1>
        <List onDropped={droppedSolid}  balls={solids}/>
        <h1>Stripes</h1>
        <List onDropped={droppedStripe}  balls={stripes}/>
        <h1>Cue Ball</h1>
        <List onDropped={handleShowCueBallModal} balls={cue}/>
        <h1>8 Ball</h1>
        <List onDropped={handleShow8BallModal} balls={eight}/>
        
        <Modal
        show={showFirstBallModal}
        onHide={handleCloseFirstBallModal}
        backdrop="static"
        keyboard={false}
        >
            
       
        <Modal.Body className="modal-container">
          Who sank the first ball?
          <Button variant ="secondary player-button" onClick={handleCloseFirstBallModal}>
            Player 1
          </Button>
          <Button variant="secondary player-button" onClick={handleCloseFirstBallModal}>Player 2</Button>
          <Button variant="primary go-back-container" onClick={handleCloseFirstBallModal}>Go Back</Button>
        </Modal.Body>
      </Modal>

        <Modal
        show={show8BallModal}
        onHide={handleClose8BallModal}
        backdrop="static"
        keyboard={false}
        >
            
       
        <Modal.Body className="modal-container">
          Who sank the 8 ball?
          <Button variant="secondary player-button">
            Player 1
          </Button>
          <Button variant="secondary player-button">Player 2</Button>
          <Button variant="primary go-back-container" onClick={handleClose8BallModal}>Go Back</Button>
        </Modal.Body>
      </Modal>
      <Modal
        show={showCueBallModal}
        onHide={handleCloseCueBallModal}
        backdrop="static"
        keyboard={false}
        >
       
        <Modal.Body className="modal-container">
          Who sank the Cue ball?
          <Button variant="secondary player-button">
            Player 1
          </Button>
          <Button variant="secondary player-button">Player 2</Button>
          <Button variant="primary go-back-container" onClick={handleCloseCueBallModal}>Go Back</Button>
        </Modal.Body>
      </Modal>
      
    </div>
    </div>
    </div>
    
  );
}

export default ScoreKeep;
