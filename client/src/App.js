import CreateQuestionForm from "./components/CreateQuestionForm";
import CreateSubjectForm from "./components/CreateSubjectForm";
import QuestionView from "./components/QuestionView";
import SubjectView from "./components/SubjectView";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      hello
      <CreateSubjectForm />
      <SubjectView />
      <CreateQuestionForm />
      <QuestionView />
      <Timer />
    </div>
  );
}

export default App;

