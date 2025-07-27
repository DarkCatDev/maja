import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/univ/Phone.css';
import '../../assets/css/univ/Pc.css';
import '../../assets/css/personal/CertFTJS.css';


function Cert(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>This Certificate isn't required pero makaka libre ka sa NBI if meron ka nito.</p>
                    <p>In order to get free NBI Clearance, you'll need a Certificate of First Time Job Seeker. It also said contains a benefit of no transaction fee in requesting for NBI clearance. You can request it in your barangay.</p>                    
                    <p>There is no requirements in requesting the Certificate but you may need to properly check your full name and age that you'll give to the secretary in Barangay. It may also take a while depending on the availability of the barangay captain. It may take days so ensure you request it as soon as you are graduated and free of time.</p>
                    <p>I think barangay offices aren't open on weekends but try mo padin boss hehe</p>
                </div>
                <div className="embossed-layer">
                    <p>Also, may specific format ang Certificate of First Time Job Seeker according sa NBI office. It should contain prepared by: which is the secretary, and attested by: which is for the barangay captain to sign. </p>
                    <p>You'll also have to sign another which is an oath taking. This is prepared by the barangay along with the Certifacte of First Time Job Seeker.</p>
                </div>
            </div>



            <div className="pc">
                <div className="pc-area">
                    <div className="embossed-layer">
                        <p>This Certificate isn't required pero makaka libre ka sa NBI if meron ka nito.</p>
                        <p>In order to get free NBI Clearance, you'll need a Certificate of First Time Job Seeker. It also said contains a benefit of no transaction fee in requesting for NBI clearance. You can request it in your barangay.</p>                    
                        <p>There is no requirements in requesting the Certificate but you may need to properly check your full name and age that you'll give to the secretary in Barangay. It may also take a while depending on the availability of the barangay captain. It may take days so ensure you request it as soon as you are graduated and free of time.</p>
                        <p>I think barangay offices aren't open on weekends but try mo padin boss hehe</p>
                    </div>
                    <div className="embossed-layer">
                        <p>Also, may specific format ang Certificate of First Time Job Seeker according sa NBI office. It should contain prepared by: which is the secretary, and attested by: which is for the barangay captain to sign. </p>
                        <p>You'll also have to sign another which is an oath taking. This is prepared by the barangay along with the Certifacte of First Time Job Seeker.</p>
                    </div>
                </div>
            </div>


            <div className="bc-links">
                <Link to="/start"><button id="home-buttons2">
                    Return
                </button></Link>
            </div>
        </div>
    )
}

export default Cert;