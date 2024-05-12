import { useEffect } from "react";
const StudentCard = ({student, deleteStudent}) => {
  // useEffect(
  //   () => {
  //     console.log(`${student.id} mounted`);
  //     return (() => console.log(`${student.id} unmounted`));
  //   },
  //   []
  // );

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