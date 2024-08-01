import React from 'react';

function Cakekit() {
  return (
    <div className='text-center  m-9'>
      <h1 className='font-bold'>From Kit to Blissful Cake Moments!</h1>
        <iframe
          className="videohw rounded-tr-2xl rounded-tl-2xl mt-3"
          src="https://www.youtube.com/embed/O4sfvUANuVs?si=O_MzV8XskI06ujmD"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <button type="button" className="w-full rounded-bl-2xl rounded-br-2xl py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-pink-500 text-white hover:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
  BUY NOW 
</button>
    </div>
  );
}

export default Cakekit;
