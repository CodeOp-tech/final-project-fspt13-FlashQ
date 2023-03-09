import { React, useState } from "react";

export default function Timer() {
	const [counter, setCounter] = useState(0);

	//increase counter
	const increase = () => {
		setCounter(count => count + 1);
	};
	//reset counter
	const reset = () => {
		setCounter(0);
	};

	return (
		<div className="counter">
			<h1>Counter</h1>
			<span className="counter__output">{counter}</span>
			<div className="btn__container">
				<button className="control__btn" onClick={increase}>
					Start
				</button>
				<button className="reset" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
}
