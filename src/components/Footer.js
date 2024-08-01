import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-200 py-4" id="contact">
      <h1 className='text-center font-bold'>Contact Us</h1>
      <div className="flex flex-row p-9 mt-9">
  <div className="basis-1/2"> <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123621.75792438103!2d78.74694457248786!3d14.474354959624144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37205724da48b%3A0x7cd2b66ab9928d2d!2z4LCV4LGH4LCV4LGNIOCwnOCxi-CwqOCxjQ!5e0!3m2!1sen!2sin!4v1701365683788!5m2!1sen!2sin"
            width="500" height="300" style={{ borderRadius: '2rem' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe></div>
  <div className="basis-1/4"><h3 className='font-medium'>Opening Hours</h3>
  <div className="grid grid-cols-2 gap-4 pt-7">
      {/* Days column */}
      <div className="flex flex-col">
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </div>

      {/* Timings column */}
      <div className="flex flex-col">
        <p>10 am - 10 pm</p>
        <p>10 am - 10 pm</p>
        <p>10 am - 10 pm</p>
        <p>10 am - 10 pm</p>
        <p>10 am - 10 pm</p>
        <p>10 am - 10 pm</p>
        <p>10 am - 10 pm</p>
      </div>
    </div>
  </div>
  <div className="basis-1/4"><h3 className='font-medium ml-6'>Social Connect</h3>
<h2 className='pt-5'>
            <RiFacebookFill className='inline m-5' size={20}  />
           <IoLogoWhatsapp className='inline m-5' size={20} />
           <AiFillInstagram className='inline m-5' size={20} />
           <FaYoutube className='inline m-5' size={20} />
          </h2>
  </div>
</div>
     
    </footer>
  );
}

export default Footer;
