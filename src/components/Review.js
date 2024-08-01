import React, { Component } from "react";
import Slider from "react-slick";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

export default class Review extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="p-9 text-center bg-slate-100 ">
        <h1 className="font-bold">Customer Reviews</h1>
        <Slider {...settings}>
            <div className="max-w-90 mx-auto bg-slate-100 rounded-xl overflow-hidden">
              {/* Adjusted width to 90% using 'max-w-90' */}
              <div className="p-6 h-64 grid place-items-center centerreview">
                {/* Adjusted height to 'h-64' or any suitable height */}
                <div className="mb-auto">
                  <p className="text-gray-700">❝ Absolutely loved the customized cake I ordered for a birthday occasion! The intricate detailing and personalized touch on the cake were exceptional. From the delightful flavors to the stunning design, it surpassed all expectations. ❞</p>
                </div>
                <div className="mt-6 flex flex-col items-center">
  <p className="text-sm text-gray-500">ravindra reddy</p>
  <div className="flex mt-2">
    {/* Assuming 'FaStar' represents FontAwesome star icons */}
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
  </div>
</div>

              </div>
            </div>  <div className="max-w-90 mx-auto bg-slate-100 rounded-xl overflow-hidden">
              {/* Adjusted width to 90% using 'max-w-90' */}
              <div className="p-6 h-64 grid place-items-center centerreview">
                {/* Adjusted height to 'h-64' or any suitable height */}
                <div className="mb-auto">
                  <p className="text-gray-700">❝ I recently ordered birthday cake here. Provided good options to select a model with our requirement. <br></br>Look is nice and taste also good.
Keep it up ❞</p>
                </div>
                <div className="mt-6 flex flex-col items-center">
  <p className="text-sm text-gray-500">Sathish Kumar</p>
  <div className="flex mt-2">
    {/* Assuming 'FaStar' represents FontAwesome star icons */}
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStarHalfAlt className="text-yellow-500"/>
  </div>
</div>

              </div>
            </div>  <div className="max-w-90 mx-auto bg-slate-100 rounded-xl overflow-hidden">
              {/* Adjusted width to 90% using 'max-w-90' */}
              <div className="p-6 h-64 grid place-items-center centerreview">
                {/* Adjusted height to 'h-64' or any suitable height */}
                <div className="mb-auto">
                  <p className="text-gray-700">❝ The cake I received from Cake Zone was beyond delicious! It was precisely as per my instructions and tasted heavenly. The quality and presentation were fantastic. Highly satisfied with their services!  ❞</p>
                </div>
                <div className="mt-6 flex flex-col items-center">
  <p className="text-sm text-gray-500">Neeraj Menta</p>
  <div className="flex mt-2">
    {/* Assuming 'FaStar' represents FontAwesome star icons */}
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
  </div>
</div>

              </div>
            </div>
            <div className="max-w-90 mx-auto bg-slate-100 rounded-xl overflow-hidden">
              {/* Adjusted width to 90% using 'max-w-90' */}
              <div className="p-6 h-64 grid place-items-center centerreview">
                {/* Adjusted height to 'h-64' or any suitable height */}
                <div className="mb-auto">
                  <p className="text-gray-700">❝ Delightful experience ordering from Winni! Their cakes are of remarkable quality, and the delivery service is exceptional. I ordered a birthday chocolate cake, and it exceeded my expectations. ❞</p>
                </div>
                <div className="mt-6 flex flex-col items-center">
  <p className="text-sm text-gray-500">Kalyan Gondrala
</p>
  <div className="flex mt-2">
    {/* Assuming 'FaStar' represents FontAwesome star icons */}
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
  </div>
</div>

              </div>
            </div>
        </Slider>
      </div>
    );
  }
}
