import React from 'react';
import pattern from '../../../../assets/png/pattern.png';

const Mentorship = () => {
	return (
		<div>
			<div className="mb-10 flex h-full w-full  gap-2">
				<div className="relative flex h-96 w-full flex-1 flex-col justify-between">
					<div className="m-8 flex flex-col gap-10">
						<h6 className="text-4xl font-semibold">Mentorship</h6>
						<p className=" absolute top-28 left-8 right-52 text-justify text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni repellendus cumque nesciunt fugiat,
							deserunt ducimus, ipsum voluptatem odio harum accusantium rem? At quidem omnis debitis cupiditate nam
							tempore eos?
						</p>
						<img className="absolute top-48 -right-16 z-10 w-32 object-contain " src={pattern} alt="pattern" />
					</div>
					<div className="z-10 -mr-20 ml-8 flex h-20 items-center justify-around border-2 border-slate-500 bg-[#06113C] p-10 shadow-2xl">
						<div>
							<h6 className="text-center text-2xl text-[#FF8C32]">2017</h6>
							<p className="text-sm text-white">Founded</p>
						</div>
						<div>
							<h6 className="text-center text-2xl text-[#FF8C32]">1500</h6>
							<p className="text-sm text-white">Members</p>
						</div>
						<div>
							<h6 className="text-center text-2xl text-[#FF8C32]">80%</h6>
							<p className="text-sm text-white">Hiring Rate</p>
						</div>
					</div>
				</div>
				<div className="relative z-0 w-full flex-1">
					<img className="absolute -top-6 left-3/4 mr-8 w-32 object-contain " src={pattern} alt="pattern" />
					<div className="mr-22 h-full w-11/12 rounded-tr-[214px] rounded-br-[40px] bg-slate-600 shadow-3xl"></div>
				</div>
			</div>
			<div className="mb-10 -mt-8 flex h-10 w-full items-center  justify-center gap-3">
				<div className="h-3 w-9 rounded-full bg-[#FF8C32] shadow-3xl"></div>
				<div className="h-3 w-4 rounded-full bg-white shadow-3xl"></div>
				<div className="h-3 w-4 rounded-full bg-white shadow-3xl"></div>
			</div>
		</div>
	);
};

export default Mentorship;
