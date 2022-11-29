import React from 'react';

export default function Video({video}) {
    console.log(video);

    

    const {snippet} = video;
    const {url: thumbnail} = snippet.thumbnails.default;
    const {title} = snippet.localized;
    const {channelTitle} = snippet;
    const {publishedAt} = snippet;

    

    return (
        <li>
            <img src={thumbnail}></img>
            <h6>{title}</h6>
            <p>{channelTitle}</p>
            <p>{publishedAt}</p>
        </li>
    );
}

