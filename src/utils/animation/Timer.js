class Timer {
	constructor() {
		this.requestAnimationId = 0;
	}

	setTimer(callback = () => null, interval = 500) {
		const totalInterval = performance.now() + interval;

		const start = () => {
			const now = performance.now();

			this.requestId = requestAnimationFrame(start);

			if (totalInterval <= now) {
				callback();
				// Stop the timer
				cancelAnimationFrame(this.requestAnimationId);
			}
		};
		// Start the timer
		start();
	}

	get requestId() {
		return this.requestAnimationId;
	}

	set requestId(id) {
		this.requestAnimationId = id;
	}
}

export default Timer;
