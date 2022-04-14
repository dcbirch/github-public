import pic1 from '../../images/pexels-photo-6503566.jpeg';
import pic2 from '../../images/pexels-photo-7403816.jpeg';






function AboutUs () {
return(
<div className='background-1'>
<div className="w3-content about-us-container" style={{ 'max-width': '1200px' }}>

<div className="w3-panel">
    <i className="w3-xlarge fa fa-bars"></i>
</div>
{/* First Grid: Logo & About   */}
<div className="w3-row">
    <div className="w3-half w3-container">
        <h1 className="w3-xlarge ">Thanks for checking out</h1>
        <h1 className="w3-jumbo ">iCue</h1>
    </div>
    <div className="text-background w3-half w3-container w3-xlarge w3-text-black">
        <p className="">We create a more competitive billiards community by empowering new talent to join our ranks</p>
        <p>iCue is saving the future of the billiards community</p>
    </div>
</div>

{/* Second Grid: Resent   */}
<div className="w3-panel">
    <h4>Features</h4>
</div>
<div className="w3-row">
    <div className="w3-half w3-container">
        <img src={pic2} style={{ width: '100%' }} />
    </div>
    <div className="w3-half w3-container">
        <img src={pic1} style={{ width: '100%' }} /> </div>
</div>
</div>
</div>



)




}


export default AboutUs