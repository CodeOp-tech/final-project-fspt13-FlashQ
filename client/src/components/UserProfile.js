import Title from "./Title";
import Footer from "./Footer";
import React, { useParams } from "react";

export default function UserProfile() {
    //const { name, email, subjects } = useParams();
    //const [userInfo, setUserInfo] = useState();
    return (
        <>
            <Title />
            <section>
                <div className="justify-center">
                    <div
                        className="hero h-full   bg-cover mb-10"
                        /* style={{
                            backgroundImage: `url("https://img.freepik.com/free-photo/smartphone-screen-with-stationery-tools-student-lifestyle_53876-127104.jpg?w=996&t=st=1678796999~exp=1678797599~hmac=9add62e494edbc01993a04c77ae466469423b24483950f93f369de1a68e82003")`,
                        }} */
                    >
                        <div className=" bg-opacity-60 background-color: bg-stone-500"></div>
                        <div className="hero-content text-center">
                            {/* <div className="max-w-lg"></div> */}
                            <div className="flex border-opacity-50 items-center">
                                <div className="flex-col m-10 p-10 w-96 rounded-box place-items-center shadow-xl bg-alga bg-opacity-40  ">
                                    <h2 className="text-lg tracking-widest justify-center mb-5 text-black:color: #000">
                                        My profile
                                    </h2>
                                    <div className="text-left ">
                                        <h3>Name:{}</h3>
                                        <h3>Email address:{}</h3>
                                        <h3>You have {} subjects</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
