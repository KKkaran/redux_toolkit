import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './screens/Counter/Counter';
import { Home } from './screens/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Counter />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
