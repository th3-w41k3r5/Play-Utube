import React from 'react'

function Cards({image,title,videoId}) {
    console.log(image);
    const design={
        'padding':'1vh'
    }
    return (
        <div className="cards-container">
            <img src={image} className="cardImage"/>
            <h4 style={design}>{title}</h4>           
        </div>
    )
}

export default Cards
