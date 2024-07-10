import './App.css';
// import { Link } from "react-router-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Flight from "./components/Flight";
import Hotels from "./components/Hotels";
import Layouts from './components/Layouts';
import Tour from './components/Tour';
import Signup from './components/Signup';
import Signupupdate from './components/Signupupdate';
import Signupdelete from './components/Signupdelete';
import Login from './components/Login';
import Book from './components/Book';
import About from './components/About';
import Layoutsdev from './Developer/Layoutsdev';
import Flightdev from './Developer/Flightdev';
import Hoteldev from './Developer/Hoteldev';
import Tourdev from './Developer/Tourdev';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Layouts" element={<Layouts/>}/>
        <Route path="/Flight" element={<Flight/>}/>
        <Route path="/Hotels" element={<Hotels/>}/> 
        <Route path="/Tour" element={<Tour/>}/>
        <Route path="/Signupupdate" element={<Signupupdate/>}/>
        <Route path="/Signupdelete" element={<Signupdelete/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Book" element={<Book/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Layoutsdev" element={<Layoutsdev/>}/>
        <Route path="/Flightdev" element={<Flightdev/>}/>
        <Route path="/Hoteldev" element={<Hoteldev/>}/>
        <Route path="/Tourdev" element={<Tourdev/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;