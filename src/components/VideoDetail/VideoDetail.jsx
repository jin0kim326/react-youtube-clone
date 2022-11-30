import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function VideoDetail() {
    const {state:video} = useLocation();

    // const {
    //     isLoading,
    //     error,
    //     data: channel,
    //   } = useQuery(['channel'], async () => {
    //     console.log(`fetching...!!`);
    //     return fetch(`data/searchVideoList.json`).then((res) => res.json());
    //   });


    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    const {snippet} = video;
    // const {default:url} = channel.items[0].snippet.thumnails;
    
    return (
        <div>
            <iframe id="player" type="text/html" width="640" height="390"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0"></iframe>
            <h3>{snippet.title}</h3>
            <div className="channelInfo">
                <h6>{snippet.channelTitle}</h6>
            </div>
            <p>{snippet.description}</p>
        </div>
    );
}

