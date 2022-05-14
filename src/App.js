
import './App.css';
import Navbar from './components/navbar'; //when we import JS file, don't include extension
import Footer from './components/footer';

//components can be open and closed like <Footer /> instead of doing two tags.

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to my super store!</h1>
      <Footer />
    </div>
  );
}

export default App;
