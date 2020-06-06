import React, { useState, useEffect } from 'react'
import songlist from '../../../logo/song list.png';
import RelatedTop from './RelatedTop'
import RelatedBottom from './RelatedBottom'
import RelatedVideos from './RelatedVideos';
function ComingNext() {

    const [top, setTop] = useState(false)
    const scroll = () => {

        if (top === false) {
            document.getElementsByClassName("test")[0].style.visibility = "visible";
            document.getElementsByClassName("comingnext")[0].style.overflow = "visible";
            window.scrollBy(0, 350);
            window.addEventListener('scroll', noScroll);
            setTop(true);
        }
        else {
            document.getElementsByClassName("test")[0].style.overflow = "hidden";
            document.getElementsByClassName("comingnext")[0].style.overflow = "hidden";
            window.scrollBy(0, -350);
            window.addEventListener('scroll', noScroll);

            setTop(false);
        }


        function noScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            // if any scroll is attempted, set this to the previous value 
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
                {top ? <RelatedBottom /> : <RelatedTop />}
            </span>
            <div className="test" style={{ visibility: 'hidden', overflow: 'hidden', paddingTop: '10vh' }}>
                <RelatedVideos />
            </div>
        </div>
    )
}

export default ComingNext
