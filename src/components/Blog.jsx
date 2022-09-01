
import { SearchOutlined } from '@mui/icons-material';

import React from 'react';

const Blog = () => {
  return (
    <div className='bg-[#EEF0F2] w-full pb-10 mt-80'>
        <div className='flex justify-center'>
              <div className='bg-[#06113C] w-11/12 h-48 mt-20 rounded-3xl shadow-3xl'>

                  <div className='mt-8 relative'>
                      <div className='border-[#FF8C32] border-2 w-6 h-6 rounded-full absolute top-2 left-36'></div>
                   
                        <div className='border-2 bg-white w-6 h-1 rotate-45 rounded-full absolute left-1/3 -top-2 ml-36'></div>
                      <div className='border-2 bg-white w-4 h-1 rotate-90 rounded-full absolute -top-2 left-1/2 -ml-6'></div>
                      <div className='border-2 bg-white w-4 h-1 rotate-12 rounded-full absolute left-1/3 top-2 ml-36'></div>
                      <p className='font-medium text-white text-4xl text-center ml-10 pt-2 mt-14'>Blog</p>
                      </div>
                  <div className='border-[#FF8C32] border-2 w-6 h-6 rounded-full absolute left-3/4 ml-24'></div>
              </div>
             
        </div>
        <div className='flex justify-center'>
        <div className='flex items-center bg-white w-2/4 h-20 -mt-6 rounded-3xl shadow-3xl'>
                  <SearchOutlined sx={{fontSize:50, marginLeft:"25px", color:"gray"}} />
                  <label>Search</label>
              </div>
        </div>
          <div className=' w-full h-16 mt-10 '>
        <ul className='flex justify-center items-center gap-12 font-medium text-sm '>
          <li className='bg-[#FF8C32] w-20 h-8 rounded-xl pl-4 flex items-center'>All</li>
              <li>Technology</li>
              <li>Science</li>
              <li>Space</li>
              <li>Engineering</li>
              <li>Fashion</li>
              <li>Health</li>
            </ul>
          </div>
<div className=' w-full  flex justify-around mt-6'>
        <div className='flex flex-col gap-4'>
        <div className='bg-slate-400 w-80 h-52 rounded-2xl'>
        </div>
          <h6 className='text-[#FF8C32] font-medium text-base '>Health</h6>
        <h6 className='text-clip w-80 font-medium '>Scientist Discover The cure of SCD with The help Of A sophisticated Software </h6>
        <p className='w-80 text-sm text-clip '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Minus expedita eaque veritatis, voluptates</p>
         <div className=' w-full h-24 flex items-center gap-2'>
          <div className='bg-orange-300 w-16 h-16 rounded-full'></div>
            <div className='flex flex-col'>
            <h6 className='font-semibold text-sm '>Oranu Peculiar</h6>
              <h6 className='font-normal text-xs'>June 27,2022</h6>            
            </div>
         </div>
        </div>

        <div className='flex flex-col gap-4'>
        <div className='bg-slate-400 w-80 h-52 rounded-2xl'>
        </div>

          <h6 className='text-[#FF8C32] font-medium text-base '>Engineering</h6>
          <h6 className='text-clip w-80 font-medium '>Scientist Discover The cure of SCD with The help Of A sophisticated Software </h6>
          <p className='w-80 text-sm text-clip '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus expedita eaque veritatis, voluptates</p>
          <div className=' w-full h-24 flex items-center gap-2'>
            <div className='bg-orange-300 w-16 h-16 rounded-full'></div>
            <div className='flex flex-col'>
              <h6 className='font-semibold text-sm '>Oranu Peculiar</h6>
              <h6 className='font-normal text-xs'>June 27,2022</h6>
            </div>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='bg-slate-400 w-80 h-52 rounded-2xl'>
          </div>
          <h6 className='text-[#FF8C32] font-medium text-base '>Space</h6>
          <h6 className='text-clip w-80 font-medium '>Scientist Discover The cure of SCD with The help Of A sophisticated Software </h6>
          <p className='w-80 text-sm text-clip '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus expedita eaque veritatis, voluptates</p>
          <div className=' w-full h-24 flex items-center gap-2'>
            <div className='bg-orange-300 w-16 h-16 rounded-full'></div>
            <div className='flex flex-col'>
              <h6 className='font-semibold text-sm '>Oranu Peculiar</h6>
              <h6 className='font-normal text-xs'>June 27,2022</h6>
            </div>
          </div>
        </div>
      

</div>
    </div>
  )
}

export default Blog;