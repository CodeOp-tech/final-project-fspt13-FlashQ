import Title from "./Title";

export default function GameOver(currentQuestionIndex, questions) {
	return (
		<>
			<div className="flex flex-col border-opacity-50 justify-center items-center">
				<div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
					<h2>GAME OVER</h2>
					<div>
						<h3>{questions.length - 1}</h3> {console.log(questions.length)}
						<h3>{currentQuestionIndex.Number}</h3>
						{console.log(currentQuestionIndex)}
					</div>
				</div>
			</div>
		</>
	);
}
