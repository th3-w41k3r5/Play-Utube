import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { TitleContext, IdContext, ImageContext, ChannelContext }
  from './VideoContext';

function Cards({ Image, Title, VideoId, channelTitle }) {

    const { title, setTitle } = useContext(TitleContext);
    const { id, setId } = useContext(IdContext);
    const { image, setImage } = useContext(ImageContext);
    const { channel, setChannel } = useContext(ChannelContext);

    setTitle(Title);
    setId(VideoId);
    setImage(Image);
    setChannel(channelTitle);
    
    const [player, setPlayer] = useState(false);
    const design = {
        'padding': '0 1vh 0 2vh',
    }
    const openPlayer = () => {
        setPlayer(true)
    }
    if (player === true) {
        return <Redirect to="/player" />
    }
    return (
        <div className="cards-container" onClick={openPlayer}>
            <img src={Image} className="cardImage" />
            <h5 style={design}>{Title}</h5>
        </div>
    )
}

export default Cards
