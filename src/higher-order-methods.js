const students = [
    {
        fullName: "Berkay Turna",
        age: 25,
        isDeleted: false,
        score:90,
        isActive: true,
        courses: ["JavaScript", "React", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
        ]
    },
    {
        fullName: "Cenk Grid Kaynak",
        age: 32,
        isDeleted: false,
        score:85,
        isActive: true,
        courses: ["JavaScript", "React Native", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Korhan Kosece", topics: [".Net Core"] },
        ]
    },
    {
        fullName: "Ali Riza Taskiran",
        age: 24,
        isDeleted: false,
        score:92,
        isActive: true,
        courses: ["Java", "Golang"],
        instructors: [
            { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
            { fullName: "Buse Seker", topics: ["Problem Solving"] },
        ]
    },
    {
        fullName: "Mert Kirant",
        age: 23,
        isDeleted: false,
        score:88,
        isActive: true,
        courses: ["Expressjs", "Node.js"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ]
    },
    {
        fullName: "Firat Can Tas",
        age: 24,
        isDeleted: false,
        score:60,
        isActive: false,
        courses: ["Expressjs", "Node.js", ".Net Core"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ]
    },
    {
        fullName: "Baris Peker",
        age: 38,
        isDeleted: true,
        score:75,
        isActive: false,
        courses: ["JavaScript", "HTNL"],
        instructors: [
            { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
            { fullName: "Onder Tarım", topics: ["React Native"] },
        ]
    }
]

const isAnyStudentOver82 = students.some((student) => {
    return student.score > 82;
})
console.log(isAnyStudentOver82)


const isAnyStudentOver95 = students.some((student) => {
    return student.score > 95;
})
console.log(isAnyStudentOver95)


const isActiveControl = students.every((student) => student.isActive)

console.log(isActiveControl)