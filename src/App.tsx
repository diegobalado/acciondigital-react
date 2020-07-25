import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grommet } from 'grommet';
import Routes from './Routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Grommet>
        <Header />
        <Routes />
        <Footer />
      </Grommet>
    </Router>
  );
}

export default App;
