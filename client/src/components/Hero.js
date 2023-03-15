import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section>
            <div className="container">
                <div
                    className="hero h-96 md:h-[500px] overflow-hidden"
                    style={{
                        backgroundImage: `url("https://img.freepik.com/free-photo/smartphone-screen-with-stationery-tools-student-lifestyle_53876-127104.jpg?w=996&t=st=1678796999~exp=1678797599~hmac=9add62e494edbc01993a04c77ae466469423b24483950f93f369de1a68e82003")`,
                    }}
                >
                    <div className="hero-overlay bg-opacity-60 background-color: bg-stone-500"></div>
                    <div className="hero-content text-center text-secondary-content">
                        {/* <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Welcome to the place where you decide which knowledge to put to
                a test.
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Did you know that spaced repetition has been proven to produce
                superior long-term learning? Set your own subjects, ask the
                right questions and get started!
              </p>
              <Link to="/demo">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  Watch a demo
                </button>
              </Link>
            </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
