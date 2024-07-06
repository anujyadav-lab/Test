import React from "react";
import thankImg from '../Img/thank.jpg';

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 xl:px-0 mt-10">
      <div className="flex flex-col md:flex-row items-start bg-customColor p-4 md:p-2">
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-12 md:mt-20 ml-4 text-customColor1">THANK YOU</h1>
          <p className="mt-4 md:mt-2 ml-4 text-customColor1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate facilis quasi voluptatibus corrupti! doloribus,
            necessitatibus praesentium vero molestiae laudantium eligendi nemo reprehenderit id eaque iste est?
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <img src={thankImg} alt="img" className="w-4/5 md:w-[250px] mt-6 md:mt-[45px] ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
