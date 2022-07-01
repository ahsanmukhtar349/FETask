import { Fragment } from 'react';
import './ConnectWallet.css';
import Header from '../Header/Header'
import NFT1 from '../../Assets/nft1.png';
import NFT2 from '../../Assets/nft2.png';
import NFT3 from '../../Assets/nft3.png';
import NFT4 from '../../Assets/nft4.png';
import NFT5 from '../../Assets/nft5.png';
import NFT6 from '../../Assets/nft6.png';
import NFT7 from '../../Assets/nft7.png';

const Wallet = () => {
    return <Fragment>
        <div className="MainHeading">
            <Header />
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-lg-7 col-sm-12 pt-5 pt-md-0'>
                        <h1>777 Clubhouse <br />Founder <br /> Collection</h1>
                        <p className="py-3">Elevate Your lifestyle</p>
                        <button className='contact_btn mb-5 mb-md-0'>CONNECT WALLET</button>
                    </div>
                    <div className='col-lg-5 col-sm-12'>
                    <div className="d-flex">
                        <div className='col-lg-4 col-md-4 col-sm-4 px-2'>
                            <div>
                                <img src={NFT1} alt="NFT images" className='ImgBox' />

                            </div>
                            <div>
                                <img src={NFT2} alt="NFT images" className='ImgBox' />

                            </div>
                            <div>
                                <img src={NFT3} alt="NFT images" className='ImgBox' />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 px-2'>
                            <div className="mt-5">
                                <img src={NFT4} alt="NFT images" className='ImgBox' />
                            </div>
                            <div>
                                <img src={NFT5} alt="NFT images" className='ImgBox' />
                            </div>
                            <div>
                                <img src={NFT4} alt="NFT images" className='ImgBox' />
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 px-2'>
                            <div>
                                <img src={NFT5} alt="NFT images" className='ImgBox' />
                            </div>
                            <div>
                                <img src={NFT7} alt="NFT images" className='ImgBox' />
                            </div>
                            <div>
                                <img src={NFT6} alt="NFT images" className='ImgBox' />
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

        </div>

    </Fragment>
}

export default Wallet;