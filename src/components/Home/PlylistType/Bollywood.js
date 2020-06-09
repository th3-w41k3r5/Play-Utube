import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,CardDeck
} from 'reactstrap';

function Bollywood({ bollywood }) {
    return (
        <ul className="cards">
            <h1>Top Bollywood Songs</h1>
            {bollywood.map((post) =>
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

export default Bollywood
