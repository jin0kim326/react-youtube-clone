import React from 'react';
import Navbar from '../Navbar/Navbar';
import VideoList from '../VideoList/VideoList';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';


export default function Main() {

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
        <>
            <Navbar />
            <VideoList videoList={videoList.items}/>
        </>
    );
}

