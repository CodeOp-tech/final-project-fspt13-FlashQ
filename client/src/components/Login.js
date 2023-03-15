import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleNoButtons from "./TitleNoButtons";



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
	<>
	<TitleNoButtons/>
	
    <div>
      <div>
	  <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card background-color:bg-mustard m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
        <input
          value={name}
          onChange={handleChange}
          name="name"
          type="text"
          className="btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
		  className=" btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
        />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={login}>
          Log in
        </button>
        <div className={`${!error ? "hidden" : ""}`}>
          INCORRECT USERNAME OR PASSWORD.PLEASE TRY AGAIN.
        </div>
       </div>
	   </div>
      </div>
    </div>
	
	</>
  );
}

export default Login;
