import './App.css';
import { useState } from 'react';

function App() {

  //data state
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");

  //input state
  const [studentNameInput, setStudentNameInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [instructorInput, setInstructorInput] = useState("");
  return (
    /* JSX */
    <div className="app">
      <h2>Student Manager</h2>
      <form>
        {/* two way binding */}
        <input type="text" placeholder='Student Name' value={studentNameInput} onChange={(event) => setStudentNameInput(event.target.value)} />
        <br /><br />
        <input type="text" placeholder='Course' value={courseInput} onChange={(event) => setCourseInput(event.target.value)} />
        <br /><br />
        <input type="text" placeholder='Instructor' value={instructorInput} onChange={(event) => setInstructorInput(event.target.value)} />
        <br /><br />
        <input
          type="submit"
          onClick={
            (event) => {
              event.preventDefault();
              if (studentNameInput.trim() === "" || courseInput.trim() === "" || instructorInput.trim() === "") {
                alert("Please fill all the fields");                
              }else {
                setStudentName(studentNameInput.trim());
                setCourse(courseInput.trim());
                setInstructor(instructorInput.trim());

                //inputlari temizle
                setStudentNameInput("");
                setCourseInput("");
                setInstructorInput("");
              }
            }
          }
        />
      </form>
      <div className="student-list">
        <h3>Students</h3>
        <div className="student-card">
          <ul>
            <li>{studentName}</li>
            <li>{course}</li>
            <li>{instructor}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;