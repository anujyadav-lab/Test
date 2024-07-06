import React from "react";
import { Link } from "react-router-dom";

import Product1 from '../Img/p1.jpg';
import Product2 from '../Img/p2.jpg';
import Product3 from '../Img/p3.jpg';
import Product4 from '../Img/p4.jpg';
import Product5 from '../Img/p5.jpg';
import Product6 from '../Img/p6.jpg';
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import Hero from "./Hero";

const products = [
  { id: 1, image: Product1, name: "Rose Gold", price: "$22/box" },
  { id: 2, image: Product2, name: "Rose Gold", price: "$22/box" },
  { id: 3, image: Product3, name: "Rose Gold", price: "$22/box" },
  { id: 4, image: Product4, name: "Rose Gold", price: "$22/box" },
  { id: 5, image: Product5, name: "Rose Gold", price: "$22/box" },
  { id: 6, image: Product6, name: "Rose Gold", price: "$22/box" },
];

const ProductCards = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col lg:flex-row p-4 lg:p-20 w-full lg:w-[1400px] lg:ml-28">
        <div className="w-full lg:w-1/4 p-4 mt-4 lg:mt-[70px]">
          <Accordion />
        </div>
        <div className="flex-1">
          <div className="flex justify-end pr-4 lg:pr-8 pt-4">
            <Dropdown />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 p-4 lg:p-8">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>

<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                  <img
                    className="w-full h-42 object-cover object-center rounded-t-lg"
                    src={product.image}
                    alt="Product Image"
                  />
                  <div className="px-4 py-2 flex justify-between items-center">
                    <h3 className="text-sm lg:text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-700 text-sm lg:text-base">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;