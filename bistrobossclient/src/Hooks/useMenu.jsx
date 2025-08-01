// import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {

       const axiosPublic = useAxiosPublic();
    // const [menu,setMenu]=useState([]);
    // const [loading,setLoading]=useState(true)

    // useEffect(()=>{
    //     fetch('http://127.0.0.1:8000/api/menu/')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])
    // return [menu,loading]


      const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/api/menu/');
            return res.data;
        }
    })


    return [menu, loading, refetch]
   
};

export default useMenu;