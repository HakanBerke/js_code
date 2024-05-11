import { useState } from "react";

const StudentForm = ({addStudent}) => {

    const [studentInput, setStudentInput] = useState({ studentName: "", course: "", instructor: "" });
    const [studentInputErr, setStudentInputErr] = useState({ studentName: false, course: false, instructor: false });

    const createStudent = (event) => {
        event.preventDefault()
    
        setStudentInputErr({ studentName: false, course: false, instructor: false });
    
        if (studentInput.studentName.trim() && studentInput.course.trim() && studentInput.instructor.trim()) {
          setStudentInput({ studentName: "", course: "", instructor: "" });
          setStudentInputErr({studentName:false, course:false, instructor:false})
          addStudent(studentInput)
        }
        else {
          !studentInput.studentName.trim() && setStudentInputErr(prevStudentInputErr => ({ ...prevStudentInputErr, studentName: true }));
          !studentInput.course.trim() && setStudentInputErr(prevStudentInputErr => ({ ...prevStudentInputErr, course: true }));
          !studentInput.instructor.trim() && setStudentInputErr(prevStudentInputErr => ({ ...prevStudentInputErr, instructor: true }));
        }
        setStudentInput({studentName:"", course:"", instructor:""})
      }
      return(<form action="" className="student-form">
        <div className="input-control">
          <input
            type="text"
            placeholder="Student Name"
            value={studentInput.studentName}
            onChange={(event) => setStudentInput(prevStudentInput => ({ ...prevStudentInput, studentName: event.target.value }))}
          />
          {studentInputErr.studentName && <p className="input-error">Enter a valid student name!</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="Course"
            value={studentInput.course}
            onChange={(event) => setStudentInput(prevStudentInput => ({ ...prevStudentInput, course: event.target.value }))}
          />
          {studentInputErr.course && <p className="input-error">Enter a valid course!</p>}
        </div>
        <div className="input-control">
          <input
            type="text"
            placeholder="Instructor"
            value={studentInput.instructor}
            onChange={(event) => setStudentInput(prevStudentInput => ({ ...prevStudentInput, instructor: event.target.value }))}
          />
          {studentInputErr.instructor && <p className="input-error">Enter a valid instructor!</p>}
        </div>
        <input type="submit" value="Add Student" onClick={createStudent} />
      </form>)
    
}
export default StudentForm;