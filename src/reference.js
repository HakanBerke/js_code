const students = ["mert","hakan","barış","berkay","onur","barkın","ali rıza"];

// bu yanlış bir gösterim
// const newStudents = students;

// newStudents.pop();
// newStudents.pop();
// newStudents.pop();

// newStudents.push("berke");

// console.log(students);
// console.log(newStudents);

const newStudents = [...students];

newStudents.pop();
newStudents.pop();

newStudents.push("temur");
newStudents.push("berke");
newStudents.push("ahmet");

console.log(students);
console.log(newStudents);