import CreateQuestionForm from "./components/CreateQuestionForm";
import CreateSubjectForm from "./components/CreateSubjectForm";
import QuestionView from "./components/QuestionView";
import SubjectView from "./components/SubjectView";
<<<<<<< HEAD
import Homepage from "./components/Homepage";
import Flashcard from "./components/Flashcard";
// import Title from "./components/Title"; does not work!! whyy? had to add it to each component separately
=======
import Timer from "./components/Timer";
>>>>>>> 3385c62fcb71e5dfe7778568c7ae8afcc6c6a0d3

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<<<<<<< HEAD
    <>
      {/* <div>
        <Title />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-subject" element={<CreateSubjectForm />} />
          <Route path="/subjects" element={<SubjectView />} />
          <Route path="/subjects/:id/questions" element={<QuestionView />} />
          <Route
            path="/subjects/:id/create-question"
            element={<CreateQuestionForm />}
          />
          <Route path="/subjects/:id/questions/:id" element={<Flashcard />} />
        </Routes>
      </BrowserRouter>
    </>
=======
    <div>
      hello
      <CreateSubjectForm />
      <SubjectView />
      <CreateQuestionForm />
      <QuestionView />
      <Timer />
    </div>
>>>>>>> 3385c62fcb71e5dfe7778568c7ae8afcc6c6a0d3
  );
}

export default App;

<<<<<<< HEAD
//       <CreateQuestionForm />
=======
>>>>>>> 3385c62fcb71e5dfe7778568c7ae8afcc6c6a0d3
