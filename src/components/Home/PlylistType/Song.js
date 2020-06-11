import React from 'react'
import SongCards from './SongCards'
import './cards.css'

function Song({ SongsObject,SongType }) {

    
    return (
        <ul className="cards">
            <h1>Top {SongType} Songs</h1>
            {SongsObject.map((post) =>
                <div className="cards_item">
                    <SongCards 
                    SongName={post.snippet.title}
                    SongId={post.snippet.resourceId.videoId}
                    SongImage={post.snippet.thumbnails.high.url}
                    ChannelTitle={post.snippet.channelTitle}/>
                </div>
            )}

        </ul>
    )
}

export default Song
