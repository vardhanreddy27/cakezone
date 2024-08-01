import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Topnav() {
  return (
    <div className='bg-zinc-700 justify-between text-white p-1 hidden md:flex'> {/* Added hidden and md:flex classes */}
      <div className='col-span-4 flex items-center gap-6 ms-4'>
        <div className='flex items-center gap-6'>
          <RiFacebookFill />
          <a href="https://api.whatsapp.com/send?phone=919866531011&text=Hii">  <ImWhatsapp /></a>
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
      <div className='col-span-4 text-center'>
        <p className='font-thin text-sm'>Handcrafted Perfection: Your Top Choice for Custom Cakes 🤝 </p>
      </div>
      <div className='col-span-4 text-right me-4'>
        <p className='font-thin text-sm'><a href="tel:7483505691">Call 9866531011</a></p>
      </div>
    </div>
  );
}

export default Topnav;
