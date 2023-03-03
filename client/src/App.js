import CreateQuestionForm from "./components/CreateQuestionForm";
import CreateSubjectForm from "./components/CreateSubjectForm";
import QuestionView from "./components/QuestionView";
import SubjectView from "./components/SubjectView";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-2xl text-center mt-10 mb-10">FlashQ</h1>

        <div>
          <CreateSubjectForm />
          <SubjectView />
          <CreateQuestionForm />
          <QuestionView />
        </div>
      </div>
    </>
  );
}

export default App;
