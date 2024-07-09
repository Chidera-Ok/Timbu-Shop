'use client'
import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { image, title, description, price, addToCartLink } = this.props;

    return (
      <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-auto object-cover group-hover:scale-105 transition duration-300 ease-in-out"
          src={image}
          alt={title}
        />
        <div className="p-4 flex flex-col justify-between">
          <h5 className="text-xl font-medium text-gray-900">{title}</h5>
          <p className="text-gray-700 mb-2">{description}</p>
          <p className="text-gray-900 font-bold">Price: ${price}</p>
          <a href={addToCartLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}

export default ProductCard;
