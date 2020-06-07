import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import SearchResults from './components/SearchResults'
import Player from './components/Player/PlayerComponents/MainPlayer'
import './App.css';

import { TitleContext, IdContext, ImageContext, ChannelContext, RelatedVideoContext }
  from './components/VideoContext';

function App() {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [channel, setChannel] = useState('');
  const [relatedVideos, setRelatedVideos] = useState([]);
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <IdContext.Provider value={{ id, setId }}>
        <ImageContext.Provider value={{ image, setImage }}>
          <ChannelContext.Provider value={{ channel, setChannel }}>
            <RelatedVideoContext.Provider value={{ relatedVideos, setRelatedVideos }}>
              <Router>
                <div>
                  <Header />
                  <Route path='/search=:query' component={SearchResults} />
                  <Route path='/player' component={Player} />
                </div>
              </Router>
            </RelatedVideoContext.Provider>
          </ChannelContext.Provider>
        </ImageContext.Provider>
      </IdContext.Provider>
    </TitleContext.Provider>

  );
}

export default App;
