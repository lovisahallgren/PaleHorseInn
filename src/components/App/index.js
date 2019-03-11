import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from '../Header';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Cinematic from '../Cinematic';
import Picture from '../Picture';

const App = () => {
  return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cinematic" component={Cinematic} />
        <Route path="/pictures" component={Picture} />
      </div>
  );
}

export default App;
