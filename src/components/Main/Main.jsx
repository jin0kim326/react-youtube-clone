import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import VideoList from '../VideoList/VideoList';

export default function Main() {
    return (
        <>
            <Navbar />
            <VideoList />
        </>
    );
}

