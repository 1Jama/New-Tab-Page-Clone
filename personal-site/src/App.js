import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Shortcuts from './Shortcuts';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Customize from './Customize';
import { Button } from '@mui/material';

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Customize' element={<Customize />} />
        </Routes>
        <Button component={Link} to='/Customize'>
          <EditIcon />
          Customize
        </Button>
      </>
    </Router>
  );
}
const Home = () => {
  return (
    <div className='appContainer'>
      <Searchbar />
      <Shortcuts />
    </div>
  );
};

export default App;
