import React,{ useContext } from 'react'
import ReactPlayer from 'react-player'

import { TitleContext, IdContext, ImageContext, ChannelContext }
  from './VideoContext';

function Player() { 

  const { title, setTitle } = useContext(TitleContext);
  const { id, setId } = useContext(IdContext);
  const { image, setImage } = useContext(ImageContext);
  const { channel, setChannel } = useContext(ChannelContext);

  const url = `https://www.youtube.com/watch?v=${id}`;
  console.log(url);
  
  

  return (
    <div>
      <div style={{'display':'none'}}>
        <ReactPlayer url={url} playing />
      </div>
      <img src={image} className="playerImage"/>
    </div>
  )
}

export default Player