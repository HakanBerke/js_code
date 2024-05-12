import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";
import axios from "axios";
import useStudent from "./hooks/student/useStudent";

function App() {
  const {addStudent, deleteStudent, getStudents, studentList} = useStudent()
  
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <main>
        <Header
          title={"StudentManager"}
          navElements={["Profile", "Details", "Logout"]}
        />
        <br />
        <StudentForm addStudent={addStudent} />
        <StudentList studentList={studentList} deleteStudent={deleteStudent} />
      </main>
    </>
  );
}

export default App;
