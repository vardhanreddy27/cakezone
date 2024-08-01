import React from 'react';

function Occasion() {
  const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-md relative">
        <div className="relative overflow-hidden">
          <img className="w-full transform transition duration-300 hover:scale-105" src={imageUrl} alt="Card image" height={300} />
          <div className="absolute bottom-0 left-0 right-0 text-center  bg-opacity-50 text-white"style={{ backdropFilter: 'blur(40px)' }}>
            <h3 className="font-semibold text-lg py-2">{title}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='bg-red-100'id="gallery">
      <div className="p-5 m-5">
        <div className='text-center'>
          <h1 className='font-bold'> Treats for any Occasion</h1>
          <p className='pt-1 '>We’ve got you covered for any holiday, special occasion, or cause for celebration.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9">
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="birthdaycake.PNG"
                title="Birthday Cake"
               />
            </div>
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="weddingcake.PNG"
                title="Wedding Cake"
              />
            </div>
           
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="babyshowercake.PNG"
                title="Baby Shower Cake"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9">
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="stepcake.PNG"
                title="Step Cake"
               />
            </div>
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="pinatacake.PNG"
                title="Pinata Cake"
              />
            </div> 
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="customisedcakes.PNG"
                title="Customised Cake"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9">
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="bombcake.PNG"
                title="Bomb Cake"
               />
            </div>
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="photocake.PNG"
                title="Photo Cake"
              />
            </div> 
            <div className="w-full sm:w-auto">
              <Card
                imageUrl="family.PNG"
                title="Family Cake"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Occasion;
