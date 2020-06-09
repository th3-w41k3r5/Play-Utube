import React, { useState, useEffect } from "react";
import keys from '../Keys'
import Popular from './PlylistType/Popular'
import Bollywood from './PlylistType/Bollywood'
import axios from 'axios'

function HomePage() {
  const generateKey = () => {
    const index = Math.floor(Math.random() * Math.floor(keys.length));
    return keys[index]
  }
  const randomToken = (tokens) =>{
    const index = Math.floor(Math.random() * Math.floor(tokens.length));
    return tokens[index]
  }
  const shuffle = (a)=> {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    console.log("shuffled"+a);
}
  const getPopularVideo = () =>{
    axios({
      "method": "GET",
      "url": 'https:www.googleapis.com/youtube/v3/videos',
      "params": {
        'part': 'snippet',
        'type': 'video',
        'chart': 'mostPopular',
        'maxResults': '10',
        'regionCode': 'IN',
        'videoCategoryId': '10',
        'key': generateKey(),
      }
    })
      .then((res) => {
        setPopular(res.data.items)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const getBollywoodVideo =()=>{
    //var pageToken=['CDIQAQ','CDIQAA']
    axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50',
      "params": {
        'playlistId':PlaylistId.bollywood,
        'pageToken':'CDIQAQ',
        'key': generateKey(),
      }
    })
      .then((res) => {
        setBollywood(res.data.items)
      })
      
      .catch((error) => {
        console.log(error)
      })
      console.log(typeof(bollywood));
      
      //setBollywood(shuffle(bollywood));
  }
  /*videoCategoryId=10  Music category*/
  var PlaylistId = {
    bollywood: 'PL9oqVauEE2LIXtGYECl3wT1f5ae5EwDEZ',
    hollywood: '',
    romantic: '',
    party: '',
    driving: '',
    sleeping: '',
    chill: '',
    trance: '',
    rap: ''
  }
  const [popular, setPopular] = useState([])
  const [bollywood, setBollywood] = useState([])
  useEffect(() => {
    //Popular Video
    getPopularVideo();
    
    setTimeout(() => {}, 1000);

    //Bolly Wood
    getBollywoodVideo();
      setTimeout(() => {}, 1000);
  }, [])

  /*useEffect(() => {
    console.log(popular);
    console.log(bollywood);
  }, [popular, bollywood]);*/
  return (
    <div> 
          <Bollywood bollywood={bollywood} />

          <Popular popular={popular} />
    </div>
  )
}

export default HomePage
