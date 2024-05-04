import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/shared/header/Header";

function App() {
  const [studentList, setStudentList] = useState([
    {
      studentName: "Barkin Onay Sayin",
      course: "Onay Teknikleri",
      instructor: "Hicran Ertugral",
      id: "001",
    },
    {
      studentName: "Ali Riza Taskiran",
      course: "JavaScript",
      instructor: "Buse Ugras",
      id: "002",
    },
    {
      studentName: "Berkay Turna",
      course: "React",
      instructor: "Orun Durmaz",
      id: "003",
    },
    {
      studentName: "Cenk Kaynak",
      course: "Html Css",
      instructor: "Orkun Durmaz",
      id: "004",
    },
  ]);
  const [studentInput, setStudentInput] = useState({studentName: "", course:"", instructor:""})
  const [studentInputErr, setStudentInputErr] = useState({studentName: false, course: false , instructor: false})

  return (
    <>
      <main>
        <Header  title ={"studentmanager"}  navElements ={["profile", "settings", "log out"]}/>
        <form action="" className="student">
          <div className="input-control">
            <input type="text" 
            placeholder="Student Name"
            value={studentInput.studentName}
            onChange={(event) => setStudentInput({...studentInput, studentName: event.target.value})}
            />
            {studentInputErr.studentName && <p className="student-name-1">enter student name</p>} 
          </div>
          
          <div className="input-control">
            <input type="text" 
            placeholder="Course"
            value={studentInput.course}
            onChange={(event) => setStudentInput({...studentInput, course: event.target.value})} />
            {studentInputErr.course && <p className="student-course-1">enter course</p>}
          </div>
          
          <div className="input-control">
            <input type="text" 
            placeholder="Instructor"
            value={studentInput.instructor}
            onChange={(event) => setStudentInput({...studentInput, instructor: event.target.value})}
             />
            <p className="student-name-1">enter instructor</p>
          </div>
          
          <input type="submit" value="Submit" />
        </form>
        <div className="student-list">
          <h3>Student List</h3>
          <div className="student-card">
          {studentList.map(
            ({ studentName, course, instructor, id }) =>
            (<div className="student-card" key={id}>
              <ul>
                <li>{studentName}</li>
                <li>{course}</li>
                <li>{instructor}</li>
              </ul>
            </div>)
          )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
