import CreateQuestionForm from "./components/CreateQuestionForm";
import CreateSubjectForm from "./components/CreateSubjectForm";
import QuestionView from "./components/QuestionView";
import SubjectView from "./components/SubjectView";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import GameOver from "./components/GameOver";
import UserProfile from "./components/UserProfile";
import WebDemo from "./components/WebDemo";
import { useParams } from "react-router-dom";

// import Title from "./components/Title"; does not work!! whyy? had to add it to each component separately

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
function App() {
  const { id } = useParams();
  return (
    <>
      {/* <body className="bg-aquamarine"> */}
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
          <Route path="/subjects/:subjectId" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<WebDemo />} />

          <Route path="/gameover" element={<GameOver />} />
          <Route path="/my-profile" element={<UserProfile />} />
          {/* <Route path={`/subjects/${id}`} element={<Game />} /> */}
        </Routes>
      </BrowserRouter>
      {/* </body> */}
    </>
  );
}

export default App;

//       <CreateQuestionForm />
/*
took this part out of manifest.json:
,
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
*/
