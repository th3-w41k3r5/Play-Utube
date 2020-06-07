import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import previous from '../../../logo/previous.png';
import { RelatedVideoContext, TitleContext, IdContext, ImageContext, ChannelContext, CurrentIndexContext }
    from '../../../VideoContext';

function Previous() {
    const { title, setTitle } = useContext(TitleContext);
    const { id, setId } = useContext(IdContext);
    const { image, setImage } = useContext(ImageContext);
    const { channel, setChannel } = useContext(ChannelContext);
    const { relatedVideos, setRelatedVideos } = useContext(RelatedVideoContext);
    const { currentSongIndex, setCurrentSongIndex } = useContext(CurrentIndexContext);

    const [player, setPlayer] = useState(false);

    const previousPlay = () => {
        var keys = Object.keys(relatedVideos);
        var last = keys[keys.length - 1];

        setCurrentSongIndex(currentSongIndex - 1);
        
        if (currentSongIndex <= 0) {
            alert("No more Song to Play");
            setCurrentSongIndex(0)
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

            setPlayer(true)
        }
    }

    return (
        <div onClick={previousPlay}>
            <img src={previous} className="previous" alt="previous" />
        </div>
    )
}

export default Previous
