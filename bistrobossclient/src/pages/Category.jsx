

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import p1 from '../assets/home/slide1.jpg'
import p2 from '../assets/home/slide2.jpg'
import p3 from '../assets/home/slide3.jpg'
import p4 from '../assets/home/slide4.jpg'
import p5 from '../assets/home/slide5.jpg'


// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../Shared/Component/SectionTitle';

const Category = () => {
    return (


<section>
    
       <SectionTitle heading="From 10 to 10 PM" subheading="Order online" />
        <div className=''>
            
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p1} alt=""  />
        <h3 className='text-4xl uppercase text-center -mt-32 pb-16 text-white text-shadow-2xs'>Salad</h3>
         </SwiperSlide>
        <SwiperSlide><img src={p2} alt=""  />  <h3 className='text-4xl uppercase text-center -mt-32  text-white text-shadow-2xs'>Pizza</h3></SwiperSlide>
        <SwiperSlide><img src={p3} alt=""  /> <h3 className='text-4xl uppercase text-center -mt-32  text-white text-shadow-2xs'>Soup</h3> </SwiperSlide>
        <SwiperSlide><img src={p4} alt=""  /> <h3 className='text-4xl uppercase text-center -mt-32  text-white text-shadow-2xs'>Desert</h3> </SwiperSlide>
        <SwiperSlide><img src={p5} alt=""  />  <h3 className='text-4xl uppercase text-center -mt-32  text-white text-shadow-2xs'>Salad</h3></SwiperSlide>
        
      </Swiper>
  
            
        </div>
</section>
    );
};

export default Category;