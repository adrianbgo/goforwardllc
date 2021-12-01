import logo from './logo.svg';
import './App.css';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Signature from './components/Signature/Signature';
import Snippet from './components/Snippet/Snippet';
import Spotlight from './components/Spotlight/Spotlight';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Spotlight />
      <Featured type='products' />
      <Snippet />
      <Featured type='services' />
      <Newsletter />
      <Footer />
      <Signature />
    </div>
  );
}

export default App;
