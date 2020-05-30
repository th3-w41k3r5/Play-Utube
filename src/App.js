import React from 'react';
import Header from './components/Header'
import SearchResults from './components/SearchResults'
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/query=:query' component={SearchResults} />
      </div>
    </Router>
  );
}

export default App;
