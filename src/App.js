import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Button} from 'react-bootstrap';
import Navibar  from './components/Navibar';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';
import {Users} from './Users';


function App() {
  return (
    <>
    <Router>
      <Navibar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
