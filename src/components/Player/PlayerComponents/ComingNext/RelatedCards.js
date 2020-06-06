import React from 'react'
import singlesong from '../../../logo/single song.png';

function RelatedCards({name}) {
    return (
        <div className="relatedCard">
            <div className="singlesong"><img src={singlesong} /></div>
           <div style={{marginLeft:'5vh',padding:'1vh'}}>{name}</div>
        </div>
    )
}

export default RelatedCards
