import './App.css';
import AudioBooks from './Components/AudioBooks';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import Navbar from './Components/Navbar';
import PressSection from './Components/PressSection';
import Quotes from './Components/Quotes';
import Subscription from './Components/Subscription';

function App() {
  return (
    <>
    <Navbar />
    <MainContent />
    <Subscription />
    <Quotes />
    <AudioBooks />
    <PressSection />
    <Footer />
    </>
  );
}

export default App;
