import React from 'react';
import pattern from '../assets/pattern.png';

const Slidesection = () => {
    return (
        <div>
        <div className='flex gap-2 w-full h-full  mb-10' >
            <div className='flex flex-col justify-between w-full h-96 flex-1 relative'>
                <div className='flex flex-col gap-10 m-8'>
                    <h6 className='font-semibold text-4xl'>Mentorship</h6>
                    <p className=' text-base text-justify absolute top-28 left-8 right-52'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni repellendus cumque nesciunt fugiat, deserunt ducimus, ipsum voluptatem odio harum accusantium rem? At quidem omnis debitis cupiditate nam tempore eos?
                    </p>
                    <img className='object-contain absolute w-32 top-48 -right-16 z-10 ' src={pattern} alt="pattern" />
                </div>
                <div className='bg-[#06113C] border-2 border-slate-500 shadow-2xl flex justify-around h-20 items-center p-10 -mr-20 z-10 ml-8'>
                    <div>
                        <h6 className='text-[#FF8C32] text-2xl text-center'>2017</h6>
                        <p className='text-sm text-white'>Founded</p>
                    </div>
                    <div>
                        <h6 className='text-[#FF8C32] text-2xl text-center'>1500</h6>
                        <p className='text-sm text-white'>Members</p>
                    </div>
                    <div>
                        <h6 className='text-[#FF8C32] text-2xl text-center'>80%</h6>
                        <p className='text-sm text-white'>Hiring Rate</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex-1 relative z-0'>
                <img className='object-contain absolute w-32 -top-6 left-3/4 mr-8 ' src={pattern} alt="pattern" />
                <div className='bg-slate-600 w-11/12 h-full rounded-tr-[214px] rounded-br-[40px] mr-22 shadow-3xl'>

                </div>
            </div>

        </div>
        <div className='flex items-center justify-center gap-3 w-full h-10  mb-10 -mt-8'>
                <div className='bg-[#FF8C32] rounded-full w-9 h-3 shadow-3xl'></div>
                <div className='bg-white rounded-full w-4 h-3 shadow-3xl'></div>
                <div className='bg-white rounded-full w-4 h-3 shadow-3xl'></div>
        </div>
        </div>
    )
}

export default Slidesection;