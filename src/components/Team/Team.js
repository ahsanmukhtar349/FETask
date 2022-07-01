import { Fragment } from "react";
import './Team.css';
import team1 from '../../Assets/team1.png';
import team2 from '../../Assets/team2.png';
import team3 from '../../Assets/team3.png';
import twiterIcon from '../../Assets/twiterIcon.png';
import fbIcon from '../../Assets/fbIcon.png';

const Team = () => {
    return<Fragment>
        <div className="Team_Section">
         <div className="container">
             <h3 className="text-center mb-5">Meet Our Founding Team</h3>
             <div className="row align-items-center my-sm-0 my-4">
                    <div className="col-sm-3 TeamImg">
                        <img src={team1} alt="Team"/>
                        <p>Lyons</p>
                    </div>
                    <div className="col-sm-6 ps-3 ps-sm-5">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                             to make a type specimen book. It has survived not only five centuries,</p>
                             <div>
                                <a href="/">
                                    <img src={twiterIcon} alt="Icon" className="icon"/>
                                </a>
                               <a href="/">
                                    <img src={fbIcon} alt="Icon" className="icon ms-3"/>
                               </a>
                              
                             </div>
                             
                    </div>
             </div>

             <div className="row align-items-center my-sm-0 my-4">
                    <div className="col-sm-6">
                        <p className="w-75">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                         has been the industry's standard </p>
                             <div>
                                <a href="/">
                                    <img src={twiterIcon} alt="Icon" className="icon"/>
                                </a>
                               <a href="/">
                                    <img src={fbIcon} alt="Icon" className="icon ms-3"/>
                               </a>
                              
                             </div>
                    </div>
                    <div className="offset-md-2 col-sm-3 ps-3 ps-sm-5 mt-3 mt-sm-0 TeamImg">
                    <img src={team2} alt="Team"/>
                        <p>ApeGuevara</p>
                             
                    </div>
             </div>

             <div className="row align-items-center my-sm-0 my-4">
                    <div className="col-sm-3 TeamImg">
                        <img src={team3} alt="Team"/>
                        <p>Lyons</p>
                    </div>
                    <div className="col-sm-6 ps-3 ps-sm-5">
                        <p className="m-0">orem Ipsum is simply dummy text of the </p>
                        <p className="m-0">orem Ipsum is simply dummy text of the </p>
                        <p>orem Ipsum is simply dummy text of the </p>
                             <div>
                                <a href="/">
                                    <img src={twiterIcon} alt="Icon" className="icon"/>
                                </a>
                               <a href="/">
                                    <img src={fbIcon} alt="Icon" className="icon ms-3"/>
                               </a>
                              
                             </div>
                             
                    </div>
             </div>
        </div>
        </div>
       
   
    </Fragment>
}

export default Team;