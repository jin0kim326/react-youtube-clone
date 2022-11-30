import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
    const {keyword} = useParams();
    const { youtube } = useYoutubeApi();

    const { 
        isLoading,
        error,
        data: videos,
    } = useQuery(['videos',keyword], () => 
        youtube.search(keyword)
    );
    
    return (
        <>
            <div>{ keyword ? `VideoList🔎${keyword}` : `VideoList🔥` }</div>
            {isLoading && <p>Loading...</p>}
            {error && <p> 😿 {error}</p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                    <VideoCard key ={video.id} video={video} />
                    ))}
                </ul>
            )}
        </>
    );
}

