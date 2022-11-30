import axios from "axios";

export default class YoutubeClient {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
            // params: { key : 'AIzaSyAHz7ywb1SC3oCmi5eWD8wN2d3gYPIHgFQ'}
        })
    }

    async search(params) {
        return this.httpClient.get('search', params);
    }

    async videos(params) {
        return this.httpClient.get('videos', params);
    }
}