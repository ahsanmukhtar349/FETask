
import './App.css';
import { Fragment } from 'react';
import ConnectWallet from './components/ConnectWallet/ConnectWallet';
import Club from './components/Club/Club';
import SneakPeak from './components/SneakPeak/SneakPeak';
import RoadMap from './components/RoadMap/RoadMap';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Fragment>
     <ConnectWallet/>
    <Club/>
     <SneakPeak/>
      <RoadMap/>
      <Team/>
    <FAQ/>
     <Footer />
    </Fragment>
  );
}

export default App;
