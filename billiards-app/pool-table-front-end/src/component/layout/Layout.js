
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../aboutus/AboutUs';
import Header from './../header/Header';
import SignUp from'./../signup/SignUp';
import ThankYou from './../thankyou/ThankYou';
import Profile from './../profile/Profile';
import ProtectedRoutes from './../layout/ProtectedRoutes';
import AllPlayers from '../profile/AllPlayers';
import AllMatches from './../profile/AllMatches';
import ScoreKeep from './../scorekeep/ScoreKeep';
import Welcome from './../welcome/Welcome';
import LoginError from '../error/LoginError';


function Layout (){


return(
<>
<Header/>
<Routes>
<Route path="/" element={<Welcome/>} />
<Route path="/sign-up" element={<SignUp/>} />
<Route path="/about-us" element={<AboutUs/>} />
<Route path="/thank-you" element={<ThankYou/>} />
<Route path="/score-keep" element={<ScoreKeep/>} />
<Route path="/login-error" element={<LoginError/>} />
</Routes>
<Routes element ={<ProtectedRoutes />} >
<Route path='/profile' element={<Profile />}> 
<Route path='/profile/all-players' element={<AllPlayers />}/>
<Route path='/profile/all-matches' element={<AllMatches />}/>
</Route>
</Routes>

</>


)
}


export default Layout