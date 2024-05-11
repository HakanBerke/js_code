const StudentCard = ({student, deleteStudent}) => {
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