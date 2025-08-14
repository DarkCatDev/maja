import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/univ/Phone.css';
import '../../assets/css/univ/Pc.css';

import '../../assets/css/personal/Nbi.css';



import hehe from '../../assets/img/hehe.gif';
import freenbi from '../../assets/img/NBIFREE.png';
import FNBI from '../../assets/img/FTJSNBI.png';
import PC from '../../assets/img/PolClear.jpg';

function NBI(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <div className="embossed-layer">
                    <p>If you have the Certificate of First Time Job Seeker, requesting for NBI clearance should go smoothly. Else you have to pay an amount through Gcash.</p>                    
                    <p>The office of NBI should be located in Boclod, San Jose, Camarines Sur. Just beside the road, inside the Boclod Market.</p>
                    <p>Pero bago ka pumunta dun, need mo muna mag apply online para sa appointment. </p>
                    <Link to="https://clearance.nbi.gov.ph/"><button>https://clearance.nbi.gov.ph/</button></Link>
                    <p>Ensure mo na yung First Job Seeker ang pipindutin mo, hindi direct register.</p>
                    <img src={freenbi} alt="404" id='img6'/>
                    <p>It will redirect you to a form, which will give you an account.</p>
                </div>
                <div className="embossed-layer">
                    <img src={FNBI} alt="404" id='img7'/>
                </div>
                <div className="embossed-layer">
                    <p>After creating, pwede ka na mag log-in. Pero may need ka pang completohin na personal information after mag log in. Examples ng pifill apan:</p>
                        <ul>
                            <li>Nickname</li>
                            <li>Civil Status</li>
                            <li>Parent's Name and their Birth Place</li>
                            <li>Education Attainment</li>
                            <li>Occupation</li>
                            <li>Religion</li>
                            <li>Height and Weight</li>
                            <li>Complexion</li>
                            <li>Identifying marks</li>
                        </ul>
                    
                </div>

                <div className="embossed-layer">
                    <p>Police Clearance was said to be not required in Job Seeking, pero sa OJT, it ang kailangan. But if you wish to get one, you'll have to request online then go to any police station near you. Na try ko lang siya nung time na nag OJT ako, and pero akalimutan ko na magkano yung fee hehe.</p>
                    <div>
                        <img src={hehe} alt="404" />
                    </div>
                    <p>Update ko ito pag naalala ko ulit. hehe</p>
                </div>

                <div className="embossed-layer">
                    <img src={PC} alt="404" id='img8'/>
                    <p>Btw, ito yung process online. Also, Gcash payment din which amounts daw to php 180.</p>
                    <Link to="https://pnpclearanceph.ph/"><button>https://pnpclearanceph.ph/</button></Link>
                    <p>I put the direct to clearance site kasi napansin ko na ang https://policeclearanceph.ph/ is a link to a site where intructions on how to apply police clearance is being given. You can follow the instructions nalang there.</p>
                </div>
            </div>

            <div className="pc">
                <div className="pc-area2">
                    <div className="embossed-layer">
                        <p>If you have the Certificate of First Time Job Seeker, requesting for NBI clearance should go smoothly. Else you have to pay an amount through Gcash.</p>                    
                        <p>The office of NBI should be located in Boclod, San Jose, Camarines Sur. Just beside the road, inside the Boclod Market.</p>
                        <p>Pero bago ka pumunta dun, need mo muna mag apply online para sa appointment. </p>
                        <Link to="https://clearance.nbi.gov.ph/"><button>https://clearance.nbi.gov.ph/</button></Link>
                        <p>Ensure mo na yung First Job Seeker ang pipindutin mo, hindi direct register.</p>
                        <img src={freenbi} alt="404" id='img6'/>
                        <p>It will redirect you to a form, which will give you an account.</p>
                    </div>
                    
                    <div className="embossed-layer">
                        <img src={FNBI} alt="404" id='img7'/>
                    </div>

                    <div className="embossed-layer">
                        <p>After creating, pwede ka na mag log-in. Pero may need ka pang completohin na personal information after mag log in. Examples ng pifill apan:</p>
                        
                            <ul>
                                <li>Nickname</li>
                                <li>Civil Status</li>
                                <li>Parent's Name and their Birth Place</li>
                                <li>Education Attainment</li>
                                <li>Occupation</li>
                                <li>Religion</li>
                                <li>Height and Weight</li>
                                <li>Complexion</li>
                                <li>Identifying marks</li>
                            </ul>
                        
                    </div>

                    <div className="embossed-layer">
                        <p>Police Clearance was said to be not required in Job Seeking, pero sa OJT, it ang kailangan. But if you wish to get one, you'll have to request online then go to any police station near you. Na try ko lang siya nung time na nag OJT ako, and pero akalimutan ko na magkano yung fee hehe.</p>
                        <div>
                            <img src={hehe} alt="404" />
                        </div>
                        <p>Update ko ito pag naalala ko ulit. hehe</p>
                    </div>

                    <div className="embossed-layer">
                        <img src={PC} alt="404" id='img8'/>
                        <p>Btw, ito yung process online. Also, Gcash payment din which amounts daw to php 180.</p>
                        <Link to="https://pnpclearanceph.ph/"><button>https://pnpclearanceph.ph/</button></Link>
                        <p>I put the direct to clearance site kasi napansin ko na ang https://policeclearanceph.ph/ is a link to a site where intructions on how to apply police clearance is being given. You can follow the instructions nalang there.</p>
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

export default NBI;