import React, { useContext, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import Play from './Play'
import Pause from './Pause'
import { TitleContext, IdContext, ImageContext, ChannelContext }
  from '../VideoContext';

function Player() {

  const { title, setTitle } = useContext(TitleContext);
  const { id, setId } = useContext(IdContext);
  const { image, setImage } = useContext(ImageContext);
  const { channel, setChannel } = useContext(ChannelContext);

  const url = `https://www.youtube.com/watch?v=${id}`;

  const [playing, setPlaying] = useState(false)
  const [rotate, setRotate] = useState(false)

  //Play
  const handlePlay = () => {
    setPlaying(true)
    setRotate(true)
  }
  //Pause
  const handlePause = () => {
    setPlaying(false)
    setRotate(false)
  }
  //Play or Pause
  const handlePlayPause = () => {
    if (playing === true)
      handlePause()

    else
      handlePlay()
  }

  return (
    <div className="player">
      <div style={{ 'display': 'none' }}>
        <ReactPlayer url={url} playing={playing} />
      </div>
      <img src={image} id="playerImage" className={rotate ? "rotate" : ""} />
        <div className='songData'>
          <span style={{marginLeft:'-4vh'}}>Song :&nbsp;</span>
          <b>{title}</b>
        </div>
        <div className='songData'>
          <span style={{marginLeft:'-4vh'}}>Channel :&nbsp;</span>
          <b>{channel}</b>
        </div>
      <div onClick={handlePlayPause} className="playPause">
        {playing ? <Pause /> : <Play />}
      </div>
    </div>
  )
}

export default Player