import React from 'react'
import StudentForm from '../../../../components/app/student-form/StudentForm'
import { useEffect } from 'react';

const NewStudentPage = () => {
  useEffect(() => {
    console.log("mount new student page ");
    return () => console.log("unmount new student page");
  },[])
  return (
    <StudentForm />
  )
}

export default NewStudentPage
