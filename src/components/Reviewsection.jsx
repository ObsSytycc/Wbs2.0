import { Rating } from '@mui/material';
import React from 'react';

const Reviewsection = () => {
    return (
        <div className=' w-full h-96 mt-60'>
            <h6 className='font-semibold text-3xl text-center'>What Our Members Say About Us</h6>
            <div className=' flex justify-around w-full h-96 pl-10 pr-10 pt-20 relative'>
                <div className='bg-white w-80 h-96 right-0 z-10 rounded-r-xl rounded-l-xl shadow-3xl'>
                    <div className='flex justify-center pt-8'>
                        <Rating value={4.5} precision={0.5} readOnly></Rating>
                    </div>
                    <p className='p-6 font-light  text-sm text-center'>I've been a member of this community for over a year and I  con say that I've learnt alot from 
                    this community</p>
                    <div className='flex justify-center'>
                    <div className='border-b-2 border-[#818181] w-1/3'></div>
                    </div>
                    <div className='rounded-full bg-amber-100 w-32 h-32 ml-24 mt-4'>

                    </div>
                    <p className='text-center font-semibold mt-4'>Oranu Peculiar</p>
                    <p className='text-center font-semibold text-xs text-[#FF8C32]'>Product Design Lead</p>
                </div>
                <div className='bg-[#06113C] w-72 h-80 absolute top-16 left-24 ml-0 rounded-tr-xl rounded-tl-xl z-0 shadow-3xl'>

                </div>

                <div className='bg-white w-80 h-96 z-10 rounded-r-xl rounded-l-xl shadow-3xl'>
                    <div className='flex justify-center pt-8'>
                        <Rating value={5} precision={0.5} readOnly></Rating>
                    </div>
                    <p className='p-6 font-light  text-sm text-center'>I've been a member of this community for over a year and I  con say that I've learnt alot from
                        this community</p>
                    <div className='flex justify-center'>
                        <div className='border-b-2 border-[#818181] w-1/3'></div>
                    </div>
                    <div className='rounded-full bg-amber-100 w-32 h-32 ml-24 mt-6'>

                    </div>
                    <p className='text-center font-semibold mt-4'>Bakare Jumobi</p>
                    <p className='text-center font-semibold text-xs text-[#FF8C32]'>UI/UX Designer</p>
                </div>
                <div className='bg-[#FF8C32] w-72 h-80 absolute top-16 rounded-tr-xl rounded-tl-xl shadow-3xl z-0'>

                </div>
                <div className='bg-white w-80 h-96 z-10 rounded-r-xl rounded-l-xl shadow-3xl'>
                    <div className='flex justify-center pt-8'>
                        <Rating value={4} precision={0.5} readOnly></Rating>
                    </div>
                    <p className='p-6 font-light  text-sm text-center'>I've been a member of this community for over a year and I  con say that I've learnt alot from
                        this community</p>
                    <div className='flex justify-center'>
                        <div className='border-b-2 border-[#818181] w-1/3'></div>
                    </div>
                    <div className='rounded-full bg-amber-100 w-32 h-32 ml-24 mt-6'>

                    </div>
                    <p className='text-center font-semibold mt-4'>Okenwa Sarah</p>
                    <p className='text-center font-semibold text-xs text-[#FF8C32]'>CTO, Sapphire</p>
                </div>
                <div className='bg-[#06113C] w-72 h-80 absolute top-16 rounded-tr-xl rounded-tl-xl right-24 mr-0 shadow-3xl z-0'>

                </div>
            </div>

            <div className='flex justify-center items-center gap-4  w-full h-40 mt-20 '>
                <div className='border-[#FF8C32] border-2 w-10 h-10 rounded-full'></div>
                <div className='border-[#FF8C32] border-2 w-6 h-6 rounded-full'></div>
                <div className='bg-[#FF8C32] border-[#FF8C32] border-2 w-6 h-6 rounded-full'></div>
                <div className='border-[#FF8C32] border-2 w-6 h-6 rounded-full'></div>
                <div className='border-[#FF8C32] border-2 w-6 h-6 rounded-full'></div>
                <div className='border-[#FF8C32] border-2 w-6 h-6 rounded-full'></div>
                <div className='border-[#FF8C32] border-2 w-10 h-10 rounded-full'></div>
            </div>

        </div>
    )
}

export default Reviewsection;