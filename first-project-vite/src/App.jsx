import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";
import { StudentProvider } from "./contexts/student/StudentContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/shared/landing-page/LandingPage";
import StudentListPage from "./pages/app/student/student-list-page/StudentListPage";
import NewStudentPage from "./pages/app/student/new-student-page/NewStudentPage";
import NotFoundPage from "./components/shared/not-found-page/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <StudentProvider>
            <Header />
          <main>
            <br />
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/studentList" element={<StudentListPage/>}></Route>
              <Route path="/studentList/new" element={<NewStudentPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </main>
        </StudentProvider>
      </Router>
    </>
  );
}

export default App;
