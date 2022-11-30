import React, { useEffect, useState } from 'react';
import { BsSearch, BsYoutube} from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

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

    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600'>
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
            </Link>
            <form className='w-full flex justify-center' onSubmit={handleSubmit} >
                <input className='w-7/12 p-2 outline-none bg-black text-gray-50' type="text" placeholder='Search...' value={text} onChange={e => setText(e.target.value)}/>
                <button className='bg-zinc-600 px-4 '><BsSearch /></button>
            </form>
        </header>
    );
}

