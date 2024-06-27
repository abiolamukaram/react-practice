import React from 'react'
import logo from "../assets/logo.png"
import { FaRegUser, FaSearch, FaRegHeart, } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <nav className='bg-white w-full h-[100px] flex items-center px-[60px] shadow] justify-between'>
            <div>
                <img src={logo} alt="" className="logo" />
            </div>
            <div className='flex w-[400px] justify-between'>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>

            <div className='flex w-[250px] justify-between'>
                <FaRegUser className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
                <FaSearch className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
                <FaRegHeart className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer'/>
                <IoCartOutline className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer'/>
            </div>
        </nav>
    )
}

export default Navbar
