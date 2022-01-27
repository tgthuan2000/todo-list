import { useEffect, useState } from 'react';

const useClock = (time) => {
	const [isPause, setIsPause] = useState(false);
	const [clock, setClock] = useState(time);

	const reset = () => {
		setClock(time);
		setIsPause(false);
	};
	const pause = () => setIsPause(true);
	const play = () => setIsPause(false);

	useEffect(() => {
		let timeout = null;
		if (!isPause && clock > 0) {
			timeout = setTimeout(() => setClock(clock - 1), 1000);
		}

		return () => timeout && clearTimeout(timeout);
	}, [clock, isPause]);

	return { clock, setClock, reset, pause, play, isOver: clock === 0 };
};

export default useClock;
