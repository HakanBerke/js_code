import axios from "axios";
import { useState } from "react";
import { postStudent, deleteStudent as deleteStudentAPI, getStudents as getStudentsAPI } from "../../network/requests/studentRequests";

const useStudent = () => {

  
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  const addStudent = async (student) => {
   try {
    setIsLoading(true)
    const newStudent = await postStudent(student)
    setStudentList((prevState) => [...prevState, newStudent]);
   } catch (error) {
    console.log(error);
   }
   finally{
    setIsLoading(false)
   }
  };

  const deleteStudent = async (studentId) => {
    try {
      setIsLoading(true)
      await deleteStudentAPI(studentId)
      setStudentList((prevStudentList) => {
      return prevStudentList.filter((student) => student.id !== studentId);
    })
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsLoading(false)
    }
  };

  const getStudents = async () => {
    try {
      setIsLoading(true)
      const students = await getStudentsAPI()
      setStudentList(students)
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false)
    }
  };

  return {addStudent, isLoading, deleteStudent, getStudents, studentList}
}
export default useStudent;