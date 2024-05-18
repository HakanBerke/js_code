import axios from "axios";
import { useState } from "react";

const useStudent = () => {
    const [studentList, setStudentList] = useState([]);
    
  const addStudent = async (newStudent) => {
    const res = await axios.post(
      "http://localhost:3000/studentList",
      newStudent
    );
    setStudentList((prevState) => [...prevState, res.data]);
  };

  const deleteStudent = async (studentId) => {
    const resDel = await axios.delete(
      `http://localhost:3000/studentList/${studentId}`
    );
    setStudentList((prevStudentList) => {
      return prevStudentList.filter((student) => student.id !== studentId);
    });
  };
  const getStudents = async () => {
    try {
      const response = await axios("http://localhost:3000/studentList");
      setStudentList(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return {addStudent, deleteStudent, getStudents, studentList}
}
export default useStudent;