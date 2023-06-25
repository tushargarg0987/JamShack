import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Buy } from './pages/buy/buy';
import { Sell } from "./pages/sell/sell";
import { Request } from "./pages/request/request"
import { Cart, Rent } from "./pages/rent/rent"
import { BuyContextProvider } from './context/buy-context';

function App() {
  return (
    <div className="App">
    <BuyContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Buy/>} />
          <Route path='/sell' element={<Sell/>}/>
          <Route path='/request' element={<Request/>}/>
          <Route path='/rent' element={<Rent/>}/>
        </Routes>
      </Router>
    </BuyContextProvider>
    </div>
  );
}

export default App;
