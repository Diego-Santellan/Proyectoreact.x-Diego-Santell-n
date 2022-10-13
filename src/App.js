import './App.css';
import Navbar from './components/Navbar';
import Clicker from './components/Clicker';
import Itemcount from './components/ItemCount';
import StarWarsContainer from './components/starwars/StarWarsContainer';
import RickAndMorty from './components/rickmorty/RickAndMorty';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';
import RickAndMortyDetail from './components/rickmorty/RickAndMortyDetail';
import InputNovowels from './components/InputNovowels';
import { DarkModeContext } from './context/DarkModeContext';
import { useState } from 'react';
import { FavProvider } from './context/FavContext';


function App() {

  const [DarkMode, setDarkMode] = useState(true)

  const darkModeHanlder = () => {
    setDarkMode (!DarkMode)
  }

  return (
    <>
      <DarkModeContext.Provider value={DarkMode}>
        <FavProvider>
          <BrowserRouter>
            <Navbar/>
            <button className='btn text-success m-8' onClick={darkModeHanlder}>DarkMode</button>
            <Routes>
              <Route path='/' element={<Clicker/>}/>
              <Route path='/input' element={<InputNovowels/>}/>
              <Route path='/count' element={<Itemcount/>}/>
              <Route path='/ram' element={<RickAndMorty/>}/>
              <Route path='/ram/:id' element={<RickAndMortyDetail/>}/>
              <Route path='/swapi' element={<StarWarsContainer/>}/>
              <Route path='*' element={<Error404/>}/>
            </Routes>
          </BrowserRouter>
        </FavProvider>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
