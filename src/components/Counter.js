import React from 'react';
import Image from 'next/image';

function Counter() {
  const textOverImageStyle = {
    position: 'relative', // Set the image container to relative
    width: '700px', // Adjust width as needed
    height: '500px', // Adjust height as needed
  };

  const textOnImage = {
    position: 'absolute', // Position the text absolutely over the image container
    top: '5%', // Adjust top position
    left: '10%', // Adjust left position
    color: 'white', // Change text color
    fontSize: '40px', // Adjust font size
    // Add more styling properties as needed
  };
  return (
    <div className="grid grid-flow-col gap-2 p-9">
      <div className="row-span-3" style={textOverImageStyle}>
        <Image
          src="/step.png"
          width={700}
          height={500} className='rounded-2xl shadow-l'
          alt="Picture of the author"
        />
        <div style={textOnImage} className='font-bold'>KADAPA BEST BAKERY<br />CAKE ZONE</div> {/* Text overlay */}
      </div>
      <div className="col-span-2"> 
       <Image
          src="/customcakes.jpg" className='mycake rounded-2xl shadow-l'
          width={700} // Adjust the width here
          height={246} // Maintain the aspect ratio
          alt="Picture of the author"
        /></div>
      <div className="row-span-2 col-span-2">  <Image
          src="/cup.jpg"className='mycake  rounded-2xl shadow-l'
          width={700} // Adjust the width here
          height={246} // Maintain the aspect ratio
          alt="Picture of the author"
        /></div>
    </div>
  );
}

export default Counter;
