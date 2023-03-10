import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import Title from "./Title";
import Flashcard from "./Flashcard";

const BASE_URL = `http://localhost:5000`;
//look into use timer hook
//creating a new timer, so one is responsible for the questions and the other for the answers
/*
starting from the timer
when the page loads we get the question
after 3 seconds get the answer
if counter === 0 -> show answer */
/*
create a new const timerAnswer, setTimerAnswer
when timerAswer === 0 -> i++ next question 
restart the timer 
*/

function Game() {
	const [questions, setQuestions] = useState([]); // Declare state for questions and setQuestions
	const [showAnswers, setShowAnswers] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Declare state for currentQuestionIndex and setCurrentQuestionIndex to update the index of the current question
	const [isTimerRunning, setIsTimerRunning] = useState(false); // Declare state for isTimerRunning and setIsTimerRunning to update the status of the timer
	const { id } = useParams();
	useEffect(() => {
		const fetchQuestions = async () => {
			const response = await fetch(`${BASE_URL}/questions?id=${id}`); // Fetch questions data based on the id prop passed to the Game component
			const data = await response.json(); // Convert response to JSON
			const questions = data.questions; // Get questions data from the response
			setQuestions(questions); // Update questions state with fetched questions data
		};
		fetchQuestions(); // Call fetchQuestions function
	}, []);

	const handleStart = () => {
		setIsTimerRunning(true); // Set isTimerRunning state to true to start the timer
	};

	const handleNextQuestion = () => {
		console.log("i am here");
		setCurrentQuestionIndex(index => index + 1); // Update the index of the current question by incrementing it by 1
	};
	const currentQuestion = questions[currentQuestionIndex]; // Get the current question based on the currentQuestionIndex state
	console.log({ currentQuestionIndex, currentQuestion });

	return (
		<>
			<Title />
			<Timer
				isRunning={isTimerRunning}
				onTimerEnd={() => {
					setShowAnswers(true);
				}}
			/>{" "}
			{/* Render the Timer component with isRunning and onTimerEnd props */}
			{currentQuestion && ( // Conditionally render the Flashcard component if there is a current question
				<Flashcard
					question={currentQuestion.question} // Pass the current question to the Flashcard component as a prop
					answer={currentQuestion.answer} // Pass the current answer to the Flashcard component as a prop
					onFlip={() => setIsTimerRunning(false)} // Set isTimerRunning state to false when the Flashcard is flipped over
					showAnswers={showAnswers}
				/>
			)}
			{isTimerRunning || ( // Conditionally render the Start button if the timer is not running
				<button onClick={handleStart} type="button">
					Start
				</button>
			)}
		</>
	);
}
/* function Flashcard() {
	const { id } = useParams(); // Get the id parameter from the URL using the useParams hook

	return <Game />; // Render the Game component with the id parameter passed as a prop
} */

export default Game;
