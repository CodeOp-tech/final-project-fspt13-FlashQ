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
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
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
