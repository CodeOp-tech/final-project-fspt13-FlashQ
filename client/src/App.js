import CreateQuestionForm from "./components/CreateQuestionForm";
import CreateSubjectForm from "./components/CreateSubjectForm";
import QuestionView from "./components/QuestionView";
import SubjectView from "./components/SubjectView";

function App() {
  return (
    <div>
      <CreateSubjectForm />
      <SubjectView />
      <CreateQuestionForm />
      <QuestionView />
    </div>
  );
}

export default App;
