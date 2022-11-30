import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { BsSearch, BsYoutube} from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const [text, setText] = useState(''); //검색어
    
    const navigate = useNavigate();
    const {keyword} = useParams();

    useEffect(()=> {
        setText(keyword || '');
    },[keyword])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }

    const handleChange = (e) => {
        const {value: text} = e.target;
        setText(text);
    }

    const moveHome = () => {
        setText('');
        navigate('/');
    }

    

    return (
        <header>
            <span className="info" onClick={moveHome}>
                <BsYoutube />
                <span>YouTube</span>
            </span>
            <form action="" onSubmit={handleSubmit} >
                <input type="text" placeholder='Search...' value={text} onChange={handleChange}/>
                <button><BsSearch /></button>
            </form>
        </header>
    );
}

