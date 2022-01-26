import { useEffect, useRef, useState } from 'react';

const useClock = (time) => {
	const [isPause, setIsPause] = useState(false);
	const [clock, setClock] = useState(time);
	const ref = useRef();

	const set = (newTime) => setClock(newTime);
	const reset = () => {
		setClock(time);
		setIsPause(false);
	};
	const pause = () => setIsPause(true);
	const play = () => setIsPause(false);

	useEffect(() => {
		if (!isPause && clock > 0) {
			ref.current = setTimeout(() => setClock(clock - 1), 1000);
		}

		return () => clearTimeout(ref.current);
	}, [clock, isPause]);

	return { clock, set, reset, pause, play, isOver: clock === 0 };
};

export default useClock;
