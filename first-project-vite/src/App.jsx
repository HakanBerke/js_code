import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";
import { StudentProvider } from "./contexts/student/StudentContext";

function App() {

  return (
    <>
      <StudentProvider>
        <main>
          <Header
            title={"StudentManager"}
            navElements={["Profile", "Details", "Logout"]}
          />
          <br />
          <StudentForm/>
          <StudentList/>
        </main>
      </StudentProvider>
    </>
  );
}

export default App;