import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Clicker from './components/Clicker';
import Itemcount from './components/ItemCount';
import ItemListContainer from './components/shop/ItemListContainer';
import StarWarsContainer from './components/starwars/StarWarsContainer';
import RickAndMorty from './components/rickmorty/RickAndMorty';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';
import RickAndMortyDetail from './components/rickmorty/RickAndMortyDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Clicker/>}/>
          <Route path='/count' element={<Itemcount/>}/>
          <Route path='/ram' element={<RickAndMorty/>}/>
          <Route path='/ram/:id' element={<RickAndMortyDetail/>}/>
          <Route path='/swapi' element={<StarWarsContainer/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* 
      <Itemcount/>
      <ItemListContainer greeting={"Mundo"}/>
      <StarWarsContainer/> 
      <RickAndMorty/>
      */}
    </>
  );
}

export default App;
