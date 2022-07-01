import { Fragment } from 'react';
import './Club.css';
import passes from '../../Assets/777passess.png';
import playbtn from '../../Assets/playbtn.png';

const Club = () => {
    return<Fragment>
    <div className="passess">
        <div className="container">
            <div className='row py-5 align-items-center'>
                    <div className="col-sm-6 px-5">
                        <div className="passessimg">
                         <img src={passes} alt="NFT images" className='ClubImg' />
                         <img src={playbtn} alt="NFT images" className='playbtn' />
                        </div>
                    </div>
                    <div className="col-sm-6 px-5">
                        <h2>The 777 Club</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. </p>
                            <button className='contact_btn'>CONNECT WALLET</button>
                    </div>
                </div>
        </div>
    </div>
    </Fragment>
}

export default Club;