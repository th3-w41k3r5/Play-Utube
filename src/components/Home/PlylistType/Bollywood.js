import React from 'react'
import BollywoodCards from './BollywoodCards'

function Bollywood({ bollywood }) {

    
    return (
        <ul className="cards">
            <h1>Top Bollywood Songs</h1>
            {bollywood.map((post) =>
                <div className="cards_item">
                    <BollywoodCards 
                    SongName={post.snippet.title}
                    SongId={post.snippet.resourceId.videoId}
                    SongImage={post.snippet.thumbnails.high.url}
                    ChannelTitle={post.snippet.channelTitle}/>
                </div>
            )}

        </ul>
    )
}

export default Bollywood
