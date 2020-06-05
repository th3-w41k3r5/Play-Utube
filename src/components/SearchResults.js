        import React,{useEffect,useState} from 'react'
        import axios from 'axios'
        import Cards from './Cards'

        function SearchResults(props) {

            const generateKey = () =>{
               const keys = ["AIzaSyDch-RqydDFu7FJluTqGKpWjD_SNyTU7_g",
                        "AIzaSyBC6-Ii5nRBnXyS8jB4nv_AK6UeoyqPMks",
                        "AIzaSyCIjOIitWjaPlJtNL5msTiJwESLGbj_s9Y",
                        "AIzaSyAu9mk-t55iTO3xyemRKfkc2pv1-irtReg",
                        "AIzaSyBi-6S-oZiVw2i7i_Wgxgg0YPX-3WmTkGw",
                        "AIzaSyCPiSc6cW6ffJGilLse7XTzeWLFkCVXxtQ",
                        "AIzaSyDKllLC2B8-Xb9hXomsM1lytbTiDhiiE58",
                        "AIzaSyD1gf2gCUFD-jRPvkYNSfBp6_0m1QByjbE",
                        "AIzaSyALwRCd9dZVzA8HtDxFkp1pAjl-s1jhOyg",
                        "AIzaSyBqTrEMWCy-zaxM8FZD8cOoe0TVTrRtNps"]
                const index = Math.floor(Math.random() * Math.floor(keys.length));
                return keys[index]
            }

            const query = props.match.params.query;
            const [posts, setPosts] = useState([])
            useEffect(() => {
                axios({
                    "method": "GET",
                    "url": 'https://www.googleapis.com/youtube/v3/search',
                    "params":{
                        'part':'snippet',
                        'maxResults':'10',
                        'key':generateKey(),
                        'q':query
                    }
                })
                    .then((res) => {
                        setPosts(res.data.items)               
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },[query])
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
                            channelTitle={post.snippet.channelTitle}/>
                        }
                    </div>)
                }
            </div>
            )
        }

        export default SearchResults