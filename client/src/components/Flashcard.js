import React /* , { useEffect, useState }  */ from "react";
import { useParams } from "react-router-dom";
/* import Timer from "./Timer";
import Title from "./Title";
import Game from "./Game"; */

/* const BASE_URL = `http://localhost:5000`; */

function Card(props) {
	const showAnswers = props.showAnswers;
	const { id } = useParams();
	/* const [questions, setQuestions] = useState([]);
	

	useEffect(() => {
		const fetchQuestions = async () => {
			const response = await fetch(`${BASE_URL}/questions?id=${id}`);
			const data = await response.json();
			const questions = data.questions;
			setQuestions(questions);
		};
		fetchQuestions();
	}, []);
 */
	return (
		<>
			<div className="flex flex-col border-opacity-50 justify-center items-center">
				<div className="grid card gap-6 bg-green-200 m-5 p-5 w-4/5 text-justify rounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
					<h1 className="text-3xl text-semibold">What is a function?</h1>
					{showAnswers ? (
						<p className="text-gray-700">-a set of statements that performs a task or calculates a value</p>
					) : null}
				</div>
			</div>
		</>
	);
}

export default Card;

{
	/* class name string int. if counter===0 add my-rotate class */
}
{
	/* <div className="grid card bg-green-200 m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5"> */
}
{
	/* <div className=" p-1  m-1">
            <ul className="grid grid-cols-1 gap-4   ">
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
          </div> */
}
{
	/* </div>{" "} */
}
