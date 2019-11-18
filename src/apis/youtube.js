import axios from 'axios'

const KEY = 'AIzaSyC4d6dG5coFc5gUXpXRbIRCjprDXpU-l-I'

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
};

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});