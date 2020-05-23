import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/common/Header';
import './App.css';

function App() {
  return (
  <Router>
    <Header />
    <Routes />
  </Router>
  );
}

export default App;
