import React, { Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; //useNavigate not added yet
import Title from "./Title";
const BASE_URL = "http://localhost:5000";

// This component is responsible for rendering a form for creating a new question
// Define the CreateQuestionForm functional component that takes an onSubmit function as a prop
function CreateQuestionForm() {
    // Call the "useNavigate" hook to get a reference to the navigation object
    const navigate = useNavigate();
    const [error, setError] = useState("");
    let [response, setResponse] = useState("");

    // Call the "useState" hook to define the "question" state variable and the "setQuestion" function that updates it
    const [question, setQuestion] = useState([
        {
            question: "",
            answer: "",
        },
    ]);
    console.log("this is the question", question);
    const addInputField = () => {
        setQuestion([
            ...question, //adding the information that I already have
            {
                //creating a new object to add more questions and answers
                question: "",
                answer: "",
            },
        ]);
    };

    // Call the "useParams" hook to get the "id" parameter from the URL
    const { id } = useParams();

    // Define the "handleInputChange" function that updates the "question" state variable whenever a form input is changed
    /* const handleInputChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		setQuestion(question => {
			return {
				...question,
				[name]: value
			};
		});
	}; */
    const onQuestionChange = (index) => (event) => {
        const value = event.target.value;
        setQuestion(
            question.map((input, inputIndex) =>
                index === inputIndex
                    ? {
                          question: value,
                          answer: question[index].answer,
                      }
                    : input,
            ),
        );
    };

    const onAnswerChange = (index) => (event) => {
        const value = event.target.value;
        setQuestion(
            question.map((input, inputIndex) =>
                index === inputIndex
                    ? {
                          question: question[index].question,
                          answer: value,
                      }
                    : input,
            ),
        );
    };

    // Define the "handleSubmit" function that submits the form data to the server
    /* const handleSubmit = e => {
		e.preventDefault();
		setQuestion({
			question: "",
			answer: ""
		});
		addQuestion(question);
	}; */
    const handleSubmit = (event) => {
        event.preventDefault(); //prevents from refreshing
        const questionsAndAnswers = question.map((input) => ({
            question: input.question,
            answer: input.answer,
        }));
        console.log("Create question form", questionsAndAnswers);
        addQuestion(questionsAndAnswers) //sending the input info to the back end
            //the back end is gonna return an answer with the listId (used on post back end)
            .then((fetchResponse) => {
                //the api returns the id that it's created
                console.log(fetchResponse.subject_id);
                setResponse(fetchResponse.subject_id);
            })
            .catch((error) => {
                setError(`List was not created: ${error}`); //in case of error returns it
            });
        setQuestion([
            {
                question: "",
                answer: "",
            },
        ]);
    };

    // Define the "addQuestion" function that sends a POST request to the server to add a new question to the database
    const addQuestion = async (questionsAndAnswers) => {
        try {
            await fetch(`${BASE_URL}/questions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subject_id: id,
                    questions: questionsAndAnswers,
                }),
            });
            //redirecting the user to a page that displays a list of questions for a specific subject based on the id parameter in the URL.
            navigate(`/subjects/${id}/questions`);
        } catch (err) {
            setError(`Question was not created: ${err.message}`);
        }
    };

    return (
        <>
            <Title />
            <div className="flex flex-col border-opacity-50 justify-center items-center">
                <div className="grid card bg-yellow m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
                    <div className="btnform-control w-full max-w-xs">
                        <h2 className="text-lg tracking-widest mb-5">Add questions in subject {id}:</h2>
                    </div>
                    <div className="btncard-body">
                        <form onSubmit={handleSubmit}>
                            <section>
                                {/* using map to loop through my inputs */}
                                {question.map((input, index) => {
                                    return (
                                        /* fragment does nothing, but it's necessary because i'm returning more than one thing just holds the key */
                                        <Fragment key={index}>
                                            <div>
                                                <label className="btnlabel font-semibold">
                                                    Question:
                                                    <input
                                                        type="text"
                                                        name="question"
                                                        className=" btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
                                                        value={input.question}
                                                        onChange={onQuestionChange(index)}
                                                        placeholder={`Question ${index + 1}`}
                                                    />
                                                </label>
                                            </div>
                                            {/* <br /> */}
                                            <div>
                                                <label className="btnlabel font-semibold">
                                                    Answer:
                                                    <input
                                                        type="text"
                                                        name="answer"
                                                        className=" btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
                                                        value={input.answer}
                                                        onChange={onAnswerChange(index)}
                                                        placeholder={`Answer ${index + 1}`}
                                                    />
                                                </label>
                                            </div>
                                        </Fragment>
                                    );
                                })}
                            </section>
                            <div>
                                <button
                                    onClick={addInputField}
                                    type="button"
                                    className=" btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                >
                                    Add more questions
                                </button>
                                <button className=" btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                    Back {/*not sure why this works but it goes back to the questions*/}
                                </button>{" "}
                                {/* <button className="btn btn-sm bg-accent-focus marg mt-10">
                  Add more questions
                </button> */}
                                <button
                                    type="submit"
                                    className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CreateQuestionForm;
