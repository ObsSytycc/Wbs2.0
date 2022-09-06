import React from 'react';
import { Rating } from '@mui/material';

const Reviewsection = () => {
	return (
		<div className=" mt-60 h-96 w-full">
			<h6 className="text-center text-3xl font-semibold">What Our Members Say About Us</h6>
			<div className=" relative flex h-96 w-full justify-around pl-10 pr-10 pt-20">
				<div className="right-0 z-10 h-96 w-80 rounded-r-xl rounded-l-xl bg-white shadow-3xl">
					<div className="flex justify-center pt-8">
						<Rating value={4.5} precision={0.5} readOnly></Rating>
					</div>
					<p className="p-6 text-center  text-sm font-light">
						{
							"I've been a member of this community for over a year and I con say that I've learnt alot from this community"
						}
					</p>
					<div className="flex justify-center">
						<div className="w-1/3 border-b-2 border-[#818181]"></div>
					</div>
					<div className="ml-24 mt-4 h-32 w-32 rounded-full bg-amber-100"></div>
					<p className="mt-4 text-center font-semibold">Oranu Peculiar</p>
					<p className="text-center text-xs font-semibold text-[#FF8C32]">Product Design Lead</p>
				</div>
				<div className="absolute top-16 left-24 z-0 ml-0 h-80 w-72 rounded-tr-xl rounded-tl-xl bg-[#06113C] shadow-3xl"></div>

				<div className="z-10 h-96 w-80 rounded-r-xl rounded-l-xl bg-white shadow-3xl">
					<div className="flex justify-center pt-8">
						<Rating value={5} precision={0.5} readOnly></Rating>
					</div>
					<p className="p-6 text-center  text-sm font-light">
						{
							"I've been a member of this community for over a year and I con say that I've learnt alot from this community"
						}
					</p>
					<div className="flex justify-center">
						<div className="w-1/3 border-b-2 border-[#818181]"></div>
					</div>
					<div className="ml-24 mt-6 h-32 w-32 rounded-full bg-amber-100"></div>
					<p className="mt-4 text-center font-semibold">Bakare Jumobi</p>
					<p className="text-center text-xs font-semibold text-[#FF8C32]">UI/UX Designer</p>
				</div>
				<div className="absolute top-16 z-0 h-80 w-72 rounded-tr-xl rounded-tl-xl bg-[#FF8C32] shadow-3xl"></div>
				<div className="z-10 h-96 w-80 rounded-r-xl rounded-l-xl bg-white shadow-3xl">
					<div className="flex justify-center pt-8">
						<Rating value={4} precision={0.5} readOnly></Rating>
					</div>
					<p className="p-6 text-center  text-sm font-light">
						{
							"I've been a member of this community for over a year and I con say that I've learnt alot from this community"
						}
					</p>
					<div className="flex justify-center">
						<div className="w-1/3 border-b-2 border-[#818181]"></div>
					</div>
					<div className="ml-24 mt-6 h-32 w-32 rounded-full bg-amber-100"></div>
					<p className="mt-4 text-center font-semibold">Okenwa Sarah</p>
					<p className="text-center text-xs font-semibold text-[#FF8C32]">CTO, Sapphire</p>
				</div>
				<div className="absolute top-16 right-24 z-0 mr-0 h-80 w-72 rounded-tr-xl rounded-tl-xl bg-[#06113C] shadow-3xl"></div>
			</div>

			<div className="mt-20 flex h-40 w-full  items-center justify-center gap-4 ">
				<div className="h-10 w-10 rounded-full border-2 border-[#FF8C32]"></div>
				<div className="h-6 w-6 rounded-full border-2 border-[#FF8C32]"></div>
				<div className="h-6 w-6 rounded-full border-2 border-[#FF8C32] bg-[#FF8C32]"></div>
				<div className="h-6 w-6 rounded-full border-2 border-[#FF8C32]"></div>
				<div className="h-6 w-6 rounded-full border-2 border-[#FF8C32]"></div>
				<div className="h-6 w-6 rounded-full border-2 border-[#FF8C32]"></div>
				<div className="h-10 w-10 rounded-full border-2 border-[#FF8C32]"></div>
			</div>
		</div>
	);
};

export default Reviewsection;
