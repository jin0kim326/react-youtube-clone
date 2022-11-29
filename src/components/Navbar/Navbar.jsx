import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

export default function Navbar() {
    const [query, setQuery] = useState(''); //검색어
    const client = useQueryClient();

    const {
        isLoading,
        error,
        data: searchVideoList,
      } = useQuery(['searchVideoList'], async () => {
        return fetchVideosByQuery(query);
      },{
        staleTime: 6000
      });
    

    

    const handleSubmit = (e) => {
        e.preventDefault();
        getSearchList();
    }

    const getSearchList= () =>{
        client.invalidateQueries(['searchVideoList']);
    }

    const fetchVideosByQuery = async (query) => {
        console.log(`:: 검색결과 조회완료 검색어:${query} ::`);
        return fetch(`data/searchVideoList.json`).then((res) => res.json());
    }

    


    const handleChange = (e) => {
        const {value: query} = e.target;
        setQuery(query);
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} >
                <input type="text" name='q' onChange={handleChange}/>
                <button>search</button>
            </form>
        </>
    );
}

