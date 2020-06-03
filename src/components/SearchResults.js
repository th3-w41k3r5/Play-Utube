        import React,{useEffect,useState} from 'react'
        import axios from 'axios'
        import Cards from './Cards'

        function SearchResults(props) {

            const generateKey = () =>{
               const keys = ["AIzaSyDvXb-RT65_cl1TkYAk3BmoyuDGTP3_oS8",
                        "AIzaSyBy1eHAlCEilmTSEqd8PK6jeqFYaVDnvkk",
                        "AIzaSyCZ-QbCBHxQswG0uz8-Z4u17HwP8FOtsig",
                        "AIzaSyAJjb1HjqMS9XwXEZxFBuRKwI25NZzuOm4",
                        "AIzaSyCK0s3cpZW3QnFHR3b2cHjDeTC3sVUu3bQ",
                        "AIzaSyDiFu2lA-k8uN4PzdhPx2Tl-5Qvn1Y24-I",
                        "AIzaSyANnx2SVuZoiwotFd62C3GhGnRIjW-PUew",
                        "AIzaSyCh0mrGYgicLPLHryxbGSuH8SXz4wk2gfI",
                        "AIzaSyAcDErof3D1d4wMk1HaFApVfCQ1g2LGNlY",
                        "AIzaSyDkhCD06Ua3mjvGgVIo1B1PhJ5WYxktH80",]
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