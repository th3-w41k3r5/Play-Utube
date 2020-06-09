import axios from 'axios';
import keys from './Keys'

export const generateKey = () => {
    const index = Math.floor(Math.random() * Math.floor(keys.length));
    return keys[index]
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults : "10",
        regionCode: 'IN',
        type: "video",
        key: generateKey(),
      }
});