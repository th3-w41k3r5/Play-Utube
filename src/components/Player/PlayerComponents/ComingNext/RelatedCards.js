import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import singlesong from '../../../logo/single song.png';
import { TitleContext, IdContext, ImageContext, ChannelContext }
  from '../../../VideoContext';

function RelatedCards({ SongImage, SongName, SongId, ChannelTitle }) {
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
        return <Redirect to="/player" />
    }
    return (
        <div className="relatedCard" onClick={openPlayer}>
            <div className="singlesong"><img src={singlesong} /></div>
           <div style={{marginLeft:'5vh',padding:'2vh',borderLeft:'1px solid white'}}>{SongName}</div>
        </div>
    )
}

export default RelatedCards
