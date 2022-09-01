import React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Projectsection = () => {
    return (
        <div className='flex flex-col gap-4  w-full h-96'>
            <div>
                <h2 className='p-2 font-semibold text-center text-3xl'>Our Projects</h2>
                <p className='text-justify p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea nulla eum amet quisquam commodi, saepe odit dignissimos aperiam exercitationem excepturi minima veritatis alias unde? Corrupti perferendis sunt cum officiis?
                </p>
            </div>
            <div className=' w-full h-full relative'>
                <div className='flex  justify-around  bg-gray-500 w-full h-50'>
                    <div className='w-80 h-64 absolute z-10 left-24 rounded-r-2xl rounded-l-2xl shadow-3xl'>
                        <div className='bg-slate-500 w-full h-4/6 rounded-tr-2xl rounded-tl-2xl' >

                        </div>
                        <div className='flex justify-between bg-white w-full h-2/5 rounded-br-2xl rounded-bl-2xl'>
                            <div className=' h-4/6 pl-6 pr-6 pt-2 flex-2 justify-center items-center'>
                                <h6 className='text-[#FF8C32] text-lg font-semibold'>NSPM</h6>
                                <p className='font-semibold text-md'>Project Team: Obsidian</p>
                            </div>
                            <div className='flex flex-1 flex-col items-center justify-center h-4/6'>
                                <div className='mt-6 ml-8'>
                                    <ArrowCircleRightIcon style={{ color: "#FF8C32" }} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-80 h-64 absolute z-10 left-50 rounded-r-2xl rounded-l-2xl shadow-3xl'>
                        <div className='bg-slate-500 w-full h-4/6 rounded-tr-2xl rounded-tl-2xl' >

                        </div>
                        <div className='flex justify-between bg-white w-full h-2/5 rounded-br-2xl rounded-bl-2xl'>
                            <div className=' h-4/6 pl-6 pr-6 pt-2 flex-2 justify-center items-center'>
                                <h6 className='text-[#FF8C32] text-lg font-semibold'>ENTROVA</h6>
                                <p className='font-semibold text-md'>Project Team: Obsidian</p>
                                <p className='font-light text-sm'>Launch Date: 7th Oct 2022</p>
                            </div>
                            <div className='flex flex-1 flex-col items-center justify-center h-4/6'>
                                <div className='mt-6 ml-8'>
                                    <ArrowCircleRightIcon style={{ color: "#FF8C32" }} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-80 h-64 absolute z-10 right-24 rounded-r-2xl rounded-l-2xl shadow-3xl'>
                        <div className='bg-slate-500 w-full h-4/6 rounded-tr-2xl rounded-tl-2xl' >

                        </div>
                        <div className='flex justify-between bg-white w-full h-2/5 rounded-br-2xl rounded-bl-2xl'>
                            <div className=' h-4/6 pl-6 pr-6 pt-2 flex-2 justify-center items-center'>
                                <h6 className='text-[#FF8C32] text-lg font-semibold'>SYTYCC</h6>
                                <p className='font-semibold text-md'>Project Team: Obsidian</p>
                                <p className='font-light text-sm'>Launch Date: 7th Oct 2022</p>
                            </div>
                            <div className='flex flex-1 flex-col items-center justify-center h-4/6'>
                                <div className='mt-6 ml-8'>
                                    <ArrowCircleRightIcon style={{ color: "#FF8C32" }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#EEF0F2] w-11/12 h-56 absolute rounded-tr-3xl rounded-tl-3xl right-14  top-36 z-0'>

                </div>
            </div>
        </div>

    )
}

export default Projectsection;
