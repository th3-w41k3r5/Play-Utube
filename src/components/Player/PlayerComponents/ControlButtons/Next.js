import React, { useState, useContext } from 'react'

import next from '../../../logo/next.png';
import { RelatedVideoContext, TitleContext, IdContext, ImageContext, ChannelContext, CurrentIndexContext }
    from '../../../VideoContext';

function Next() {
    const { title, setTitle } = useContext(TitleContext);
    const { id, setId } = useContext(IdContext);
    const { image, setImage } = useContext(ImageContext);
    const { channel, setChannel } = useContext(ChannelContext);
    const { relatedVideos, setRelatedVideos } = useContext(RelatedVideoContext);
    const { currentSongIndex, setCurrentSongIndex } = useContext(CurrentIndexContext);

    const nextPlay = () => {
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
    }

    return (
        <div onClick={nextPlay}>
            <img src={next} className="next" />
        </div>
    )
}

export default Next