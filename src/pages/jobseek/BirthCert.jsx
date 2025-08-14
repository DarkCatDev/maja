import React from "react";
import '../../assets/css/univ/Phone.css';
import '../../assets/css/univ/Pc.css';
import '../../assets/css/personal/BirthCert.css';

import { Link } from 'react-router-dom';

import PSA from '../../assets/img/PSA.png';


function BirthCert(){
    return(
        <div className="container">
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>
            <div className="phone">
                <img src={PSA} alt="" />
                <div className="embossed-layer">
                    <p>Birth Certificate is the primary Identification for every citizen of Philippines. It is issued by the Local Civil Registrar of the place where the birth occurred.</p>
                    <p>Note!</p>
                        <i>
                            <ul>
                                <li>Always have many photocopies of your birth Certificate and keep it in a safe place. Mas maganda if naka Binder or plastic envelope para di masira o mabasa. Hindi lang hardcopy, pati din softcopy na nasa flash drive, phone or laptop.</li>
                                <li>Birth Certificates aren't usually required to most company so giving them a copy isn't nessessary unless its a Government or Civil Service Application.</li>
                                <li>When still in the process of applying and interview, do not give a copy of your Birth Certificate. Di naman nila kailangan personal information mo agad agad, eh di pa nga nakapasok sa trabaho. Be safe and be cautious.</li>
                                <li>Private Sector Jobs only require Valid Government ID, SSS, Tin Number, Diploma/TOR, NBI Clearance, and Medical Certificate. You should keep your private info safe. Kaya if hinihingian ka ng private information, think twice and research the company.</li>
                            </ul>
                        </i>
                    <p>Kakatawa lang kasi napasa ko sa University yung Original Copy ko Lol. Yun daw kasi required. Buti nalang meron pa akong copies. Share ko lang.</p>
                </div>

                <div className="embossed-layer">
                    <p>Regarding sa pag request ng another real copy of PSA birth Certificate, I'm still unsure how. But I do know it would take a while and you have to send a letter to it's office. Pero internet age na ngayon so baka goods na din though online.</p>
                </div>
            </div>

            <div className="pc">
                <img src={PSA} alt="" />
                <div className="embossed-area2">
                    <div className="embossed-layer2">
                        <p>Birth Certificate is the primary Identification for every citizen of Philippines. It is issued by the Local Civil Registrar of the place where the birth occurred.</p>
                        <p>Note!</p>
                            <i>
                                <ul>
                                    <li>Always have many photocopies of your birth Certificate and keep it in a safe place. Mas maganda if naka Binder or plastic envelope para di masira o mabasa. Hindi lang hardcopy, pati din softcopy na nasa flash drive, phone or laptop.</li>
                                    <li>Birth Certificates aren't usually required to most company so giving them a copy isn't nessessary unless its a Government or Civil Service Application.</li>
                                    <li>When still in the process of applying and interview, do not give a copy of your Birth Certificate. Di naman nila kailangan personal information mo agad agad, eh di pa nga nakapasok sa trabaho. Be safe and be cautious.</li>
                                    <li>Private Sector Jobs only require Valid Government ID, SSS, Tin Number, Diploma/TOR, NBI Clearance, and Medical Certificate. You should keep your private info safe. Kaya if hinihingian ka ng private information, think twice and research the company.</li>
                                </ul>
                            </i>
                        <p>Kakatawa lang kasi napasa ko sa University yung Original Copy ko Lol. Yun daw kasi required. Buti nalang meron pa akong copies. Share ko lang.</p>
                    </div>

                    <div className="embossed-layer2">
                        <p>Regarding sa pag request ng another real copy of PSA birth Certificate, here's a post regarding.</p>
                        <Link to="https://www.facebook.com/psacamsur/posts/pfbid0Zjzz3fsZ8tDyF26i1hopgXXn52hE2m1GTNBTMiCWRYveZuU2uRL76dEfHgzAkovCl"><button id="psa-button">PSA information FB post</button></Link>
                        <p>The next button should redirect you to the PSA appoinment site where you can request different types of PSA documents from Birth Certificate to Certificate of No Marriage.</p>
                        <Link to="https://appointment.psa.gov.ph"> <button id="psa-button">PSA Appointment Website</button></Link>
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

export default BirthCert;