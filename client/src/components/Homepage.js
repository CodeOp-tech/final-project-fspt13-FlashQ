import { Link, useParams } from "react-router-dom";
import Title from "./Title";
function Homepage() {
  return (
    <>
      <Title />{" "}
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-10 p-10 w-3/5 text-justifyrounded-box place-items-center shadow-xl ">
          <p className="text-justify w-2/4 tracking-wide ">
            Welcome to the place where you decide which knowledge to put to a
            test..
            <br /> Did you know that{" "}
            <span className="font-semibold">spaced repetition </span>has been
            proven to produce superior long-term learning?
            <br /> Set your own subjects, ask the right questions and get
            started!
          </p>

          <div>
            <Link to="/subjects">
              <button className="btn btn-sm bg-accent-focus marg mt-10">
                Get started!
              </button>
            </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default Homepage;
