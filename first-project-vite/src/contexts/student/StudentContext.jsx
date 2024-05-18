import { createContext, useEffect} from "react";
import useStudent from "../../hooks/student/useStudent";

export const StudentContext = createContext();

export const StudentProvider = ({children}) => {
    const {studentList, getStudents, addStudent, deleteStudent} = useStudent();
    useEffect(() => {
        getStudents();
      }, []);
      const contextValue ={studentList, getStudents, addStudent, deleteStudent};
      return (
        <StudentContext.Provider value={contextValue}>
            {children}
        </StudentContext.Provider>
      )
    
}