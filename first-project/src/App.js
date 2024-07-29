import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState()
return(
  <label></label>
)
//   const [studentList, setStudentList] = useState(

//     [
//       { studentName: "Barkin Onay Sayin", course: "Onay Teknikleri", instructor: "Hicran Ertugral", id: "001" },
//       { studentName: "Ali Riza Taskiran", course: "JavaScript", instructor: "Buse Ugras", id: "002" },
//       { studentName: "Berkay Turna", course: "React", instructor: "Orun Durmaz", id: "003" },
//       { studentName: "Cenk Kaynak", course: "Html Css", instructor: "Orkun Durmaz", id: "004" },
//     ]
//   );

//   //input state
//   const [student, setStudent] = useState({ studentName: "", course: "", instructor: "" });

//   //error states
//   const [studentError, setStudentError] = useState({ studentName: false, course: false, instructor: false })

//   const addStudent = (event) => {
//     event.preventDefault();

//     //clear previous errors
//     setStudentError({ studentName: false, course: false, instructor: false })

//     if (!student.studentName.trim() || !student.course.trim() || !student.instructor.trim()) {
//       setStudentError(
//         {
//           studentName: !student.studentName.trim(),
//           course: !student.course.trim(),
//           instructor: !student.instructor.trim()
//         }
//       )
//       //else yerine early return pattern kullanilabilir
//       return;
//     }

//     //studentList'i guncelle
//     // const newStudent = { studentName: "Ceren Dincer", course: "Node.js", instructor: "Orkun Durmaz", id: Math.random().toString() };
//     //yanlis!!!!  side effect yani yan etki oldugu icin calisiyor gibi gozukuyor
//     // studentList.push(newStudent);

//     //YANLISS!!!!! DIZI BOYLE KOPYALANMAZ!!!!!
//     // const newStudentList = studentList;
//     // newStudentList.push(newStudent);
//     // //ADRESLER AYNI OLDUGU ICIN STATE GUNCELLENMIYOR
//     // setStudentList(newStudentList);

//     //DOGRU
//     // const newStudentList = [...studentList, newStudent];
//     // setStudentList(newStudentList);]
//     // setStudentList([...studentList, newStudent])
//     // setStudentList(
//     //   [
//     //     ...studentList,
//     //     { ...student, id: Math.random().toString() }
//     //   ]
//     // )
//     setStudentList((prevStudentList) =>
//       [...prevStudentList,
//       { ...student, id: Math.random().toString() }]
//     )
//     setStudentList((prevStudentList) =>
//       [...prevStudentList,
//       { ...student, id: Math.random().toString() }]
//     )
//     setStudentList((prevStudentList) =>
//       [...prevStudentList,
//       { ...student, id: Math.random().toString() }]
//     )

//     // //inputlari temizle
//     // setStudentNameInput("");
//     // setCourseInput("");
//     // setInstructorInput("");
//     // // }
//     setStudent({ studentName: "", course: "", instructor: "" });
//   }

//   return (
//     /* JSX */
//     <div className="app">
//       <h2>Student Manager</h2>
//       <form className='student-form'>
//         {/* two way binding */}
//         <div className="input-control">
//           <input
//             type="text"
//             placeholder='Student Name'
//             value={student.studentName} //input'un degeri state'den gelsin
//             onChange={(event) => setStudent({ ...student, studentName: event.target.value })} //state'i bu inputun degeriyle guncelle
//           />
//           {/* conditional rendering */}
//           {studentError.studentName && <p className="error input-error">Please enter a valid student name</p>}
//           <br /><br />
//         </div>
//         <div className="input-control">
//           <input
//             type="text"
//             placeholder='Course'
//             value={student.course} onChange={(event) => setStudent({ ...student, course: event.target.value })}
//           />
//           {studentError.course && <p className="error input-error">Please enter a valid course</p>}
//           <br /><br />
//         </div>
//         <div className="input-control">
//           <input
//             type="text"
//             placeholder='Instructor'
//             value={student.instructor}
//             onChange={(event) => setStudent({ ...student, instructor: event.target.value })}
//           />
//           {studentError.instructor && <p className="error input-error">Please enter a valid instructor</p>}
//           <br /><br />
//         </div>
//         <input
//           type="submit"
//           onClick={addStudent}
//         />
//       </form>
//       <div className="student-list">
//         <div className="student-card">
//           {studentList.map(
//             ({ studentName, course, instructor, id }) =>
//             (<div className="student-card" key={id}>
//               <ul>
//                 <li>{studentName}</li>
//                 <li>{course}</li>
//                 <li>{instructor}</li>
//               </ul>
//             </div>)
//           )}
//         </div>
//       </div>
//     </div>
//   );
}

export default App;