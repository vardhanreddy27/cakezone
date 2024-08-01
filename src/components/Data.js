import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Mobhero from './Mobhero';

const Data = () => {
  const circleRef = useRef(null);
  const imageRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const myText = new SplitType('#my-text');

    gsap.to('.word', {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.1,
    });

    gsap.set(circleRef.current, { autoAlpha: 0 });
    gsap.set(imageRef.current, { autoAlpha: 0 }); // Initially hide the image

    const delayTime = 100;
    const tl = gsap.timeline({ delay: delayTime / 500 });
    tl.to(circleRef.current, { autoAlpha: 1 }).to('.circle', {
      width: '360px',
      height: '360px',
      borderRadius: '50%',
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(imageRef.current, { autoAlpha: 1, duration: 0.5, onComplete: () => setShowButtons(true) });
      },
    });
  }, []);

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px', // Adjust as needed for spacing between buttons
    justifyContent: 'center', // Align buttons to center horizontally
    position: 'absolute',
    visibility: showButtons ? 'visible' : 'hidden',
  };

  const buttonStyle = {
    // Styling for the buttons (assuming these are inline-block elements)
    // Add more CSS properties if necessary
    // Example: width, height, padding, etc.
    // Example: background-color, color, font-size, etc.
  };

  return (
    <>
    <div className="container myhide">
      <div className="leftContent ">
        <h1 id="my-text" className="animationtxt mytitle">
          Celebrate Lifes Sweetest
        </h1>
        <h1 id="my-text" className="animationtxt mytitle">
          Moments With Cake Zone
        </h1><br />
        {/* Button container */}
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} className='animationtxt bg-pink-500 text-white hover:bg-pink-700 p-2 rounded-xl'>Call To Order</button>
        </div>
      </div>
      <div className="rightContent element-to-hide">
        {/* Circle with image */}
        <div ref={circleRef} className="circle ">
          <img src="re.png" className="aniimg" alt="Image" ref={imageRef} />
        </div>
      </div>
      
    </div>
    <Mobhero />
    

    </>
  );
};

export default Data;
