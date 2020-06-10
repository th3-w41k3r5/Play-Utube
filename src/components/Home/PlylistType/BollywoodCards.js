import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { TitleContext, IdContext, ImageContext, ChannelContext }
  from '../../VideoContext';

function BollywoodCards({SongImage, SongName, SongId, ChannelTitle}) {
    const { title, setTitle } = useContext(TitleContext);
    const { id, setId } = useContext(IdContext);
    const { image, setImage } = useContext(ImageContext);
    const { channel, setChannel } = useContext(ChannelContext);
    
    const [player, setPlayer] = useState(false);
    const openPlayer = () => {
        setTitle(SongName);
        setId(SongId);
        setImage(SongImage);
        setChannel(ChannelTitle);
        
        setPlayer(true)
    }
    if (player === true) {
        console.log(SongId);
        
        return <Redirect to="/player" />
    }
    return (
        <div className="card" onClick={openPlayer}>
            <div className="card_image"><img src={SongImage} /></div>
            <div className="card_content">
                <h2 className="card_title">{SongName}</h2>
                <p className="card_text">Play list By : <b>Priyom</b></p>
            </div>
        </div>
    )
}

export default BollywoodCards
