import { Link } from "react-router-dom";
import logo from "./logo.png";

function Title() {
  return (
    <>
      <div className="pb-16">
        <div className="navbar bg-base-100 flex items-stretch ">
          <div className="flex-1 flex justify-center mr-auto">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mx-12">
            <Link to="/">
              <img class="h-20" src={logo}></img>
            </Link>
          </div>
          <div className="flex-1 flex justify-center ml-auto">
            <div class="inline-flex">
            <Link to="/login">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Login
              </button>
              </Link>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Sign up
              </button>
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
