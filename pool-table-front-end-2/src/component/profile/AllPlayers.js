import { useState, useEffect } from 'react';
import axios from'axios';



function AllPlayers() {

    const[player,setPlayer] = useState([]);

    useEffect(() => {
         axios.get('http://localhost:8080/findAllPlayers')
         .then(response => {
            // Spring returns a Student object hence we save in the 
            // state variable called student
             setPlayer(response.data);
         }).catch(error => {

         });
      }, [] // This argument allows a render when this variable  
            // updates. Since we only want to call this function once 
            // when the component loads, no need to add a tracking 
            // variable
            );


    return (
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
{ player.map( (player, index) =>  {
                    return (

                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Player Name</text></svg>
  <div className="card-body">
   <p className="card-text">First Name: {player.firstName} </p>
    <p className="card-text">Last Name: {player.lastName} </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
       <button type="button" className="btn btn-sm btn-outline-secondary">
                   Facebook
        </button>
       <button type="button" className="btn btn-sm btn-outline-secondary">
LinkedIn
        </button>
 
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
  )
}    )        }

                </div>
)
    }
export default AllPlayers