import './App.css';
import { useState } from 'react';

function App() {
  const [studentName1, setStudentName1] = useState("Hakan Berke Temur");
  const [studentName2, setStudentName2] = useState("Barkın Sayın");
  const [studentName3, setStudentName3] = useState("Berkay Turna");
  return (
    <div className="app">
      <h2>Student Manager</h2>
      <p>{studentName1}</p>
      <button
      onClick={
        () => {
         setStudentName1("cenk kaynak")}}
      >
         Change Student Name
      </button>
      <p>{studentName2}</p>
      <button
      onClick={
        () => {
         setStudentName2("Onur ege")}}
      >
         Change Student Name
      </button>
      <p>{studentName3}</p>
      <button
      onClick={
        () => {
         setStudentName3("Ali Rıza")}}
      >
         Change Student Name
      </button>
    </div>
  );
}

export default App;
