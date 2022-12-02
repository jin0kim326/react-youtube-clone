import axios from "axios";

export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async channel() {
        return this.#channelInfo();
    }

    /**
     * 연관된 비디오
     */
    async related(videoId) {
        return this.#relatedByVideo();
    }

    async #searchByKeyword(keyword) {
        return this.apiClient
        .search({
             params :{
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: keyword
            }}
        )
        .then((res) => res.data.items)
        .then(items => items.map(item => ({...item, id: item.id.videoId})))
    }

    async #mostPopular() {
        return this.apiClient
        .videos({
             params :{
                part: 'snippet',
                maxResults: 25,
                chart: 'mostPopular'
            }}
        )
        .then((res) => res.data.items)
    }

    async #channelInfo() {
        return this.apiClient
        .channel()
        .then(res => res.data.items[0].snippet)
    }

    async #relatedByVideo(videoId) {
        return this.apiClient
        .related()
        .then(res=> res.data.items)
    }
}