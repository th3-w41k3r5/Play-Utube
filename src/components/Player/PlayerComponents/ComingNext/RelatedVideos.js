import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import RelatedCards from './RelatedCards'
import keys from '../../../Keys'

import {IdContext,RelatedVideoContext}
  from '../../../VideoContext';

function RelatedVideos() {

    const { id, setId } = useContext(IdContext);  
    const {relatedVideos, setRelatedVideos} = useContext(RelatedVideoContext); 
    const generateKey = () =>{
         const index = Math.floor(Math.random() * Math.floor(keys.length));
         return keys[index]
     }
     //const [relatedPosts, setRelatedPosts] = useState([])
     useEffect(() => {
         axios({
             "method": "GET",
             "url": 'https://www.googleapis.com/youtube/v3/search',
             "params":{
                "relatedToVideoId": id,
                'part':'snippet',
                "type":"video",
                 'maxResults':'10',
                 'key':generateKey(),
                 
             }
         })
             .then((res) => {
                setRelatedVideos(res.data.items);                                 
             })
             .catch((error) => {
                 console.log(error)
             })
     },[])

    return (
        <div className='relatedCardsContainer'>
            {relatedVideos.map((post) =>
                    <div key={post.etag}>
                        {
                            <RelatedCards SongName={post.snippet.title}
                            SongId={post.id.videoId}
                            SongImage={post.snippet.thumbnails.high.url}
                            ChannelTitle={post.snippet.channelTitle}/>
                        }
                    </div>)
                }
        </div>
    )
}

export default RelatedVideos
