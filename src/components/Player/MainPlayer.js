import React, { useContext, useState, useRef } from 'react'
import ReactPlayer from 'react-player'

import Play from './Play'
import Pause from './Pause'
import Dark from './Dark'
import Light from './Light'
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
  const [dark, setDark] = useState(false)
  const [played,setPlayed] = useState(0)
  const [loaded,setLoaded] = useState(0)
  const [seeking,setSeeking] = useState(false)

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
  // Toggle Theme
  const toggleTheme = () => {
    if (dark === true) {
      setDark(false)
    }
    else {
      setDark(true)
    }
  }

  /*const handleProgress = () => {
    if (!seeking) {
      played()
    }
  }*/
  const player = useRef(null);
  return (
    <div className={dark ? "playerlight" : "playerdark"}>
      <div style={{ 'display': 'none' }}>
        <ReactPlayer ref={player} url={url} playing={playing} onReady={handlePlayPause}/>
      </div>
      <div onClick={toggleTheme} className="themeIcon">
        {dark ? <Dark /> : <Light />}
      </div>
      <img src={image} id="playerImage" className={rotate ? "rotate" : ""} />

      <div className='songData'>
        <span style={{ marginLeft: '-4vh' }}>Song :&nbsp;</span>
        <b>{title}</b>
      </div>
      <div className='songData'>
        <span style={{ marginLeft: '-4vh' }}>Channel :&nbsp;</span>
        <b>{channel}</b>
      </div>
      <div>

      </div>
      <div onClick={handlePlayPause} className="playPause">
        {playing ? <Pause /> : <Play />}
      </div>
    </div>
  )
}

export default Player
/*
<input
          type='range' min={0} max={0.999999} step='any'
          value={played}
          onMouseDown={e => setSeeking(true)}
          onChange={e => setPlayed(parseFloat(e.target.value))}
          onMouseUp={ef =>{setSeeking(false);player.seekTo(parseFloat(ef.target.value))}}
        />
        <br/>
      <progress max={1} value={played} />
      <br/>
      <progress max={1} value={loaded} />*/