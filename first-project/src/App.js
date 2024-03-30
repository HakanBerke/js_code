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

  //error states
  const [studentNameError, setStudentNameError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [instructorError, setInstructorError] = useState(false);

  //her veriyi yeni gösterme 
  const [student, setStudent] = useState([]);
  const [studentList, setstudentList] = useState([
    { studentName: "Hakan Berke", course: "js", instructor: "orkun durmaz", id: "1" },
    { studentName: "barkın sayın", course: "react", instructor: "hicran ertuğral", id: "2" },
    { studentName: "cenk kaynak", course: "grid", instructor: "önder tarım", id: "3" },
    { studentName: "ali rıza", course: "html-css", instructor: "orkun durmaz", id: "4" }])

  return (
    /* JSX */
    <div className="app">
      <h2>Student Manager</h2>
      <form className='student-form'>
        {/* two way binding */}
        <div className="input-control">
          <input
            type="text"
            placeholder='Student Name'
            value={studentNameInput} //input'un degeri state'den gelsin
            onChange={(event) => setStudentNameInput(event.target.value)} //state'i bu inputun degeriyle guncelle
          />
          {/* conditional rendering */}
          {studentNameError && <p className="error input-error">Please enter a valid student name</p>}
          <br /><br />
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder='Course'
            value={courseInput} onChange={(event) => setCourseInput(event.target.value)}
          />
          {courseError && <p className="error input-error">Please enter a valid course</p>}
          <br /><br />
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder='Instructor'
            value={instructorInput}
            onChange={(event) => setInstructorInput(event.target.value)}
          />
          {instructorError && <p className="error input-error">Please enter a valid instructor</p>}
          <br /><br />
        </div>
        <input
          type="submit"
          onClick={
            (event) => {
              event.preventDefault();

              //clear previous errors
              setStudentNameError(false);
              setCourseError(false);
              setInstructorError(false);

              if (!studentNameInput.trim() || !courseInput.trim() || !instructorInput.trim()) {
                !studentNameInput.trim() && setStudentNameError(true);
                !courseInput.trim() && setCourseError(true);
                !instructorInput.trim() && setInstructorError(true);
                //else yerine early return pattern kullanilabilir
                return;
              }
              // else {
              // setStudentName(studentNameInput.trim());
              // setCourse(courseInput.trim());
              // setInstructor(instructorInput.trim());

              //inputlari temizle
              setStudentNameInput("");
              setCourseInput("");
              setInstructorInput("");
              // }
            }
          }
        />
      </form>
      <div className="student-list">
        <h3>Students</h3>
        {studentList.map((student) => (
          <div className="student-card" key={student.id}>
            <ul>
              <li>{student.studentName}</li>
              <li>{student.course}</li>
              <li>{student.instructor}</li>
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default App;