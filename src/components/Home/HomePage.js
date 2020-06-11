import React, { useState, useEffect } from "react";
import keys from '../Keys'
import Song from './PlylistType/Song'
import axios from 'axios'
import * as _ from 'underscore'

function HomePage() {

  const generateKey = () => {
    const index = Math.floor(Math.random() * Math.floor(keys.length));
    return keys[index]
  }
  const randomToken = (tokens) => {
    const index = Math.floor(Math.random() * Math.floor(tokens.length));
    return tokens[index]
  }

  const [songType, setSongType] = useState('Mixed')
  const [result, setResult] = useState([])
  const playListType = ['Mixed', 'Bollywood', 'Other(error)']

  const getBollywoodVideo = () => {
    var pageToken = ['CDIQAQ', 'CDIQAA', 'CGQQAA', 'CJYBEAE', 'CMgBEAE',
      'CGQQAQ', 'CJYBEAA', 'CMgBEAA', 'CPoBEAA', 'CPoBEAE']

    axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50',
      "params": {
        'playlistId': PlaylistId.bollywood,
        'pageToken': randomToken(pageToken),
        'key': generateKey(),
      }
    })
      .then((res) => {
        setResult(res.data.items)
      })

      .catch((error) => {
        console.log(error)
      })
  }

  const getMixedVideo = () => {
    var pageToken = ['CDIQAQ', 'CDIQAA', 'CGQQAA', 'CJYBEAE', 'CMgBEAE',
      'CGQQAQ', 'CJYBEAA', 'CMgBEAA', 'CPoBEAA', 'CPoBEAE']

    axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50',
      "params": {
        'playlistId': PlaylistId.mixed,
        'pageToken': randomToken(pageToken),
        'key': generateKey(),
      }
    })
      .then((res) => {
        setResult(res.data.items)
      })

      .catch((error) => {
        console.log(error)
      })
  }
  var PlaylistId = {
    mixed: 'PL9TB14hB5MuKKV-U5e0C4Doy42ntoHYV1',
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

  useEffect(() => {
    //Mixed Video
    if (songType === 'Mixed') { getMixedVideo(); }

    //Bollywood video
    else if (songType === 'Bollywood') { getBollywoodVideo(); }

    else { console.log("error"); }
  }, [songType])
  return (
    <div>
      <select className="select" onChange={e => setSongType(e.target.value)}>
        {
          playListType.map((x, index) =>
            <option key={x} value={x}>{x}</option>)
        }
      </select>
      <Song SongsObject={_.shuffle(result)} SongType={songType} />
    </div>
  )
}

export default HomePage




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