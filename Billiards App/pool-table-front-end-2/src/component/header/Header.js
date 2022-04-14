import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import iCueLogo from '../../images/'
import OneBall from '../../images/1ball.png';
import logo from '../../images/iCueLogo.png';



function Header(){

    const[signInPlayer,setSignInPlayer] = useState({email:"", password:""});


    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = {...signInPlayer};
        tempSignIn[name] = value;
        setSignInPlayer(tempSignIn);
    }


    const navigate = useNavigate();
    const signInSubmitHandler = () => {
    
        axios.post("http://localhost:8080/login", signInPlayer)
        .then(response => {localStorage.setItem('loggedInPlayer', 
            response.data.email); // In the real world we would use a token to keep track
            console.log(navigate('/profile'))
             }
             )
             .catch(error => { console.log(navigate('/login-error')) 
                }
                );
        }
        const signOutSubmitHandler = () => {
            localStorage.removeItem("loggedInPlayer");
	        navigate('/');
            }

        const toggleDisplay =() => {
            if(localStorage.getItem('loggedInPlayer') ) {
                return(
                    <div className="container-fluid">
                    <div className="collapse navbar-collapse " id="navbarCollapse">
                      <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                          <Link className="nav-links btn active" aria-current="page" to="/settings">Settings</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-links btn " to="/profile">Profile</Link>
                        </li>
                      </ul>
                      <form className="d-flex">
                        <button onClick={signOutSubmitHandler} className="logout btn nav-links " type="button">Logout</button>
                      </form>
                    </div>
                  </div>  
                )
            }else{
                return (
                <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-links active" aria-current="page" to="/sign-up">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/about-us">About Us</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input onChange ={changeHandler} name= "email" value={signInPlayer.email} className="form-control me-2" type="email" placeholder="Email" aria-label="Email" />
          <input onChange ={changeHandler} name= "password" value={signInPlayer.password} className="form-control me-2" type="password" placeholder="Password" aria-label="Password" />
          <button onClick={signInSubmitHandler} className="logout btn nav-links " type="button">Login</button>
        </form>
      </div>
    </div>
                )
            }
        }


    return(
        <header>
   <div className="mb-5">
   <nav className=" navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={logo} className="logo-image"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {toggleDisplay()}
    </div>
  </nav>
  </div>
</header>

    )

}



export default Header