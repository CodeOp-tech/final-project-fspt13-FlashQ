import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HOSTNAME = "http://localhost:5000";

function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { name, email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios(`${HOSTNAME}/users/register`, {
        method: "POST",
        data: credentials,
      });

      //store it locally
      localStorage.setItem("token", data.token);
      console.log(data.message, data.token);
      navigate("/subjects") 
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="create your username"
          className="form-control mb-2"
        />
           <input
          value={email}
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="provide an email"
          className="form-control mb-2"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="create a password"
          className="form-control mb-2"
        />
         <Link to="/subjects">
        <button className="btn btn-primary" onClick={login}>
          Register for free
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
