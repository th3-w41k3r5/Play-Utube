import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

function Cards({image,title,videoId}) {
    const [player,setPlayer]=useState(false);
    const design={
        'padding':'0 1vh 0 2vh',
    }
    const openPlayer = () =>{
        setPlayer(true)
    }
    if(player === true)
    {
        return <Redirect to="/player" />
    }
    return (
        <div className="cards-container" onClick={openPlayer}>
            <img src={image} className="cardImage"/>
            <h5 style={design}>{title}</h5>           
        </div>
    )
}

export default Cards
