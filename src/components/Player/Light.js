import React from 'react'
import light from '../logo/light sun.png';

function Light() {
    //style={{ transform: "scale(1.5) rotate(360deg) translateZ(0px)" }}
    return (
        <div>
            <img src={light} className="themeIcon"/>
        </div>
    )
}

export default Light
