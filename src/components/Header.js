'use client';
import React, { Component } from 'react';
import Navbar from './Navbar'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] });

class Header extends Component {
    render() {
        return (
            <div >
                <div className="bg-customGray text-customWhite {inter.className} font p-4 flex items-center justify-center">
                    <p className="mx-4 ">Get percent off discount price on selected items</p>
                    <div className="h-6 w-1 bg-customWhite mx-4"></div>
                    <p className="mx-4">Shop now</p>
                </div>

                <Navbar />
            </div>

        );
    }
}

export default Header; 