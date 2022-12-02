import { useQuery } from '@tanstack/react-query';
import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoDetail() {
    const {state : video} = useLocation();
    const { youtube } = useYoutubeApi();
    const {title} = video.snippet;
    

    const {
        isLoading,
        error,
        data: channel
    } = useQuery(['channel'], () =>  
        youtube.channel()
    )

    const {
        isLoading2,
        error2,
        data: related
    } = useQuery(['related'], () =>
        youtube.related()
    )

    console.log(related);

    return (
        <>
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p> 😿 {error}</p>}
            {title}
            {/* {channel && <img src={url}></img>} */}
        </div>
        <article>
            {related && related.map(video => <h1>{video.snippet.title}</h1>)}
        </article>
        </>
    );
}

