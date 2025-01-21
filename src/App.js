import './App.css';
import Analytics from './Components/Analytics/Analytics';
import Download from './Components/Download/Download';
import Feature from './Components/Featured/Feature';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Hr from './Components/Hr/Hr';
import Navbar from './Components/Navbar/Navbar';
import Rectangle from './Components/Rectangle/Rectangle';
import Testimony from './Components/Testimony/Testimony';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Analytics/>
      <Download/>
      <Testimony/>
      <Rectangle/>
      <Footer/>
      <Hr/>
    </div>
  );
}

export default App;
