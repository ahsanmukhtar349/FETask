import { Fragment } from 'react';
import './Header.css';
import logo from '../../Assets/logo.png';

const Header = () => {

  const Nav_bar = ['HOME', 'ABOUT US', 'ROAD MAP', 'TEAM', 'WALLET COLLECT', 'MINTING'];

    return<Fragment>
  <nav className="navbar navbar-expand-sm navbar-dark Top_header pt-4">
  <div className="container">
    <div className="d-flex w-100 align-items-center justify-content-between">
         <a href='/' className="navbar-brand">  <img src={logo} alt="NFT images" className='logoImg'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end Mobileheader" id="mynavbar">
      <ul className="navbar-nav">
         {Nav_bar.map(Navbar =>
        <li className="nav-item">
          <a href='/' className="nav-link p-2 p-md-4">{Navbar}</a>
        </li>
        )}
      </ul>
      <div className="d-flex">
        <button className="btn contact_btn" type="button">CONTACT US</button>
      </div>
    </div>
    </div>
   
  </div>
</nav>
    </Fragment>
}

export default Header;