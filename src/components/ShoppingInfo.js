'use client'
import React  from 'react';
import Link from 'next/link'; // Import Link for internal navigation

class ShoppingInfo extends React.Component {
  
  render() {
    return (
      <div >
        <ul className="flex flex-col justify-content space-y-4 mx-2">
            <li className='text-xl font-extrabold'>Shopping Information</li>
            <li>
              <Link href="/product-categories" className='hover:font-bold'> Product Categories </Link>
            </li>
            <li>
              <Link href="/new-arrivals" className='hover:font-bold'>New Arrivals</Link>
            </li>
            <li>
              <Link href="/best-sellers" className='hover:font-bold' >Best Sellers</Link>
            </li>
            <li>
              <Link href="/gift-cards" className='hover:font-bold'>Gift Cards</Link>
            </li>
          </ul>
      </div>
    );
  }
}

export default ShoppingInfo;
