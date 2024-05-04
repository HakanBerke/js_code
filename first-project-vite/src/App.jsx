import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";

function App() {
  const [studentList, setStudentList] = useState(
    [
      { studentName: "Barkin Onay Sayin", course: "Onay Teknikleri", instructor: "Hicran Ertugral", id: "001" },
      { studentName: "Ali Riza Taskiran", course: "JavaScript", instructor: "Buse Ugras", id: "002" },
      { studentName: "Berkay Turna", course: "React", instructor: "Orun Durmaz", id: "003" },
      { studentName: "Cenk Kaynak", course: "Html Css", instructor: "Orkun Durmaz", id: "004" },
    ]
  )
  const addStudent = (newStudent) => {
    setStudentList([...studentList, newStudent])
  }
  return (
    <>
      <main>
      <Header title={"StudentManager"} navElements={["Profile", "Details", "Logout"]} />
      <br />
      <StudentForm addStudent={addStudent} />
      <StudentList studentList={studentList} />
    </main>
    </>
  );
}

export default App;
