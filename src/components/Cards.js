import React from 'react'

function Cards({image,title,videoId}) {
    console.log(image);
    const design={
        'padding':'0 1vh 0 2vh',
    }
    return (
        <div className="cards-container">
            <img src={image} className="cardImage"/>
            <h5 style={design}>{title}</h5>           
        </div>
    )
}

export default Cards
