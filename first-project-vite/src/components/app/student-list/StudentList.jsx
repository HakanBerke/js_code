import StudentCard from "../student-card/StudentCard"

const StudentList = ({studentList, deleteStudent}) => {
    return(
        <div className="student-list-container">
        <div className="student-list">
          {studentList.map(student => {
            return <StudentCard student = {student} deleteStudent={deleteStudent} key = {student.id} /> 
          })}
        </div>
      </div>
    )
}
export default StudentList;