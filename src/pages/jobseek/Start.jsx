import React from 'react';
import { Link } from 'react-router-dom';

//Universal CSS
import '../../assets/css/univ/Phone.css';
import '../../assets/css/univ/Pc.css';

//Personal CSS
import '../../assets/css/personal/Start.css';


import fileDownload from "../../assets/file/Guide.pdf"

function Start(){
    return(
        <div className='cont'>
            <div className='head'>
                <Link to="/" className='no-underline'><h2>HOME</h2></Link>
            </div>

            <div className="phone">
                <div className="embossed-layer">
                    <p>Before we get into Job Searching, there are certain things you'll need. Aside from Transcript of Record which is provided by the university a few weeks after graduation, you will need the following.</p>
                    <ul>
                        <li>Birth Certificate</li>
                        <li>Valid ID</li>      
                        <li>Certificate of First Time Job Seeker</li>                     
                        <li>NBI Clearance</li>
                        <li>SSS</li>                        
                        <li>Pag-Ibig</li>
                        <li>Phil-Health</li>
                        <li>Resume</li>
                    </ul>
                    <p>
                        You might already have some of the mentioned documents, but the other won't take too long to get once you have the prelimanary documents.
                    </p>
                    <p>
                        Click the buttons below to redirect you to certain pages for specific documents.
                    </p>
                </div>

                <div className="embossed-layer">
                    <p>You can also download the pdf my cousin sent to me. It will help you on how to get the required documents for Job Seeking.</p>
                    <a href={fileDownload} download="Guide.pdf"> 
                        <button className='download'>
                            DOWNLOAD
                        </button>
                    </a>
                    <p></p>
                </div>

                <div className="links">
                    <Link to="/Start/BirthCert"><button id="link-buttons">
                        Birth Certificate Reminder
                    </button></Link>
                    <Link to="/Start/ValidId"><button id="link-buttons">
                        Valid Identification Cards
                    </button></Link>
                    <Link to="/Start/CertFTJS"><button id="link-buttons">
                        Acquiring Certificate of First Time Job Seeker
                    </button></Link>
                    <Link to="/Start/NBI"><button id="link-buttons">
                        Acquiring NBI Clearance or Police Clearance
                    </button></Link>
                    <Link to="/Start/SSS"><button id="link-buttons">
                        Acquiring Social Security Number/SSS
                    </button></Link>
                    <Link to="/Start/PagIbig"><button id="link-buttons">
                        Acquiring Pag-Ibig Membership
                    </button></Link>
                    <Link to="/Start/PhilHealth"><button id="link-buttons">
                        Registering for Phil-Health
                    </button></Link>
                    <Link to="/Start/Resume"><button id="link-buttons">
                        Creating a Resume
                    </button></Link>
                </div>
            </div>


            <div className="pc">
                <div className="pc-area">
                    <div className="embossed-area">
                        <div className="embossed-layer">
                            <p>
                                Before we get into Job Searching, there are certain things you'll need. Aside from Transcript of Record which is provided by the university a few weeks after graduation, you will need the following.
                            </p>
                            <ul>
                                <li>Birth Certificate</li>
                                <li>Valid ID</li>      
                                <li>Certificate of First Time Job Seeker</li>                     
                                <li>NBI Clearance</li>
                                <li>SSS</li>                        
                                <li>Pag-Ibig</li>
                                <li>Phil-Health</li>
                                <li>Resume</li>
                            </ul>
                            <p>
                                You might already have some of the mentioned documents, but the other won't take too long to get once you have the prelimanary documents.
                            </p>
                            <p>
                                Click the buttons below to redirect you to certain pages for specific documents.
                            </p>
                        </div>

                        <div className="embossed-layer">
                            <p>You can also download the pdf my cousin sent to me. It will help you on how to get the required documents for Job Seeking.</p>
                            <a href={fileDownload} download="Guide.pdf"> 
                                <div className="center-this">
                                    <button className='download'>
                                        DOWNLOAD
                                    </button>
                                </div>
                            </a>
                            <p></p>
                        </div>
                    </div>
                    
                    <div className="link-area">
                        <div className="links">
                            <Link to="/Start/BirthCert"><button id="link-buttons">
                                Birth Certificate Reminder
                            </button></Link>
                            <Link to="/Start/ValidId"><button id="link-buttons">
                                Valid Identification Cards
                            </button></Link>
                            <Link to="/Start/CertFTJS"><button id="link-buttons">
                                Acquiring Certificate of First Time Job Seeker
                            </button></Link>
                            <Link to="/Start/NBI"><button id="link-buttons">
                                Acquiring NBI Clearance or Police Clearance
                            </button></Link>
                            <Link to="/Start/SSS"><button id="link-buttons">
                                Acquiring Social Security Number/SSS
                            </button></Link>
                            <Link to="/Start/PagIbig"><button id="link-buttons">
                                Acquiring Pag-Ibig Membership
                            </button></Link>
                            <Link to="/Start/PhilHealth"><button id="link-buttons">
                                Registering for Phil-Health
                            </button></Link>
                            <Link to="/Start/Resume"><button id="link-buttons">
                                Creating a Resume
                            </button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Start;