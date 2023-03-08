import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "./Title";

const BASE_URL = `http://localhost:5000`;

function QuestionView(props) {
	const [questions, setQuestions] = useState([
		// { question: "What is a string?", answer: "a sequence of characters" },
		// { question: "What is a string?", answer: "a sequence of characters" },
		// { question: "What is a string?", answer: "a sequence of characters" },
		// { question: "What is a string?", answer: "a sequence of characters" },
	]);
	const [questionsLength] = useState([questions.length]);
	// //based on Luana´s feautre extension
	// const id = props.subject.id;
	// const fetchtQuestions = async (subjectId) => {
	//   const BASE_URL = `http://localhost:5000/subjects/${subjectId}`;
	//   const response = await fetch(BASE_URL, {
	//     method: "GET",
	//   });
	//   const questions = await response.json();
	//   setQuestions(questions);
	// };

	// useEffect(() => {
	//   fetchtQuestions(id);
	// }, [id]);
	console.log(questionsLength);
	//const { subject } = useParams(); // I want to get the input of subject from the API to change the tile dynamically
	const { id } = useParams();

	useEffect(() => {
		const fetchQuestions = async () => {
			const response = await fetch(`${BASE_URL}/questions?id=${id}`);
			// const response = await fetch(`${BASE_URL}/subjects/${id}/questions`); also not working

			const data = await response.json();
			const questions = data.questions;
			setQuestions(questions);
		};
		fetchQuestions();
	}, []);

	return (
		<>
			<Title />
			<div className="flex flex-col border-opacity-50 justify-center items-center">
				<div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
					<div>
						<h2 className="text-lg tracking-widest mb-5">Questions in {id}:</h2>
					</div>
					<div className=" p-1  m-1">
						<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
							{questions.map((question, { id }) => (
								<div className="card shadow">
									<div className="card-body  object-scale-down sm:object-contain bg-red-200 rounded-box ">
										<li key={question.id} onSubmit={props.addQuestion}>
											<p className="card-title ">{question.question}</p>

											<p>-{question.answer}</p>
										</li>
									</div>
								</div>
							))}
						</ul>
					</div>
					<div className="btn-group grid grid-rows-3 rounded-md shadow-sm sm:inline-flex ">
						<Link to={`/subjects/${id}/create-question`}>
							<button className="btn btn-sm bg-accent-focus marg mt-0 sm:mt-10">
								Add more questions
							</button>
						</Link>
						<Link to="/subjects">
							<button className="btn btn-sm bg-accent-focus marg m-0 sm:mt-10">Go to subjects</button>
						</Link>
						<Link to="/subjects/:id/questions/:id">
							<button className="btn btn-sm bg-accent-focus marg m-0 sm:mt-10">Start learning </button>
						</Link>
						{/* <p>another length:{questionsLength}</p>
            {`here is the length: ${console.log(questionsLength.length)}`} */}
					</div>
				</div>{" "}
			</div>
		</>
	);
}
export default QuestionView;
