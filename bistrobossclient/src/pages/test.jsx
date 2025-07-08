import React from 'react';
import img1 from '../assets/photo1.jpeg';
import img2 from '../assets/pic2.jpeg';
import img3 from '../assets/pic3.jpeg';
import img4 from '../assets/photo1.jpeg';
import { FaUser, FaClock } from 'react-icons/fa';

const BlogCard = ({ img, category, title, date, author }) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

      <div className="absolute bottom-0 p-4 text-white z-10">
        <p className="text-xs font-semibold bg-indigo-700 inline-block px-2 py-1 rounded">
          {category}
        </p>
        <h2 className="text-lg md:text-xl font-bold mt-2">{title}</h2>
        <div className="text-sm mt-1 flex items-center gap-4">
          {author && (
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" /> {author}
            </span>
          )}
          <span className="flex items-center gap-1">
            <FaClock className="text-xs" /> {date}
          </span>
        </div>
      </div>
    </div>
  );
};

const BlogGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 p-4">
     

     {/* 1st div */}

     <div>
         <div className="md:col-span-2">
        <BlogCard
          img={img1}
          category="SHOPPING & REWARDS APPS"
          title="Get Paid for Shopping with NCPMobile: Turn Your Receipts into Rewards"
          date="February 04, 2025"
          author="Offer Review Related"
        />
      </div>
     </div>




<div>


<div className='grid grid-cols-2 '>
    <div className=''>
         <BlogCard
          img={img2}
          category="SHOPPING & REWARDS APPS"
          title="NCPMobile: Turn Receipts into Rewards"
          date="February 04, 2025"
        />
    </div>


    <div className='grid grid-rows-2 '>
        <div>

          
        <BlogCard
          img={img3}
          category="SHOPPING & REWARDS APPS"
          title="Shop, Scan & Earn with NCPMobile"
          date="February 04, 2025"
        />
    </div>
    
    <div className="">
     
        <BlogCard
          img={img4}
          category="SHOPPING & REWARDS APPS"
          title="Should You Use The NCP Mobile App To Earn? – Here’s What I Found"
          date="August 27, 2024"
        />
      </div>


    </div>









    




</div>


















</div>








      
    </div>
  );
};

export default BlogGrid;









<div
  className="relative w-full h-64 md:h-full bg-cover bg-center rounded-lg overflow-hidden block text-transparent hover:scale-105 transform transition-all duration-300 ease-in-out"
  style={{ backgroundImage: `url(${img})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-full opacity-70" 
       style={{ background: 'linear-gradient(45deg, #292484 0%, #dc4225 100%)' }}>
  </div>

  {/* Optional content like text at bottom */}
  <div className="absolute bottom-0 p-4 z-10 text-white">
    <p className="uppercase text-sm">Shopping & Rewards Apps</p>
    {/* more content here if needed */}
  </div>
</div>
