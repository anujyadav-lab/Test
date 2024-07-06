import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Image1 from '../Img/image1.jpg';
import Image2 from '../Img/image2.jpg';

import Image3 from '../Img/image3.jpg';
import Image4 from '../Img/image4.jpg';
import Image5 from '../Img/image5.jpg';
import Image6 from '../Img/image6.jpg';
import Image7 from '../Img/image7.jpg';
import Image8 from '../Img/image8.jpg';
import Image9 from '../Img/image9.jpg';
import Image10 from '../Img/image10.jpg';
import Image11 from '../Img/image11.jpg';
import Image12 from '../Img/image12.jpg';import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';

const products = {
  1: {
    images: [Image1, Image2],
    name: "Bookshelf Classics Note",
    price: "$28.00/box",
    description: "Celebrate the magic of storytelling...",
    overview: ["Crane", "Folded Card", "1 card / 1 envelope", "4 1/2 x 5 13/16", "Printing Process - Engraved", "Processing time: 2 - 3 business days", "Platinum & Raspberry design"],
    materials: ["Crane", "100% Cotton Paper", "Medium weight paper", "Made in U.S.A."],
    shipping: ["Crane", "Folded Card", "1 card / 1 envelope", "4 1/2 x 5 13/16", "Printing Process - Engraved", "Processing time: 2 - 3 business days", "Platinum & Raspberry design"]
  },
  2: {
    images: [Image3, Image4],
    name: "Bookshelf Classics Note",
    price: "$28.00/box",
    description: "Celebrate the magic of storytelling and the joy of connection with our foil-enhanced Bookshelf Classics stationery note—a perfect tribute to the literary aficionado in your life or a stylish addition to your own stationery collection. Let your words resonate with the timeless wisdom and enchanting tales that grace the shelves of this beloved bookshelf. Inside, the note offers a blank canvas for your personalized message. Whether you're sending a thoughtful greeting, expressing heartfelt gratitude, or simply sharing a moment of literary appreciation. Crafted from premium-quality paper with a subtle texture and a luxurious feel, this note embodies sophistication and elegance. The included envelope is lined with matte burgundy.",
    overview: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ],
    materials: [
      "Crane",
      "100% Cotton Paper",
      "Medium weight paper",
      "Made in U.S.A.",
    ],
    shipping: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ]
  },
  3: {
    images: [Image5, Image6],
    name: "Bookshelf Classics Note",
    price: "$28.00/box",
    description: "Celebrate the magic of storytelling and the joy of connection with our foil-enhanced Bookshelf Classics stationery note—a perfect tribute to the literary aficionado in your life or a stylish addition to your own stationery collection. Let your words resonate with the timeless wisdom and enchanting tales that grace the shelves of this beloved bookshelf. Inside, the note offers a blank canvas for your personalized message. Whether you're sending a thoughtful greeting, expressing heartfelt gratitude, or simply sharing a moment of literary appreciation. Crafted from premium-quality paper with a subtle texture and a luxurious feel, this note embodies sophistication and elegance. The included envelope is lined with matte burgundy.",
    overview: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ],
    materials: [
      "Crane",
      "100% Cotton Paper",
      "Medium weight paper",
      "Made in U.S.A.",
    ],
    shipping: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ]
  },
  4: {
    images: [Image7, Image8],
    name: "Bookshelf Classics Note",
    price: "$28.00/box",
    description: "Celebrate the magic of storytelling and the joy of connection with our foil-enhanced Bookshelf Classics stationery note—a perfect tribute to the literary aficionado in your life or a stylish addition to your own stationery collection. Let your words resonate with the timeless wisdom and enchanting tales that grace the shelves of this beloved bookshelf. Inside, the note offers a blank canvas for your personalized message. Whether you're sending a thoughtful greeting, expressing heartfelt gratitude, or simply sharing a moment of literary appreciation. Crafted from premium-quality paper with a subtle texture and a luxurious feel, this note embodies sophistication and elegance. The included envelope is lined with matte burgundy.",
    overview: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ],
    materials: [
      "Crane",
      "100% Cotton Paper",
      "Medium weight paper",
      "Made in U.S.A.",
    ],
    shipping: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ]
  },
  5: {
    images: [Image9, Image10],
    name: "Bookshelf Classics Note",
    price: "$28.00/box",
    description: "Celebrate the magic of storytelling and the joy of connection with our foil-enhanced Bookshelf Classics stationery note—a perfect tribute to the literary aficionado in your life or a stylish addition to your own stationery collection. Let your words resonate with the timeless wisdom and enchanting tales that grace the shelves of this beloved bookshelf. Inside, the note offers a blank canvas for your personalized message. Whether you're sending a thoughtful greeting, expressing heartfelt gratitude, or simply sharing a moment of literary appreciation. Crafted from premium-quality paper with a subtle texture and a luxurious feel, this note embodies sophistication and elegance. The included envelope is lined with matte burgundy.",
    overview: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ],
    materials: [
      "Crane",
      "100% Cotton Paper",
      "Medium weight paper",
      "Made in U.S.A.",
    ],
    shipping: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ]
  },
  6: {
    images: [Image11, Image12],
    name: "Bookshelf Classics Note",
    price: "$28.00/box",
    description: "Celebrate the magic of storytelling and the joy of connection with our foil-enhanced Bookshelf Classics stationery note—a perfect tribute to the literary aficionado in your life or a stylish addition to your own stationery collection. Let your words resonate with the timeless wisdom and enchanting tales that grace the shelves of this beloved bookshelf. Inside, the note offers a blank canvas for your personalized message. Whether you're sending a thoughtful greeting, expressing heartfelt gratitude, or simply sharing a moment of literary appreciation. Crafted from premium-quality paper with a subtle texture and a luxurious feel, this note embodies sophistication and elegance. The included envelope is lined with matte burgundy.",
    overview: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ],
    materials: [
      "Crane",
      "100% Cotton Paper",
      "Medium weight paper",
      "Made in U.S.A.",
    ],
    shipping: [
      "Crane",
      "Folded Card",
      "1 card / 1 envelope",
      "4 1/2 x 5 13/16",
      "Printing Process - Engraved",
      "Processing time: 2 - 3 business days",
      "Platinum & Raspberry design"
    ]
  },
};
const ProductDetails = () => {
  const { id } = useParams();
  const product = products[id];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  const [mainImage, setMainImage] = useState(product.images[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex justify-center p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl">
        <div className="flex flex-col items-start sm:mr-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-16 h-16 object-cover mb-2 cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div className="sm:w-1/2 sm:pr-8">
          <img className="w-full h-auto object-cover" src={mainImage} alt="Product" />
        </div>
        <div className="sm:w-1/2 sm:pl-8 mt-4 sm:mt-0">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-6">{product.description}</p>
          <div className="mb-4">
            <Dropdown2 quantity={quantity} setQuantity={setQuantity} />
          </div>
          <p className="text-gray-700 text-xl mb-4 font-semibold">{product.price}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-[400px] mt-8">Add to Cart</button>
          <div className="mt-8">
            <div className="flex space-x-4">
              <button
                className={`text-lg font-semibold ${activeTab === 'overview' ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleTabClick('overview')}
              >
                Overview
              </button>
              <button
                className={`text-lg font-semibold ${activeTab === 'materials' ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleTabClick('materials')}
              >
                Materials
              </button>
              <button
                className={`text-lg font-semibold ${activeTab === 'shipping' ? 'text-blue-500' : 'text-gray-700'}`}
                onClick={() => handleTabClick('shipping')}
              >
                Shipping
              </button>
            </div>
            <div className="mt-4">
              {activeTab === 'overview' && (
                <div className="mt-8 ml-4">
                  <ul className="list-disc list-inside text-gray-700">
                    {product.overview.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'materials' && (
                <div className="mt-8 ml-4">
                  <ul className="list-disc list-inside text-gray-700">
                    {product.materials.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div className="mt-8 ml-4">
                  <ul className="list-disc list-inside text-gray-700">
                    {product.shipping.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetails;
