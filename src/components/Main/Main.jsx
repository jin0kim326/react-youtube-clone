import React from 'react';
import Navbar from '../Navbar/Navbar';
import VideoList from '../VideoList/VideoList';
import { useQuery } from '@tanstack/react-query';


export default function Main() {
    const {
        isLoading,
        error,
        data: videoList,
      } = useQuery(['videoList'], async () => {
        console.log(`fetching...`);
        return fetch(`data/videoList.json`).then((res) => res.json());
      });

    return (
        <>
            <Navbar />
            <VideoList videoList={videoList.items}/>
        </>
    );
}

