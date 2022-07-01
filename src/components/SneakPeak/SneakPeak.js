import { Fragment } from 'react';
import NFT1 from '../../Assets/nft1.png';
import NFT2 from '../../Assets/nft2.png';
import NFT3 from '../../Assets/nft3.png';
import NFT4 from '../../Assets/nft4.png';
import NFT5 from '../../Assets/nft5.png';
import NFT6 from '../../Assets/nft6.png';
import NFT7 from '../../Assets/nft7.png';
import './SneakPeak.css';

const SneakPeak = () => {
    
    return<Fragment>
        <div className="sneakpeak">
             <h3 className="text-center pt-5">Sneak Peak</h3>
            <div className="container py-5">
            <div className="row">
                <div className='col-sm-2 px-1'>
                    <div className='text-center'>
                        <img src={NFT1} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT4} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT7} alt='Sneak Peak'/>
                    </div>
                
                </div>

                <div className='col-sm-2 px-1'>
                    <div className='pt-5 text-center'>
                        <img src={NFT2} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT5} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT2} alt='Sneak Peak'/>
                    </div>
                
                </div>

                <div className='col-sm-2 px-1'>
                    <div className='text-center'>
                        <img src={NFT3} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT6} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT1} alt='Sneak Peak'/>
                    </div>
                
                </div>
                <div className='col-sm-2 px-1'>
                    <div className='text-center'>
                        <img src={NFT1} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT4} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT7} alt='Sneak Peak'/>
                    </div>
                
                </div>

                <div className='col-sm-2 px-1'>
                    <div className='pt-5 text-center'>
                        <img src={NFT2} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT5} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT2} alt='Sneak Peak'/>
                    </div>
                
                </div>

                <div className='col-sm-2 px-1'>
                    <div className='text-center'>
                        <img src={NFT3} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT6} alt='Sneak Peak'/>
                    </div>
                    <div className='text-center'>
                        <img src={NFT1} alt='Sneak Peak'/>
                    </div>
                
                </div>
            </div>
        </div>
        </div>
   
    </Fragment>
}

export default SneakPeak;