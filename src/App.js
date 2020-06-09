import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './components/Header'
import HomePage from './components/Home/HomePage'
import SearchResults from './components/SearchResults'
import Player from './components/Player/PlayerComponents/MainPlayer'
import './App.css';

import { TitleContext, IdContext, ImageContext, ChannelContext, RelatedVideoContext,CurrentIndexContext }
  from './components/VideoContext';

function App() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [channel, setChannel] = useState('');
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <IdContext.Provider value={{ id, setId }}>
        <ImageContext.Provider value={{ image, setImage }}>
          <ChannelContext.Provider value={{ channel, setChannel }}>
            <RelatedVideoContext.Provider value={{ relatedVideos, setRelatedVideos }}>
            <CurrentIndexContext.Provider value={{ currentSongIndex, setCurrentSongIndex }}>
              <Router>
                <div>
                  <Header />
                  <Route path='/' exact component={HomePage} />
                  <Route path='/search=:query' component={SearchResults} />
                  <Route path='/player' component={Player} />
                </div>
              </Router>
              </CurrentIndexContext.Provider>
            </RelatedVideoContext.Provider>
          </ChannelContext.Provider>
        </ImageContext.Provider>
      </IdContext.Provider>
    </TitleContext.Provider>

  );
}

export default App;
