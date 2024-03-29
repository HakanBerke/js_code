const students = [
    {
        fullName: "Berkay Turna",
        age: 65,
        score: 25,
        isDeleted: false,
        score: 90,
        isActive: true,
        courses: ["JavaScript", "React", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
        ],
    },
    {
        fullName: "Cenk Grid Kaynak",
        age: 32,
        isDeleted: false,
        score: 85,
        isActive: true,
        courses: ["JavaScript", "React Native", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Korhan Kosece", topics: [".Net Core"] },
        ],
    },
    {
        fullName: "Ali Riza Taskiran",
        age: 34,
        isDeleted: false,
        score: 92,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ],
    },
    {
        fullName: "Hakan Berke Temur",
        age: 24,
        isDeleted: false,
        score: 87,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ],
    },
    {
        fullName: "Barkin Sayin",
        age: 30,
        isDeleted: false,
        score: 99,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ],
    },
    {
        fullName: "Mert Kirant",
        age: 22,
        isDeleted: false,
        score: 88,
        isActive: true,
        courses: ["Expressjs", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Onur Ege Erkek",
        age: 23,
        isDeleted: false,
        score: 78,
        isActive: true,
        courses: ["Expressjs", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Firat Can Tas",
        age: 44,
        isDeleted: false,
        score: 60,
        isActive: false,
        courses: ["Expressjs", "Node.js", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Ceren Dincer",
        age: 27,
        isDeleted: false,
        score: 75,
        isActive: true,
        courses: ["JavaScript", "HTNL"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
    {
        fullName: "Baris Peker",
        age: 38,
        isDeleted: true,
        score: 95,
        isActive: false,
        courses: ["JavaScript", "HTNL"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ],
    },
];


// const isAnyStudentOver82 = students.some((student) => {
//     return student.score > 82;
// })
// console.log(isAnyStudentOver82)


// const isAnyStudentOver95 = students.some((student) => {
//     return student.score > 95;
// })
// console.log(isAnyStudentOver95)


// const isActiveControl = students.every((student) => student.score > 50)

// console.log(isActiveControl)

// const controlName = students.find((student) => student.fullName === "Hakan Berke Temur");
// console.log(controlName);

// const controlNameIndex = students.findIndex((student) => student.fullName === "Hakan Berke Temur");
// console.log(controlNameIndex);

// const ageControl = students.sort((a, b) => a.age - b.age)
// console.log(ageControl);

// const scoreControl = students.sort((c, d) => c.score - d.score)
// console.log(scoreControl);

const nameControl = students.sort((name1, name2) => name1.fullName - name2.fullName);
console.log(nameControl);