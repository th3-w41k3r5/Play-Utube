import React from 'react';
import Header from './components/Header'
import SearchResults from './components/SearchResults'
import Player from './components/Player'
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/search=:query' component={SearchResults} />
        <Route path='/player' component={Player} />
      </div>
    </Router>
  );
}

export default App;
