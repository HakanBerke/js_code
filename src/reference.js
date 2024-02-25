// const students = ["mert","hakan","barış","berkay","onur","barkın","ali rıza"];

// bu yanlış bir gösterim
// const newStudents = students;

// newStudents.pop();
// newStudents.pop();
// newStudents.pop();

// newStudents.push("berke");

// console.log(students);
// console.log(newStudents);

// const newStudents = [...students];

// newStudents.pop();
// newStudents.pop();

// newStudents.push("temur");
// newStudents.push("berke");
// newStudents.push("ahmet");

// console.log(students);
// console.log(newStudents);

// const person1 = {
//     firstName: "hakan berke",
//     lastName:"temur",
//     country:"turkey",
//     hobi:["futbol","basketbol","tenis","yüzme","kayak"]
// };

// const person2 = {...person1};
// person2.firstName = "hakan";
// console.log(person2);
// console.log(person1);

//---CALLBACK FUNCTİON---

// console.log("Hata!")
// console.warn("Hata!")
// console.error("Hata!")
// alert("Hata!")

// const logError = (message) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    // try {
        // throw new Error(message);
    // } catch (error) {
        // console.error(error);
    // }
    // console.log(message);
// }



// logError("Hata! Veri bulunamadi!");

// const alertError = (message) => {
//     //islemler...
//     //islemler...
//     //islemler...
//     //islemler...
//     //islemler...
//     try {
//         // throw new Error(message);
//     } catch (error) {
//         // console.error(error);
//     }
//     alert(message);
// }

// alertError("Hata! Veri bulunamadi!");

// const warnError = (message) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    // try {
        // throw new Error(message);
    // } catch (error) {
        // console.error(error);
    // }
    // console.warn(message);
// }

// warnError("Hata! Veri bulunamadi!");


// const showError = (msg, errorType) => {
//     if(errorType === "log"){
//         console.log(msg);
//     }
//     else if(errorType === "warn"){
//         console.log(msg);
//     }
//     else if(errorType === "error"){
//         console.log(msg);
//     }
//     else if(errorType === "alert"){
//         console.log(msg);
//     }
//     else {
//         throw new Error("Hatali tip");
//     }
// }

// const showError = (msg, callbackFunction) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    //islemler...
//     callbackFunction(msg);
// }


// showError("Hata! Veri bulunamadi!", console.warn);
// showError("Hata! Veri bulunamadi!", console.log);
// showError("Hata! Veri bulunamadi!", alert);


// const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

// const ourOwnForEach = (arr, callbackFn) => {
//     for (let index = 0; index < arr.length; index++) {
//         callbackFn(arr[index], index, arr);
//     }
// }

// const logElementWithIndex = (element, index) => {
//     console.log(`index ${index}: ${element}`);
// }

// ourOwnForEach(
//     ["Ahmet", "Mehmet", "Furkan"],
//     (student, index) => console.log(`index ${index}: ${student}`)
// )
// ourOwnForEach(
//     students,
//     logElementWithIndex
// )

// ourOwnForEach(students, student => console.warn(student));
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 19, 20, 21, 25];
// let newNums = [];


// const ourOwnForEach = (nums, callbackFn) => {
//     for (let i = 0; i < nums.length; i++) {
//         callbackFn(nums[i], i, nums)
//     }
// }


//  const logElementWithIndex = (element, i) =>{
//     if (i % 2 === 0) {
//         newNums.push(element);
//         console.log(newNums);
//     }
//  }
// ourOwnForEach(nums, logElementWithIndex)

// const firstNames = ["ali","ayşe","ahmet","murat","furkan","berat","ela"];

// const ourOwnForEach = (firstNames, callbackFn) => {
//     const newFirstNames =[];
//     for (let i = 0; i < firstNames.length; i++){
//     if (callbackFn(firstNames(i), i , firstNames)) {
//         newFirstNames.push(i);
//     }
//     };
// };

