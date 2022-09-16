import gsap from 'gsap';

class UIAnimation {
	fade(target = null, fromVars = {}, toVars = {}) {
		return gsap.fromTo(target, { autoAlpha: 0, ...fromVars, immediateRender: false }, { autoAlpha: 1, ...toVars });
	}

	fadeIn(target = null, vars) {
		return gsap.from(target, { autoAlpha: 0, ...vars, immediateRender: false, ease: 'power.in' });
	}

	animateOnScroll(trigger) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: trigger,
				start: '100px 90%',
				toggleActions: 'play none none none',
				markers: true,
				fastScrollEnd: 3000,
				once: true,
				preventOverlaps: true
			}
		});

		return tl;
	}
}

export default UIAnimation;
