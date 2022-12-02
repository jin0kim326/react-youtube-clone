import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
    const {keyword} = useParams();
    const { youtube } = useYoutubeApi();
    const navigate = useNavigate();

    const { 
        isLoading,
        error,
        data: videos,
    } = useQuery(['videos',keyword], () => 
        youtube.search(keyword)
    );

    const moveVideoDetail = (video) => {
        navigate(`/videos/watch/${video.id}`, {state: video});
    }
    
    return (
        <>
            <div>{ keyword ? `VideoList🔎${keyword}` : `VideoList🔥` }</div>
            {isLoading && <p>Loading...</p>}
            {error && <p> 😿 {error}</p>}
            {videos && (
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
                    {videos.map((video) => (
                    <VideoCard key ={video.id} video={video} handleClick={()=>moveVideoDetail(video)}/>
                    ))}
                </ul>
            )}
        </>
    );
}

