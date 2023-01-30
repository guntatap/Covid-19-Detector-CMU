import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext'
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import IForm from './components/IForm'
import Waitinglist from './components/Waitinglist'
import Ending from './components/Ending'
import Resultation from './components/Resultation';

function App() {

  return (
    <div className='Ground'>
      <Router>
        <Routes >
          <Route path='/' element={<Login />} />

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/iform' element={<IForm />} />
          <Route path='/waitinglist' element={<Waitinglist />} />
          <Route path='/resultation' element={<Resultation />} />
          <Route path='/ending' element={<Ending />} />


        </Routes >
      </Router>

    </div>
  );
}

export default App;
