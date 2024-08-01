import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

function Join() {
  return (
    <div  className="bg-cover flex justify-center items-center h-96 custombg">
    <div  className="text-center">
      <h2  className=" text-3xl font-bold mb-4">Join Our Whatsapp Group</h2>
      <p  className="mb-6 ">
        Get the freshest Magnolia Bakery updates and offers right to your inbox! Plus, enjoy 10% off on your birthday when you share the date with us!
      </p>
      <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 " style={{ display: 'inline-flex', alignItems: 'center' }}>
        <FaWhatsapp className='inline mr-2'size={20}  /><p className='inline'>Join Now</p></button>
    </div>
  </div>
  
  )
}

export default Join
