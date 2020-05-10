import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;