'use client'
import React from 'react';
import Link from 'next/link';

class SiteLinks extends React.Component {
render() {
  return (
    <nav >
        {/* Navigation Links */}
        <ul className="flex flex-col  space-y-4 list-none ml-3">
          <li className='text-xl font-extrabold'>Site links</li>
          <li className={`${this.props.active === 'home' ? 'text-customGray' : 'text-customWhite'} hover:font-bold`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${this.props.active === 'products' ? 'text-customGray' : 'text-customWhite'} hover:font-bold`}>
            <Link href="/products">Products</Link>
          </li>
          <li className={`${this.props.active === 'support' ? 'text-customGray' : 'text-customWhite'} hover:font-bold`}>
            <Link href="/support">Support</Link>
          </li>
          <li className={`${this.props.active === 'account' ? 'text-customGray' : 'text-customwhite'} hover:font-bold`}>
            <Link href="/account">Account</Link>
          </li>
        </ul>
    </nav>
  );
};
}
export default SiteLinks;