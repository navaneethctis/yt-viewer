import axios from 'axios';

const KEY = 'AIzaSyDWP8aeBsIynT39X6myQrsN2dyZRMfd1ho';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    maxResults: 5,
    part: 'snippet'
  }
});
