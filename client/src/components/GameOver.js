import Title from "./Title";

export default function GameOver(props) {
    return (
        <>
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
                                    <h2 className="text-lg font-bold tracking-widest m-10 mb-5">GREAT JOB!</h2>
                                    <div>
                                        <h3
                                            className="text-lg
"
                                        >
                                            You worked on {props.questionsPlayed} flashcards
                                        </h3>
                                        <h3 className="mt-6">Keep up the good work ⚡</h3>
                                        {/* {console.log(currentQuestionIndex)} */}
                                        {/* <h3>{currentQuestionIndex.Number}</h3>
                                        {console.log(currentQuestionIndex)} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
