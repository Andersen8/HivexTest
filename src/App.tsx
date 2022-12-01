import './App.css';
import Home from './components/pages/home/home'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Characters from './components/pages/characters/Characters';
import Person from './components/pages/characters/person/Person';
import Locations from './components/pages/locations/Locations';
import Episodes from './components/pages/episodes/Episodes';
import {CHARACTER, EPISODE, LOCATION, BOOKMARKS} from "./constants/api"
import Bookmarks from './components/pages/bookmarks/Bookmarks';

function App() {
  return (    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/'+CHARACTER} element={<Characters/>}/>
        <Route path={'/'+LOCATION} element={<Locations/>}/>
        <Route path={'/'+EPISODE} element={<Episodes/>}/>
        <Route path={CHARACTER+"/:id"} element={<Person/>} />
        <Route path={'/'+BOOKMARKS} element={<Bookmarks/>} />
        <Route path="*" element={<h2 style={{margin: "300px 300px"}}>Resource is not found</h2>} />
    </Routes>   
  </>
     
  );
}

export default App;
