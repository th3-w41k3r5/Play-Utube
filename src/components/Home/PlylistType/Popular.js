import React from 'react';
import './cards.css'

function Popular({ popular }) {
    
    return (
        <ul className="cards">
            {popular.map((post) =>
                    <div className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={post.snippet.thumbnails.high.url} /></div>
                        <div className="card_content">
                            <h2 className="card_title">{post.snippet.title}</h2>
                            <p className="card_text">Play list By : <b>Priyom</b></p>
                        </div>
                    </div>
                </div>
            )}
            
        </ul>
    )
}

export default Popular