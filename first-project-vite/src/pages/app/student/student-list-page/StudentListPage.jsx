import React from 'react'
import StudentList from '../../../../components/app/student-list/StudentList'
import { useEffect } from 'react'

const StudentListPage = () => {

  useEffect(() => {
    console.log("mount student list page ");
    return () => console.log("unmount student list page");
  },[])

  return (
    <StudentList />
  )
}

export default StudentListPage
