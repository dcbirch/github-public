import { Link } from 'react-router-dom';





function Welcome(){

    return(
        <div className="background-1">
        <div className='welcome-container'>
           <div className="w3-content" style={{ 'maxidth': '1200px' }}>

<div className="w3-panel">
    <i className="w3-xlarge fa fa-bars"></i>
</div>
{/* First Grid: Logo & About   */}
<div className="w3-row">
    <div className="w3-half w3-container ">
        <h1 className="w3-xxxlarge textshadow">Welcome </h1>
        <h1 className="w3-xxlarge textshadow">To</h1>
        <h1 className="w3-jumbo textshadow">iCue</h1>
    </div>
    <div className="text-background w3-half w3-container w3-xlarge ">
        <p className="">Sign up <Link to='/Sign-Up'>here</Link> to access features like score keeper and global player stats. Participate in the future of pool!</p>
        <p><Link to='/about-us'>Learn more</Link> about iCue and how we are impacting the billiards community</p>
    </div>
</div>

{/* Second Grid: Resent   */}
<div className="w3-row">
    <div className="w3-half w3-container">
        <img style={{ width: '100%' }} />
    </div>
</div>
</div>

</div>
</div>
    )
}


export default Welcome;