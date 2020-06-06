import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import RelatedCards from './RelatedCards'

import {IdContext}
  from '../../../VideoContext';

function RelatedVideos() {

    const { id, setId } = useContext(IdContext);
    console.log(id);
    
    const generateKey = () =>{
        const keys = ["AIzaSyAF9DkUHNvZ_HVDxYxngmXfedKmByaJIsE",
            "AIzaSyB5HxiGqJBFXt-aMbdpt0BIxKAoncYGMCg",
            "AIzaSyClRytEfkUCo34JihypH2_BA3i4edw7Ppw",
            "AIzaSyAS847jt1lOgP8cEK2SxT3beuT4Xho3qMA",
            "AIzaSyBisEIECJyu8uYvKIzqD4atlnVFuRKQUAE",
            "AIzaSyDg_b70fiilcQ86joYVk8qHfrSfhJPUp6s"]
         const index = Math.floor(Math.random() * Math.floor(keys.length));
         return keys[index]
     }
     const [relatedPosts, setRelatedPosts] = useState([])
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
                setRelatedPosts(res.data.items);                                 
             })
             .catch((error) => {
                 console.log(error)
             })
     },[])
     useEffect(() => {
         console.log(relatedPosts); 
      }, [relatedPosts]);


    return (
        <div className='relatedCardsContainer'>
            {relatedPosts.map((post) =>
                    <div key={post.etag}>
                        {
                            <RelatedCards name={post.snippet.title}/>
                        }
                    </div>)
                }
        </div>
    )
}

export default RelatedVideos
