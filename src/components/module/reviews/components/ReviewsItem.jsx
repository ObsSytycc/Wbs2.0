import React from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({ id = '', r_rating = 0, r_message = '', r_details = {} }) => {
	return (
		<article
			id={`reviews-${id}`}
			className="relative w-[100%] rounded-r-xl rounded-l-xl bg-white py-16 px-6 shadow-3xl"
		>
			<div
				className="absolute -top-[20px] left-0 flex w-full justify-center overflow-hidden rounded-[20px]"
				style={{ zIndex: -1 }}
			>
				<span className="mx-auto inline-block h-10 w-[95%] rounded-[20px] bg-primary"></span>
			</div>
			<div>
				<div className="flex items-center justify-center gap-2">
					{Array.from(Array(r_rating), (_, indx) => {
						return (
							<svg key={indx} fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
								<path
									d="M28 10.85c0 .26-.146.542-.438.848l-6.108 6.245 1.447 8.822c.012.082.017.2.017.353 0 .247-.059.456-.176.626a.585.585 0 0 1-.514.256c-.213 0-.437-.07-.673-.212L14 23.624l-7.555 4.164c-.247.141-.471.212-.673.212-.236 0-.413-.085-.53-.256a1.076 1.076 0 0 1-.177-.626c0-.07.011-.188.034-.353l1.447-8.822L.42 11.697c-.28-.317-.421-.6-.421-.846 0-.436.314-.706.942-.812L9.39 8.751 13.176.723C13.388.241 13.663 0 14 0c.336 0 .611.241.825.723l3.786 8.028 8.447 1.288c.628.106.942.377.942.812Z"
									fill="#FAC91E"
								/>
							</svg>
						);
					})}
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="py-6 text-center  text-sm font-light">{r_message}</p>
					<div className="w-1/3 border-b-2 border-[#818181]"></div>
				</div>
				<div className="mx-auto mt-6 w-32 rounded-full bg-amber-100">
					<img src={r_details.image} className="h-32" alt="" />
				</div>
				<p className="mt-4 text-center text-base font-normal">{r_details.codeName}</p>
				<small className="block text-center text-sm font-normal text-accent">{r_details.role}</small>
			</div>
		</article>
	);
};

ReviewsItem.propTypes = {
	r_rating: PropTypes.number,
	r_message: PropTypes.string,
	r_details: PropTypes.object,
	id: PropTypes.string
};

export default ReviewsItem;
