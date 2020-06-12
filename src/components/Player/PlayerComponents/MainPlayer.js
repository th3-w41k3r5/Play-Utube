import React, { useContext, useState, useRef } from 'react'
import ReactPlayer from 'react-player'

import Play from './ControlButtons/Play'
import Pause from './ControlButtons/Pause'
import Previous from './ControlButtons/Previous'
import Next from './ControlButtons/Next'
import Dark from '../ThemeComponents/Dark'
import Light from '../ThemeComponents/Light'
import CopyDark from './CopyComponent/CopyDark'
import CopyLight from './CopyComponent/CopyLight'
import SeekBar from './SeekBar'
import { RelatedVideoContext, TitleContext, IdContext, ImageContext, ChannelContext, CurrentIndexContext }
  from '../../VideoContext';

import ComingNext from './ComingNext/ComingNext'

function Player() {

  const { title, setTitle } = useContext(TitleContext);
  const { id, setId } = useContext(IdContext);
  const { image, setImage } = useContext(ImageContext);
  const { channel, setChannel } = useContext(ChannelContext);
  const { relatedVideos, setRelatedVideos } = useContext(RelatedVideoContext);
  const { currentSongIndex, setCurrentSongIndex } = useContext(CurrentIndexContext);

  const url = `https://www.youtube.com/watch?v=${id}`;

  const [playing, setPlaying] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [dark, setDark] = useState(false)
  const [played, setPlayed] = useState(0)
  const [duration, setDuration] = useState(0)

  //copy url
  const copyUrl = () => {

    var copyText = document.getElementById("copyURL");
    copyText.style.visibility = 'visible'
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    //copyText.style.visibility = 'hidden'
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

  }

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

  //Auto Next Play
  const autoNextPlay = () => {
    handlePause();
    setTimeout(() => {
      var keys = Object.keys(relatedVideos);
      var last = keys[keys.length - 1];
      setCurrentSongIndex(currentSongIndex + 1);

      if (currentSongIndex > last) {
        alert("No more Song to Play");
      }

      else {
        var songName = relatedVideos[currentSongIndex].snippet.title;
        var songId = relatedVideos[currentSongIndex].id.videoId;
        var songImage = relatedVideos[currentSongIndex].snippet.thumbnails.high.url;
        var channelTitle = relatedVideos[currentSongIndex].snippet.channelTitle

        setTitle(songName);
        setId(songId);
        setImage(songImage);
        setChannel(channelTitle);
      }
    }, 2000);
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

  const musicPlayer = useRef(null);

  return (
    <>
      <div className={dark ? "playerlight" : "playerdark"}>

        <div onClick={toggleTheme} className="themeIcon">
          {dark ? <Dark /> : <Light />}
        </div>
        <div className="copyIcon" onClick={copyUrl}>
          {dark ? <CopyDark /> : <CopyLight />}
        </div>
        <div style={{ 'display': 'none' }}>
          <ReactPlayer ref={musicPlayer} url={url} playing={playing}
            onReady={handlePlay} onEnded={autoNextPlay}
            onProgress={e => { setPlayed(e.playedSeconds) }}
            onDuration={e => { setDuration(e) }}
            onSeek={e => console.log(e)} />
        </div>
        <img src={image} id="playerImage" className={rotate ? "rotate" : ""} />

        <div className='songData'>
          <span style={{ margin: '0 1vh 0-4vh' }}>Song :&nbsp;</span>
          <i className="songtitle">{title}</i>
        </div>
        <div className='songData'>
          <span style={{ marginLeft: '-4vh' }}>Channel :&nbsp;</span>
          <b>{channel}</b>
        </div>
        <div>
          <SeekBar played={played} duration={duration} setPlayed={setPlayed} musicPlayer={musicPlayer} />

        </div>
        <div>
          <Previous />
          <Next />
          <div onClick={handlePlayPause} className="playPause">
            {playing ? <Pause /> : <Play />}
          </div>
        </div>
      </div>
      <input type="text" value={url} id="copyURL" readOnly/>
      <div id="snackbar">Copied!</div>
      <ComingNext />
    </>
  )
}
export default Player