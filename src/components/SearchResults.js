import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'

function SearchResults(props) {

    const generateKey = () => {
        const keys = ["AIzaSyAF9DkUHNvZ_HVDxYxngmXfedKmByaJIsE",
            "AIzaSyB5HxiGqJBFXt-aMbdpt0BIxKAoncYGMCg",
            "AIzaSyClRytEfkUCo34JihypH2_BA3i4edw7Ppw",
            "AIzaSyAS847jt1lOgP8cEK2SxT3beuT4Xho3qMA",
            "AIzaSyBisEIECJyu8uYvKIzqD4atlnVFuRKQUAE",
            "AIzaSyDg_b70fiilcQ86joYVk8qHfrSfhJPUp6s"]
        const index = Math.floor(Math.random() * Math.floor(keys.length));
        return keys[index]
    }

    const query = props.match.params.query;
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '10',
                'key': generateKey(),
                'q': query
            }
        })
            .then((res) => {
                setPosts(res.data.items)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [query])
    /*useEffect(() => {
        console.log(posts); 
     }, [posts]);*/

    return (
        <div>
            {posts.map((post) =>
                <div key={post.etag}>
                    {
                        <Cards
                            Title={post.snippet.title}
                            VideoId={post.id.videoId}
                            Image={post.snippet.thumbnails.high.url}
                            channelTitle={post.snippet.channelTitle} />
                    }
                </div>)
            }
        </div>
    )
}

export default SearchResults