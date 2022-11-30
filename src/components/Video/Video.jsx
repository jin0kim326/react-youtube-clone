import React from 'react';
import {  useNavigate } from "react-router-dom";

export default function Video({video}) {
    const {snippet} = video;
    const {url: thumbnail} = snippet.thumbnails.default;
    const {title} = snippet.localized;
    const {channelTitle} = snippet;
    const {publishedAt} = snippet;

    const navigate = useNavigate();

    const moveVideoDetail = () => {
        navigate(`/video/${video.id}`, {state: video});
    }

    return (
        <li onClick={moveVideoDetail} key={video.id}>
            <img src={thumbnail}></img>
            <h6>{title}</h6>
            <p>{channelTitle}</p>
            <p>{publishedAt}</p>
        </li>
    );
}

