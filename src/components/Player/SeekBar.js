import React from 'react'

function SeekBar({ played, duration,setPlayed }) {
     
    const secToHHMMSS = (secs) => {

        const pad = (num) => {
            return ("0" + num).slice(-2);
        }
        var minutes = Math.floor(secs / 60);
        secs = secs % 60;
        var hours = Math.floor(minutes / 60)
        minutes = minutes % 60;
        if(hours === 0) {return `${pad(minutes)}:${pad(secs)}`;}
        else if(hours !== 0){return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;}
    }
    var newPlayed = secToHHMMSS(Math.round(played));
    var newDuration = secToHHMMSS(duration);
    return (
        <div style={{ marginBottom: '5vh' }}>

            <input style={{ width: '90%', margin: '0 5% 0 5%', height: '2vh' }} 
            type='range' min={0} value={Math.round(played)} max={duration} 
            onChange={e => setPlayed(e.target.value)}/>

            <span style={{ float: 'left', marginLeft: '5%' }}>{newPlayed}</span>
            <span style={{ float: 'right', marginRight: '5%' }}>{newDuration}</span>
        </div>
    )
}

export default SeekBar
/*
 <input
          type='range' min={0} max={0.999999} step='any'
          value={played}
          onMouseDown={e => setSeeking(true)}
          onChange={e => setPlayed(parseFloat(e.target.value))}
          onMouseUp={ef =>{setSeeking(false);musicPlayer.seekTo(parseFloat(ef.target.value))}}
        />*/