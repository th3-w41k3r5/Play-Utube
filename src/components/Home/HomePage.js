import React, { useState, useEffect } from "react";
import keys from '../Keys'
import Popular from './PlylistType/Popular'
import Bollywood from './PlylistType/Bollywood'
import axios from 'axios'
import * as _ from 'underscore'

function HomePage() {

  const generateKey = () => {
    const index = Math.floor(Math.random() * Math.floor(keys.length));
    return keys[index]
  }
  const randomToken = (tokens) =>{
    const index = Math.floor(Math.random() * Math.floor(tokens.length));
    return tokens[index]
  }
  /*const getPopularVideo = () =>{
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
  }*/
  const getBollywoodVideo =()=>{
    var pageToken=['CDIQAQ','CDIQAA','CGQQAA','CJYBEAE','CMgBEAE',
                  'CGQQAQ','CJYBEAA','CMgBEAA', 'CPoBEAA','CPoBEAE']
                  
    axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50',
      "params": {
        'playlistId':PlaylistId.bollywood,
        'pageToken':randomToken(pageToken),
        'key': generateKey(),
      }
    })
      .then((res) => {
        setBollywood(res.data.items)
      })
      
      .catch((error) => {
        console.log(error)
      })
      
      //setBollywood(_.shuffle(bollywood)); 
  }
  /*videoCategoryId=10  Music category*/
  var PlaylistId = {
    bollywood: 'PL9TB14hB5MuIqOcHoUal7V7KyqjXQDZHr',
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
   // getPopularVideo();    
    setTimeout(() => {}, 1000);

    //Bolly Wood
    getBollywoodVideo();
      setTimeout(() => {}, 1000);
  }, [])

  useEffect(() => {
   // console.log(popular);
   /* console.log(bollywood);
    console.log(typeof(bollywood));*/
  }, [bollywood]);
  return (
    <div> 
          <Bollywood bollywood={_.shuffle(bollywood)} />

          <Popular popular={popular} />
    </div>
  )
}

export default HomePage
