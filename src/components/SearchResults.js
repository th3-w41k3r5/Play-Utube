import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import keys from "./Keys";

function SearchResults(props) {
  const generateKey = () => {
    const index = Math.floor(Math.random() * Math.floor(keys.length));
    return keys[index];
  };

  const query = props.match.params.query;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "10",
        key: generateKey(),
        q: query,
      },
    })
      .then((res) => {
        setPosts(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);
  /*useEffect(() => {
        console.log(posts); 
     }, [posts]);*/

  return (
    <div>
      {posts.map((post) => (
        <div key={post.etag}>
          {
            <Cards
              Title={post.snippet.title}
              VideoId={post.id.videoId}
              Image={post.snippet.thumbnails.high.url}
              channelTitle={post.snippet.channelTitle}
            />
          }
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
