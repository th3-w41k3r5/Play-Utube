import React, { useState } from 'react'
import songlist from '../logo/song list.png';
import RelatedTop from './RelatedTop'
import RelatedBottom from './RelatedBottom'
function ComingNext() {

    const [top, setTop] = useState(false)
    const scroll = () => {
        if (top === false) {
            //document.getElementsByClassName("comingnext")[0].style.bottom = "10%";
            document.getElementsByClassName("test")[0].style.visibility = "visible";
            document.getElementsByClassName("comingnext")[0].style.overflow = "visible";

            window.addEventListener( 'scroll', noscroll );
            window.scrollBy(0, 350);
            setTop(true);
        }
        else{
            window.removeEventListener( 'scroll', noscroll );
            window.scrollBy(0, -350);
            setTop(false);
        }
        function noscroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            // if any scroll is attempted,set this to the previous value  
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
          }
    }
    return (
        <div className="comingnext">
            <span className="songlist"><img src={songlist} /></span>
            <div className="container">
                <h2>Coming Next</h2>
            </div>
            <span className="related" onClick={scroll}>
            {top ? <RelatedBottom/> : <RelatedTop/> }
            </span>
            <div className="test" style={{ visibility: 'hidden', overflow: 'visible', paddingTop: '10vh' }}>
            <h1> Music List goes Here</h1>
            </div>
        </div>
    )
}

export default ComingNext
