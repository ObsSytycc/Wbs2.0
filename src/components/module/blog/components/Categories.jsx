import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { animation } from '../../../../utils';
import CategoryItem from './CategoryItem';

const Categories = ({ categories = [], onclick = () => null, active = '' }) => {
	//const [trigger] = useAnimateOnScroll(animateBlogActions);
	//const masterTl = useRef();
	//const trigger = useRef();
	const revealRefs = useRef([]);
	revealRefs.current = [];

	/*useEffect(() => {
		masterTl.current = animation.animateOnScroll(trigger.current);

		masterTl.current.add(animateBlogActions());
		revealRefs.current.forEach((el) => {
			console.log('el', el);
		});
	}, []);*/

	const addToRefs = (el) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};

	/*function animateBlogActions() {
		const tl = gsap.timeline();

		revealRefs.current.forEach((el) => {
			console.log(el);
			tl.add(animation.fade(el, { yPercent: 100 }));
		});

		return tl;
	}*/

	return (
		<ul className="category-list mx-auto mb-16 flex w-full flex-wrap justify-between gap-2 overflow-y-hidden py-4 lg:w-[80%]">
			{categories.map((category, indx) => {
				const { name, id } = category;
				return <CategoryItem key={id} id={id} active={active} value={name} onclick={onclick} addRefs={addToRefs} />;
			})}
		</ul>
	);
};

Categories.propTypes = {
	categories: PropTypes.array,
	onclick: PropTypes.func,
	active: PropTypes.string
};

export default Categories;
