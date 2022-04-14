import { Outlet } from 'react-router-dom';
import SignUp from './../signup/SignUp';





function ProtectedRoutes (){

        if (localStorage.getItem('loggedInPlayer')){
            return(
                <Outlet />
            )
        }else{
            return(
                <SignUp />

            )
        }



}

export default ProtectedRoutes