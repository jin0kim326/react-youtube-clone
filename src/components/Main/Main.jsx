import React from 'react';
import Navbar from '../SearchHeader/SearchHeader';
import VideoList from '../VideoList/VideoList';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';


export default function Main() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

