import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";

function App() {
  const [studentList, setStudentList] = useState([]);
  
  const addStudent = (newStudent) => {
    setStudentList((prevState) => [
      ...prevState,
      { ...newStudent, id: Date.now().toString() },
    ]);
  };

  const deleteStudent = (studentId) => {
    setStudentList((prevStudentList) => {
        return prevStudentList.filter(
          (student) => student.id !== studentId
        )
    }
  )
  }
  useEffect(
    () => {
      const getStudents = async () => {
        try {
          const response = await fetch("http://localhost:3000/studentList")
          const data = await response.json()
          setStudentList(data)
        } catch (error) {
          console.log(error);
        }
      }

      getStudents();

      // return () => console.log("cleanup");
    },
    []
  )

  return (
    <>
      <main>
        <Header
          title={"StudentManager"}
          navElements={["Profile", "Details", "Logout"]}
        />
        <br />
        <StudentForm addStudent={addStudent} />
        <StudentList studentList={studentList} deleteStudent={deleteStudent}/>
      </main>
    </>
  );
}

export default App;