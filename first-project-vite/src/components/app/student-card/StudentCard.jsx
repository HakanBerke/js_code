import propTypes from "prop-types";

const StudentCard = ({student}) => {
    return(
        <div className="student-card">
                <ul>
                  <li>{student.studentName}</li>
                  <li>{student.course}</li>
                  <li>{student.instructor}</li>
                </ul>
              </div>
    )
}

export default StudentCard;