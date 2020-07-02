import axios from 'axios'

const KEY = key

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
};

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});
