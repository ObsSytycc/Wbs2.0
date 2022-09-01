import React from 'react'
import techX from '../assets/templogo.png';
import sapphire from '../assets/tempS.png';
import helix from '../assets/tempH.png';
import obsidian from '../assets/tempO.png';

const Teamsection = () => {
  return (
      <div className='flex flex-col gap-10 mt-16 bg-white m-8'>
        <h2 className='text-center font-semibold text-3xl'>Our Teams</h2>
          <p className='mb-16 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptatum pariatur quia nemo ut deleniti totam ad error ducimus porro debi
         tis iure nesciunt numquam architecto voluptatibus, aperiam dolores inventore, m
         agni ab culpa minima mollitia beatae. A minima explicabo fugiat minus culpa?
        </p>
          <div className='flex gap-4 bg-white w-full h-96'>
              <div className='flex flex-col gap-6 bg-[#EEF0F2] w-72 h-80 rounded-3xl relative shadow-md'>
                  <div className='bg-[#06113C] w-24 h-24 rounded-3xl absolute -top-10 left-24 shadow-md'>
                  <div className='flex flex-col items-center justify-center p-6'>
                    <img src={helix} alt="company logo " />
                  </div> 
                  </div>
                  <div className='p-8 mt-16 items-center'>
                      <h1 className='text-center mb-2 font-semibold text-xl  text-[#FF8C32]'>Helix. Inc</h1>
                      <p className='font-normal text-[#06113C] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo minus nemo enim assumenda praesentium minima similique dolorum atque recusandae?</p>
                  </div>
            </div>

              <div className='bg-[#EEF0F2] w-72 h-80 rounded-3xl relative shadow-md'>
                  <div className='bg-[#06113C] w-24 h-24 rounded-3xl absolute -top-10 left-24 shadow-md'>
                      <div className='flex flex-col items-center justify-center p-6'>
                          <img src={sapphire} alt="company logo " />
                      </div> 
                  </div>
                  <div className='p-8 mt-16 items-center '>
                      <h1 className='text-center mb-2 font-semibold text-xl  text-[#FF8C32]'>Sapphire</h1>
                      <p className='font-normal text-[#06113C] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi voluptas, delectus incidunt rerum maxime! Eos deleniti cumque nostrum mollitia.</p>
                  </div>
              </div>
            
              <div className='bg-[#EEF0F2] w-72 h-80 rounded-3xl relative shadow-md'>
                  <div className='bg-[#06113C] w-24 h-24 rounded-3xl absolute -top-10 left-24 shadow-md'>
                      <div className='flex flex-col items-center justify-center p-6'>
                          <img src={techX} alt="company logo " />
                      </div> 
                  </div>
                  <div className='p-8 mt-16 items-center '>
                      <h1 className='text-center mb-2 font-semibold text-xl  text-[#FF8C32]'>TechX</h1>
                      <p className='font-normal text-[#06113C] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, laboriosam. Eius quis nesciunt ipsum pariatur. Facilis sunt harum modi. Iure.</p>
                  </div>
              </div>
              
              <div className='bg-[#EEF0F2] w-72 h-80 rounded-3xl relative shadow-md'>
                  <div className='bg-[#06113C] w-24 h-24 rounded-3xl absolute -top-10 left-24 shadow-md'>
                      <div className='flex flex-col items-center justify-center p-6'>
                          <img src={obsidian} alt="company logo " />
                      </div> 
                  </div>
                  <div className='p-8 mt-16 items-center '>
                      <h1 className='text-center mb-2 font-semibold text-xl  text-[#FF8C32]'>Obsidian</h1>
                      <p className='font-normal text-[#06113C] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia numquam placeat debitis rerum totam expedita magni eum, exercitationem laboriosam?</p>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Teamsection;