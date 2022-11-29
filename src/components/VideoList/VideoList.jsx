import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Video from '../Video/Video';

export default function VideoList({videoList}) {

    console.log(videoList);
    
    return (
        <ul>
            {videoList.map(video=> <Video video={video} />)}
        </ul>
    );
}

