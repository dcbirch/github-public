import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function SignUp (){



    const navigate = useNavigate();
    const[signUpPlayer,setSignUpPlayer] = useState({firstName:"", lastName:"", email:"", password:"",});
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignUp = {...signUpPlayer};
        tempSignUp[name] = value;
        setSignUpPlayer(tempSignUp);
    }

    const signUpSubmitHandler = () => {
    
        axios.post("http://localhost:8080/save", signUpPlayer)
        .then(response => { 
            console.log(navigate('/thank-you'))
             }).catch( error => { console.log("in the future add logic to navigate to the error page") 
                });
        }


    return (
        <div className='background-1'>
        <div className="sign-up-container container">
        <form className="row g-3">
  <h2> Join iQue</h2>
<div className="col-md-6">
    <label for="inputFirstName" className="form-label">First Name</label>
    <input onChange ={changeHandler} name="firstName" value={signUpPlayer.firstName} type="text" className="form-control" id="inputFirstName" />
  </div>
  <div className="col-md-6">
    <label for="inputLastName" className="form-label">Last Name</label>
    <input onChange ={changeHandler} name="lastName" value={signUpPlayer.lastName} type="text" className="form-control" id="inputLastName" />
  </div>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input onChange ={changeHandler} name="email" value={signUpPlayer.email} type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input onChange ={changeHandler} name="password" value={signUpPlayer.password} type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <div className="form-check checkbox">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check this box if you agree with member terms located <a href='/terms-and-conditions'>here</a>
      </label>
    </div>
  </div>
    <div className="d-grid gap-2 ">
      <button onClick={signUpSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Sign up</button>
</div>
</form>
    </div>
    </div>
    )
}

export default SignUp