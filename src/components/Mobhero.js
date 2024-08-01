import React from 'react'
import Image from 'next/image';

function Mobhero() {
  return (
    <div className='lghide'>
    <div className="circles ">

    <Image
          src="/re.png"
          width={300}
          height={300} className='rounded-2xl shadow-l'
          alt="Picture of cake"
        />      </div>
        <h3  className=" text-4xl p-3">
          Celebrate Life’s Sweetest           Moments With Cake Zone

        </h3>
        <div>
          <button  className='animationtxt m-4 bg-slate-200 font-bold  pr-2 p-2 rounded-xl'>Order From ZOMATO</button>
          <button  className='animationtxt m-4 font-bold bg-slate-200  p-2 rounded-xl'>Call To Order</button>
        </div>
    </div> )
}

export default Mobhero
