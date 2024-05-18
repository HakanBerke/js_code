import { useContext, useEffect } from "react";
import { StudentContext } from "../../../contexts/student/StudentContext";
const StudentCard = ({student}) => {
  // useEffect(
  //   () => {
  //     console.log(`${student.id} mounted`);
  //     return (() => console.log(`${student.id} unmounted`));
  //   },
  //   []
  // );
const {deleteStudent} = useContext(StudentContext)
    return(
        <div className="student-card">
          <span className="btn btn-delete" onClick={() => deleteStudent(student.id)}>X</span>
                <ul>
                  <li>{student.studentName}</li>
                  <li>{student.course}</li>
                  <li>{student.instructor}</li>
                </ul>
              </div>
    )
}

export default StudentCard;