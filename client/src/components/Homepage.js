import { Link } from "react-router-dom";
import Title from "./Title";
function Homepage() {
  return (
    <>
      <Title />{" "}
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card m-5 p-5 w-4/5 text-justifyrounded-box place-items-center shadow-xl object-scale-down sm:object-contain sm:m-10 sm:p-10 sm:w-3/5">
          <p className="text-justify w-3/4 tracking-wide mt-4 sm:w-2/4">
            Welcome to the place where you decide which knowledge to put to a
            test.
            <br /> Did you know that{" "}
            <span className="font-semibold">spaced repetition </span>has been
            proven to produce superior long-term learning?
            <br /> Set your own subjects, ask the right questions and get
            started!
          </p>

          <div>
            <Link to="/demo">
              <button className="btn btn-sm bg-accent-focus marg mt-10">
                Web Demo
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-sm bg-accent-focus marg ml-5 mt-10">
                Log in
              </button>
            </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default Homepage;
