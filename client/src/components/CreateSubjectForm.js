import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "./Title";

const BASE_URL = "http://localhost:5000";

// Define component function
function CreateSubjectForm() {
	// Set up navigation hook
	const navigate = useNavigate();

	// Set up state hook to track subject name
	const [subject, setSubject] = useState({
		subject: ""
	});

	// Handle changes to form input fields
	/* const handleChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		// Update subject state object with new value for specified field
		setSubject(subject => {
			return {
				...subject,
				[name]: value
			};
		});
	}; */

	//handleChange is not necessary when we have only one property
	/* const handleChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		// Update subject state object with new value for specified field
		setSubject(subject => {
			return {
				...subject,
				[name]: value
			};
		});
	}; */

	// Handle form submission
	const handleSubmit = e => {
		e.preventDefault();
		// Clear subject state object after submission
		setSubject({ subject: "" });
		// Call addSubject function to make API request and navigate to subjects page
		addSubject(subject);
	};

	// Make API request to add new subject
	/* const addSubject = async subject => {
		try {
			await fetch(`${BASE_URL}/subjects`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(subject)
			});
			// Navigate to subjects page after successful API request
			navigate("/subjects");
		} catch (err) {
			// Handle errors
			console.log("Oops, something went wrong");
		}
	}; */
	const addSubject = async subject => {
		try {
			const data = {
				subject: {
					name: subject.subject
				}
			};
			await fetch(`${BASE_URL}/subjects`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			});
			// Navigate to subjects page after successful API request
			navigate("/subjects");
		} catch (err) {
			// Handle errors
			console.log("Oops, something went wrong");
		}
	};
	return (
		<>
			<Title />
			<div className="flex flex-col border-opacity-50 justify-center items-center">
				<div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
					<div>
						<h2 className="text-lg tracking-widest mb-5">Create a new subject!</h2>
					</div>
					<div>
						<form onSubmit={handleSubmit}>
							<label className="font-semibold">
								Subject:
								<input
									type="text"
									name="subject"
									className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
									placeholder="Math, history, HMTL, biology..."
									value={subject.subject}
									onChange={e => setSubject({ subject: e.target.value })}
									/* onChange={e => handleChange(e)} */
								/>
								<div>
									<Link to="/subjects">
										<button className="btn btn-sm bg-accent-focus marg mt-10">
											Go to subjects
										</button>
									</Link>
									<button type="submit" className="btn btn-sm bg-accent-focus marg mt-10">
										Submit
									</button>
								</div>
							</label>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
export default CreateSubjectForm;
