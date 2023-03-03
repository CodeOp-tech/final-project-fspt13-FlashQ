import React, { useState } from "react";

function CreateSubjectForm() {
	// Initialize state with an empty subject object
	const [subject, setSubject] = useState({
		name: ""
	});

	// Handle changes to the input fields
	const handleChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		// Update the state with the new value of the changed field
		setSubject(subject => {
			return {
				...subject,
				[name]: value
			};
		});
	};
	return (
		<>
			<div>
				<h2>Create a subject/topic</h2>
			</div>
			<div>
				<form>
					<label>
						{" "}
						Topic:
						<input type="text" name="name" value={subject.name} onChange={e => handleChange(e)} />
						<div>
							<button type="submit" className="btn btn-sm bg-accent-focus marg mt-10">
								Submit
							</button>
						</div>
					</label>
				</form>
			</div>
		</>
	);
}
export default CreateSubjectForm;
