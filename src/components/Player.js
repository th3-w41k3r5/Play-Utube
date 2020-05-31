import React from 'react'
import ReactPlayer from 'react-player'

function Player() {
  
  return (
    <div style={{'display':'none'}}>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
    </div>
  )
}

export default Player
