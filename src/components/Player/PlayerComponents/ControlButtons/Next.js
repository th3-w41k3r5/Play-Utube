import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import next from '../../../logo/next.png';
import { RelatedVideoContext, TitleContext, IdContext, ImageContext, ChannelContext}
    from '../../../VideoContext';

function Next() {
    const { title, setTitle } = useContext(TitleContext);
    const { id, setId } = useContext(IdContext);
    const { image, setImage } = useContext(ImageContext);
    const { channel, setChannel } = useContext(ChannelContext);
    const { relatedVideos, setRelatedVideos } = useContext(RelatedVideoContext);
    //const { songIndex, setSongIndex } = useContext(CurrenntIndexContext);
    
    const [player, setPlayer] = useState(false);
    
    const nextPlay = () => {
        var keys = Object.keys(relatedVideos);
        var last = keys[keys.length - 1];
        
      

        var songName = relatedVideos[last].snippet.title;
        var songId = relatedVideos[last].id.videoId;
        var songImage = relatedVideos[last].snippet.thumbnails.high.url;
        var channelTitle = relatedVideos[last].snippet.channelTitle

        setTitle(songName);
        setId(songId);
        setImage(songImage);
        setChannel(channelTitle);
        
        setPlayer(true)
    }
   
    return (
        <div onClick={nextPlay}>
            <img src={next} className="next"/>
        </div>
    )
}

export default Next