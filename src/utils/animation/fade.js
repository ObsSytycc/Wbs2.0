import gsap from 'gsap';

const fadeIn = (target = null, toVars = {}, fromVars = {}) => {
	return gsap.fromTo(target, { autoAlpha: 0, ...fromVars }, { autoAlpha: 1, ...toVars });
};

export const fade = { in: fadeIn };
