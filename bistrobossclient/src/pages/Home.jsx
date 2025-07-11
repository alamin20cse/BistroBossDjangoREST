import React from 'react';
import Bannar from './Bannar';
import Category from './Category';
import { Helmet } from 'react-helmet-async';


const Home = () => {
   
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Bannar></Bannar>
           <Category></Category>
           
            
        </div>
    );
};

export default Home;