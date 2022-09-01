import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240] mx-auto px-4 font-medium '>
            <img className='p-2' src={logo} alt=" sytycc logo" />
            <ul className='flex cursor-pointer'>
                <li className='p-6 underline decoration-[#FF8C32] decoration-2'>Home</li>
                <li className='p-6'>About us</li>
                <li className='p-6'>Teams</li>
                <li className='p-6'>Contact</li>
                <li className='p-6'>Blogs</li>
            </ul>
            <button className='font-semibold bg-[#FF8C32] p-2 w-24 h-10 mr-24 rounded-xl text-[#FFFFFF]'>
            Login
            </button>
        </div>
    )
}

export default Navbar;