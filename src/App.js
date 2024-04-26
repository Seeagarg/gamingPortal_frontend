import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';

import Navbar from './Components/Navbar';
import SideBarMenu from './Components/SideBarMenu';
import GameDetails from './Pages/GameDetails';
import {useLocation} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 

function App() {

  const location = useLocation()
  console.log(location.pathname)


  return (
  <div style={{width:"100%"}}>
  <div className='container' id='parent'>
  {
    location.pathname.slice(0,5) !== '/game' &&

    <div className='sub_container_1'>
  <SideBarMenu/>
  </div>
  }
  <div className='sub_container_2'>
  {
    location.pathname.slice(0,5) !== '/game' &&

    <Navbar/>
  }
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/game/:id' element={<GameDetails/>}/>
    </Routes>
</div>
    </div>
    <ToastContainer/>
  </div>
  );
}

export default App;
