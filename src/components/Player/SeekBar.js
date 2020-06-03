import React from 'react'

function SeekBar({played,duration}) {    
    return (        
        <div style={{marginBottom:'5vh'}}>
        <progress style={{width:'90%',margin:'0 5% 0 5%',height:'3vh'}} value={played*100} max="100"/>
        <span style={{float:'left',marginLeft:'5%'}}>{played.toFixed(2)}</span>
        <span style={{float:'right', marginRight:'5%'}}>{duration.toFixed(2)}</span>
        </div>
    )
}

export default SeekBar
