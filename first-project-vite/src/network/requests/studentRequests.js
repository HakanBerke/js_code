import { baseService } from "../services/baseService";

export const getStudents = async () => {
    try {
        const response = await baseService.get("/studentList")
        return response.data;
    } catch (error) {
        console.error("get students error: ", error);
    }
}

export const getStudentById = async (studentId) => {
    try {
        const response = await baseService.get(`/studentList/${studentId}`)
        return response.data
    } catch (error) {
        console.error("getstudentbyid error: ", error);
    }
}
export const postStudent = async (newStudent) => {
    try {
        const response = await baseService.post("/studentList", newStudent)
        return response.data
    } catch (error) {
        console.error("poststudent error: ", error);
    }
}
export const deleteStudent = async (studentId) => {
    try {
        const response = await baseService.delete(`/studentList/${studentId}`)
        return reponse.data
    } catch (error) {
        console.error("deletestudent error: ", error);
    }
}