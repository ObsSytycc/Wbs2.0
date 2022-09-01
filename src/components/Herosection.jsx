import React from 'react'
import image1 from '../assets/image 1.png';
import gear from '../assets/white gear.png';
import scroll from '../assets/scroll.png';
import magnifyingGlass from '../assets/magnifyingglass.png';

const Herosection = () => {
  return (
    <div className='flex justify-between p-6 text-white w-1920px h-1099px rounded-br-[220px] bg-[#06113C] overflow-x-hidden'>
      <div className='flex flex-col mt-32 relative'>
        <h2 className='font-semibold text-[44px] text-left '>So You Think You Can</h2>
        <p className='font-medium text-[60px] text-[#FF8C32] text-left -mt-4' style={{ fontFamily: 'Mirza' }}>{"{Code}"}</p>
        <p className=' text-[22px] '>Here we dive into the ocean, then we have a cup of coffee and write clean codes.</p>
        <button className='bg-[#FF8C32] font-semibold p-4 absolute top-72 left-4  w-56 h-14 rounded-xl text-[#FFFFFF]'>
          Join us
        </button>
        <img className="object-contain absolute w-8 h-42 mt-52 ml-40 top-60 left-96" src={scroll} alt="scroll" />
      </div>
      <div className="flex p-6 flex-2 relative">
        <img className="object-contain  absolute w-32 h-12 top-10 -left-64 ml-64 " src={gear} alt="a white gear" />
        <img className="object-contain w-full h-full mt-12 ml-8 mb-10 pr-12" src={image1} alt="programmer" />
        <img className="object-contain  absolute w-60 h-20 top-24 -right-20 " src={magnifyingGlass} alt="magnifying glass" />
      </div>
    </div>
  )
}

export default Herosection;