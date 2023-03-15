import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HOSTNAME = "http://localhost:5000";

function Login() {
	const [credentials, setCredentials] = useState({
		name: "",
		password: ""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const { name, password } = credentials;

	const handleChange = e => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const login = async () => {
		//setError(false);
		try {
			const { data } = await axios(`${HOSTNAME}/users/login`, {
				method: "POST",
				data: credentials
			});

			//store it locally
			localStorage.setItem("token", data.token);
			console.log(data.message, data.token);
			navigate("/subjects");
		} catch (error) {
			console.log(error.response);
			setError(error.response.data.message);
			//setError (true);
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
	};

	return (
		<div>
			{error && <div className="alert alert-danger">{error}</div>}
			<div>
				<input value={name} onChange={handleChange} name="name" type="text" className="form-control mb-2" />
				<input
					value={password}
					onChange={handleChange}
					name="password"
					type="password"
					className="form-control mb-2"
				/>
				<button className="btn btn-primary" onClick={login}>
					Log in
				</button>
				<div className={`${!error ? "hidden" : ""}`}>INCORRECT USERNAME OR PASSWORD.PLEASE TRY AGAIN.</div>
				<button className="btn btn-outline-dark ml-2" onClick={logout}>
					Log out
				</button>
			</div>
		</div>
	);
}

export default Login;
