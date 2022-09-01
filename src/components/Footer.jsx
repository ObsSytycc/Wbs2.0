import { Facebook, Instagram, LinkedIn, MailOutline, PlaceOutlined, Twitter } from '@mui/icons-material';
import React from 'react';
import logo2 from '../assets/logo2.png';
import tele from '../assets/Tele.png';

const Footer = () => {
    return (
        <div className='bg-[#06113C] w-full h-96 mt-24 flex flex-col p-8'>
            <div className='w-full h-4/5 flex justify-around gap-6'>
                <div className='w-1/2 h-full '>
                    <img className='p-2' src={logo2} alt=" sytycc logo" />
                    <div className='text-white text-sm font-medium mt-4 flex flex-col gap-4'>
                        <p>We are fast-growing ecosystem of technology and business enthusiasts that meet the
                            need of the rapidly changing digital world.</p>
                        <p>Our mission at SYTYCC is to support and inspire growth, provide network opportunities
                            while collaborating, using a hands-on approach to create a better future and have fun along the way.
                        </p></div>
                    <div className='flex gap-4 mt-6'>
                        <Facebook sx={{ fill: "white" }} />
                        <LinkedIn sx={{ fill: "white" }} />
                        <Instagram sx={{ fill: "white" }} />
                        <Twitter sx={{ fill: "white" }} />
                    </div>
                </div>
                <div className='w-1/4 h-full flex flex-col gap-2 justify-center items-start ml-8'>
                    <h6 className='text-[#FF8C32] font-semibold'>Company</h6>
                    <ul className='flex flex-col gap-4 text-sm text-white'>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Teams</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className=' w-1/3 h-full flex flex-col gap-2 justify-center items-start'>
                    <h6 className='text-[#FF8C32] font-semibold'>Contact Us</h6>
                    <div className='w-full h-32 flex flex-col gap-4' >
                        <div> <img style={{ width: "16px" }} src={tele} alt="phone" />
                            <p className='text-left ml-6 -mt-5 text-white'>+234-790-2784-987</p></div>
                        <div><MailOutline sx={{ fill: "white" }} />
                            <p className='text-left ml-8 -mt-6 text-white'>support@sytycc.com</p>  </div>
                        <div><PlaceOutlined sx={{ fill: "white" }} />
                            <p className='text-left ml-8 -mt-6 text-white'>Lekki Phase 2 Ext, Lagos state, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-1/5 flex items-center justify-center pt-6'>
                <p className='font-semibold text-sm text-white'>Copyright.SYTYCC.All Right Reserved 2022</p>
            </div>
        </div>
    )
}

export default Footer;