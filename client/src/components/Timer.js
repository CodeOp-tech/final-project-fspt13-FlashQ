import { useEffect, useState } from "react";

export default function Timer(props) {
	const onTimerEnd = props.onTimerEnd;
	const [counter, setCounter] = useState(3);
	useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		if (counter === 0) {
			onTimerEnd();
		}
		return () => clearInterval(timer);
	}, [counter]);

	return (
		<div className="Timer">
			<p>{counter}</p>

			{/* <button
        onClick={counter}
        type="start"
        className="btn btn-sm bg-accent-focus marg mt-10"
      >
        Start
      </button> */}
		</div>
	);
}

/* if we need the button
export default function Timer() {
	const [counter, setCounter] = useState(30);
	const [counterRunning, setCounterRunning] = useState(false);
	useEffect(() => {
		if (counterRunning) {
			const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
			return () => clearInterval(timer);
		}
	}, [counterRunning, counter]);

	return (
		<div className="Timer">
			<p>{counter}</p>

			<button
				onClick={() => setCounterRunning(true)}
				type="start"
				className="btn btn-sm bg-accent-focus marg mt-10"
			>
				Start
			</button>
		</div>
	); */
