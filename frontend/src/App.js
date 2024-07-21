
import './App.css';
import {Routes, BrowserRouter, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NutsAndSeeds from './components/NutsAndSeeds';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import Leafs from './components/Leafs';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
       <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/not-found' element={<NotFound />}/>
          <Route path='/fruits' element={<Fruits />} />
          <Route path='/vegetables' element={<Vegetables />} />
          <Route path='/nutsandseeds' element={<NutsAndSeeds />} />
          <Route path='/green-leafs' element={<Leafs />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
