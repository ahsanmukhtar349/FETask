import { Fragment } from "react";
import logo from '../../Assets/logo.png';
import twiterIcon from '../../Assets/twiterIcon.png';
import fbIcon from '../../Assets/fbIcon.png';
import youtube from '../../Assets/youtube.png';
import game from '../../Assets/game.png';
import './Footer.css';

const Footer = () =>{
    return<Fragment>
        <div className="FooterSection">
            <div className="container text-center">
                <div className="w-75 m-auto pb-5">
                             <img src={logo} alt="logo" className='logoImg mb-3'/>
                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.</p>
                    <div className="media_link ">
                         <a href="/"> <img src={fbIcon} alt="media" /></a>
                        <a href="/"> <img src={twiterIcon} alt="media" /></a>
                        <a href="/"> <img src={youtube} alt="media" /></a>
                        <a href="/"> <img src={game} alt="media" /></a>
                       
                    </div>
                </div>

                <div className="footer_link d-flex justify-content-between align-items-center pb-3">
                    <p className="m-0">Copyright @ 2022, 777 club</p>
                    <div>
                        <a href="/" className="me-4">Term & Conditions</a>
                        <a href="/" className="me-4">Privacy Policy</a>
                        <a href="/">Cookies Policy</a>
                    </div>
                </div>
       
            </div>
        </div>
    
    </Fragment>
}

export default Footer;