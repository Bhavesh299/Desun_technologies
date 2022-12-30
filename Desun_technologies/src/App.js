import {Route,Routes} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import GameList from './components/GameList';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Payment from './components/Payment';
import PaymentCard from './components/PaymentCard';

function App() {

  const auth = localStorage.getItem("cred");
  console.log(auth);
  
  return (
    <>
      <Navbar/>
      <h1 style={{textAlign:"center", padding:"20px 0px 20px 0px",}}>Event-Game-Booking</h1>
      <Routes className="App">
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/gameList" element={<GameList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkOut" element={<CheckOut/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/PaymentCard" element={<PaymentCard/>} />
      </Routes>
    </>
  );
}

export default App;
