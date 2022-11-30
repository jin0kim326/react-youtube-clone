import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Video from '../Video/Video';

export default function VideoList() {
    const {
        isLoading,
        error,
        data: videoList,
      } = useQuery(['videoList'], async () => {
        console.log(`fetching...`);
        // fetch(`data/videoList.json`).then((res) => console.log(res.json()));
        return fetch(`data/videoList.json`).then((res) => res.json());
      });

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

    return (
        <ul>
            {videoList.map(video => <Video video={video} />)}
        </ul>
    );
}

