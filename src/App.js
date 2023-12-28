
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      {/* <h1>E-cart</h1> */}
      <Header/>
    <Routes>
      <Route path={'/'} element={ <Home/>}/>
      <Route path='/cart' element={ <Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
