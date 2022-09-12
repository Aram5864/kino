import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/home';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Conatct from './Pages/Contact/contact';
import Movie from './Pages/Movies/movies';
import Cart from './Pages/AddToCart/addToCart';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Conatct />}/>
        <Route path='/movies'  element={<Movie/>}/>
        <Route path='/cart'  element={<Cart/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
