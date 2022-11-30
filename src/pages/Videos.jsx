import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    const {keyword} = useParams();
    console.log(keyword);
    return (
        <div>
            { keyword ? `VideoList🔎${keyword}` : `VideoList🔥` }
        </div>
    );
}

