import './App.css';
import Collections from './components/Collections';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import SellingProducts from './components/SellingProducts';
import Themes from './components/Themes';


function App() {
  return (
    <>
    
    <Navbar/>
    <Main/>
    <Collections/>
    <Themes/>
    <SellingProducts/>
    <Offers/>
    <Footer/>
    </>
  );
}

export default App;
