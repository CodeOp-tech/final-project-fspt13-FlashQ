import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TitleNoButtons from "./TitleNoButtons";
import Footer from "./Footer";
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
            navigate("/subjects");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <TitleNoButtons />
            <section>
                <div className="justify-center">
                    <div
                        className="hero h-full   bg-cover mb-10"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/free-photo/smartphone-screen-with-stationery-tools-student-lifestyle_53876-127104.jpg?w=996&t=st=1678796999~exp=1678797599~hmac=9add62e494edbc01993a04c77ae466469423b24483950f93f369de1a68e82003")`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60 background-color: bg-stone-500"></div>
                        <div className="hero-content text-center ">
                            {/* <div className="max-w-lg"></div> */}
                            <div className=" border-opacity-50 items-center">
                                <div className="grid card m-10 p-10 w-100 rounded-box place-items-center shadow-xl bg-alga bg-opacity-40  ">
                                    <h2 className="text-lg tracking-widest mb-5">Register a new user:</h2>
                                    <div className="flex">
                                        <div className="flex-col place-items-center">
                                            <input
                                                value={name}
                                                onChange={handleChange}
                                                name="name"
                                                type="text"
                                                placeholder="create your username"
                                                className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
                                            />
                                            <input
                                                value={email}
                                                onChange={handleChange}
                                                name="email"
                                                type="text"
                                                placeholder="provide an email"
                                                className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
                                            />
                                            <input
                                                value={password}
                                                onChange={handleChange}
                                                name="password"
                                                type="password"
                                                placeholder="create a password"
                                                className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
                                            />
                                        </div>
                                        <div className="flex">
                                            <button
                                                type="button"
                                                className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                                onClick={login}
                                            >
                                                Register for free
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Register;
