import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import gsap from 'gsap';

export default function Products() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getInitialSlidesToShow());
    };

    const getInitialSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      return screenWidth < 768 ? 1 : 3; // Adjust breakpoint and slidesToShow as needed
    };

    setSlidesToShow(getInitialSlidesToShow());

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: slidesToShow,
    speed: 500,
  };
    return (
      <div className="p-5 m-5"id="cakes" >
            <div className='text-center'>
      <h1 className='font-bold'>Our Products</h1>
      <p className='pt-1 '>For more than 25 years, Cake Zone Bakery has been making best baked goods the old-fashioned way<br /> from scratch, in small batches, and using the finest ingredients.</p>
    </div>
    <div className="mt-9">
      <Slider {...settings}>
          <div  >
<Image src="/cupcake.jpg" alt="cup cake cake zone"  width={500}  className="p-1"
      height={300}/>    <h3 className="p-1 font-bold">Cupcakes</h3>    </div>
          <div  >
          <Image src="/cakes.jpg" alt="cup cake cake zone"  width={500}  className="p-1"
      height={300}/>     <h3 className="p-1 font-bold">Cakes</h3>               </div>
          <div>
          <Image src="/hamper.jpg" alt="cup cake cake zone"  width={500}  className="p-1"
      height={300}/>        <h3 className="p-1 font-bold">Gift Hampers</h3>            </div>
          <div>
          <Image src="/cookies.PNG" alt="cup cake cake zone"  width={500}  className="p-1"
      height={300}/>           <h3 className="p-1 font-bold">Premium Cookies</h3>         </div>
          <div>
          <Image src="/brownie.jpg" alt="cup cake cake zone"  width={500}  className="p-1"
      height={300}/>   <h3 className="p-1 font-bold">Brownies</h3>                 </div>
          <div >
              <Image src="/icecreamcake.jpg" alt="cup cake cake zone"  width={500}  className="p-1"
      height={300}/>            <h3 className="p-1 font-bold">Pastries</h3>        </div>
        </Slider>
        </div>
        </div>
    );
  }