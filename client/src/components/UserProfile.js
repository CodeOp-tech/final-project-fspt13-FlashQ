import React, { useState } from "react";
import Title from "./Title";
import Footer from "./Footer";

export default function UserProfile() {
    return (
        <>
            <Title />
            <section>
                <div className="justify-center">
                    <div
                        className="hero h-full   bg-cover mb-10"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/free-photo/smartphone-screen-with-stationery-tools-student-lifestyle_53876-127104.jpg?w=996&t=st=1678796999~exp=1678797599~hmac=9add62e494edbc01993a04c77ae466469423b24483950f93f369de1a68e82003")`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60 background-color: bg-stone-500"></div>
                        <div className="hero-content text-center text-secondary-content">
                            {/* <div className="max-w-lg"></div> */}
                            <div className="flex border-opacity-50 items-center">
                                <div className="flex-col m-10 p-10 w-96 rounded-box place-items-center  shadow-xl bg-alga bg-opacity-40  ">
                                    <h2 className="text-lg tracking-widest justify-center  mb-5">My profile</h2>
                                    <div className="text-left">
                                        <h3>Name:{}</h3>
                                        <h3>Lastname:{}</h3>
                                        <h3>Email address:{}</h3>
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
