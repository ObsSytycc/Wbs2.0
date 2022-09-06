
import React from 'react';
import { SearchOutlined } from '@mui/icons-material';

const Blog = () => {
  return (
		<div className="mt-80 w-full bg-[#EEF0F2] pb-10">
			<div className="flex justify-center">
				<div className="mt-20 h-48 w-11/12 rounded-3xl bg-[#06113C] shadow-3xl">
					<div className="relative mt-8">
						<div className="absolute top-2 left-36 h-6 w-6 rounded-full border-2 border-[#FF8C32]"></div>
						<div className="bg-white absolute left-1/3 -top-2 ml-36 h-1 w-6 rotate-45 rounded-full border-2"></div>
						<div className="bg-white absolute -top-2 left-1/2 -ml-6 h-1 w-4 rotate-90 rounded-full border-2"></div>
						<div className="bg-white absolute left-1/3 top-2 ml-36 h-1 w-4 rotate-12 rounded-full border-2"></div>
						<p className="text-white text-4xl ml-10 mt-14 pt-2 text-center font-medium">Blog</p>
					</div>
					<div className="absolute left-3/4 ml-24 h-6 w-6 rounded-full border-2 border-[#FF8C32]"></div>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="bg-white -mt-6 flex h-20 w-2/4 items-center rounded-3xl shadow-3xl">
					<SearchOutlined sx={{ fontSize: 50, marginLeft: '25px', color: 'gray' }} />
					<label>Search</label>
				</div>
			</div>
			<div className=" mt-10 h-16 w-full ">
				<ul className="flex items-center justify-center gap-12 text-sm font-medium ">
					<li className="flex h-8 w-20 items-center rounded-xl bg-[#FF8C32] pl-4">All</li>
					<li>Technology</li>
					<li>Science</li>
					<li>Space</li>
					<li>Engineering</li>
					<li>Fashion</li>
					<li>Health</li>
				</ul>
			</div>
			<div className=" mt-6  flex w-full justify-around">
				<div className="flex flex-col gap-4">
					<div className="bg-slate-400 h-52 w-80 rounded-2xl"></div>
					<h6 className="text-base font-medium text-[#FF8C32] ">Health</h6>
					<h6 className="w-80 text-clip font-medium ">
						Scientist Discover The cure of SCD with The help Of A sophisticated Software{' '}
					</h6>
					<p className="w-80 text-clip text-sm ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita eaque veritatis, voluptates
					</p>
					<div className=" flex h-24 w-full items-center gap-2">
						<div className="bg-orange-300 h-16 w-16 rounded-full"></div>
						<div className="flex flex-col">
							<h6 className="text-sm font-semibold ">Oranu Peculiar</h6>
							<h6 className="text-xs font-normal">June 27,2022</h6>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="bg-slate-400 h-52 w-80 rounded-2xl"></div>

					<h6 className="text-base font-medium text-[#FF8C32] ">Engineering</h6>
					<h6 className="w-80 text-clip font-medium ">
						Scientist Discover The cure of SCD with The help Of A sophisticated Software{' '}
					</h6>
					<p className="w-80 text-clip text-sm ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita eaque veritatis, voluptates
					</p>
					<div className=" flex h-24 w-full items-center gap-2">
						<div className="bg-orange-300 h-16 w-16 rounded-full"></div>
						<div className="flex flex-col">
							<h6 className="text-sm font-semibold ">Oranu Peculiar</h6>
							<h6 className="text-xs font-normal">June 27,2022</h6>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="bg-slate-400 h-52 w-80 rounded-2xl"></div>
					<h6 className="text-base font-medium text-[#FF8C32] ">Space</h6>
					<h6 className="w-80 text-clip font-medium ">
						Scientist Discover The cure of SCD with The help Of A sophisticated Software{' '}
					</h6>
					<p className="w-80 text-clip text-sm ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita eaque veritatis, voluptates
					</p>
					<div className=" flex h-24 w-full items-center gap-2">
						<div className="bg-orange-300 h-16 w-16 rounded-full"></div>
						<div className="flex flex-col">
							<h6 className="text-sm font-semibold ">Oranu Peculiar</h6>
							<h6 className="text-xs font-normal">June 27,2022</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;