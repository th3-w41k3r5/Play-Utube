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

  const [songs, setSongs] = useState({
    popular:[],
    bollywood:[]
  })
  const [popular, setPopular] = useState([])
  const [bollywood, setBollywood] = useState([])
  useEffect(() => {
    //Trending Video
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
    setTimeout(() => { }, 1000);

    //Bolly Wood
    axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50',
      "params": {
        'playlistId':PlaylistId.bollywood,
        'key': generateKey(),
      }
    })
      .then((res) => {
        setBollywood(res.data.items)
      })
      
      .catch((error) => {
        console.log(error)
      })
      setTimeout(() => {}, 1000);
  }, [])

  /*useEffect(() => {
    console.log(popular);
    console.log(bollywood);
  }, [popular, bollywood]);*/
  return (
    <div> 
          <Bollywood bollywood={bollywood} />
          {setTimeout(() => {}, 1000)}
          <Popular popular={popular} />
    </div>
  )
}

export default HomePage
