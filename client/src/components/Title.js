import { useState } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./logo.png";




const BASE_URL = "http://localhost:5000";

function Title() {
  //   const [navbarDrop, setNavbarDrop] = useState([]);
  //   const handleClick = (e) => {
  //     setNavbarDrop(true);
  //   };
  return (
    <>
      <div className="pb-16">
        <div className="navbar bg-base-100 flex object-contain md:object-scale-down ">
          <div className="flex-1 flex justify-center mr-auto">
            {" "}
            <div className="dropdown ">
              <label tabIndex={0} className="btn m-0 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="inline ">
                  <Link to="/my-profile">
                    <button>My Profile</button>
                  </Link>
                </li>
                <li>
                  <Link to="/subjects">
                    <button>My Subjects</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-12 ">
            <Link to="/">
              <img className=" h-20 object-contain  " src={logo}></img>
            </Link>
          </div>
          <div className="flex-1 flex justify-center ml-auto">
            <div className="inline-flex">
              <Link to="/login">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                  Login
                </button>
              </Link>
              <Link to="/register">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Sign up
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Title;

{
  /* <div>
          <h1 className="text-2xl text-center mt-10 mb-10">FlashQ</h1>;
        </div> */
}
