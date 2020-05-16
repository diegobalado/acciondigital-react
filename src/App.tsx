import React from 'react';
import Header from './components/common/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
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
