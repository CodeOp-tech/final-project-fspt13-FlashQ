import CreateQuestionForm from "./components/CreateQuestionForm";
import CreateSubjectForm from "./components/CreateSubjectForm";
import QuestionView from "./components/QuestionView";
import SubjectView from "./components/SubjectView";
import Homepage from "./components/Homepage";
// import Title from "./components/Title"; does not work!! whyy? had to add it to each component separately

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//       <CreateQuestionForm />
