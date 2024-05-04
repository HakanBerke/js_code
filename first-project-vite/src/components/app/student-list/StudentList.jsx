import StudentCard from "../student-card/StudentCard"

const StudentList = ({studentList}) => {
    return(
        <div className="student-list-container">
        <div className="student-list">
          {studentList.map(student => {
            return <StudentCard student = {student} key = {student.id} /> 
          })}
        </div>
      </div>
    )
}
export default StudentList;