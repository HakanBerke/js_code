// const xhr = new XMLHttpRequest();

// const { error } = require("selenium-webdriver");

// // console.log(xhr);

// xhr.addEventListener("readystatechange", () => {
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log(xhr.responseText)
//     }
//     else if (xhr.readyState === 4){
//         console.warn("istek tamamlandı ama başarılı olmadı..");
//     }
//     // else {
//     //     console.error("hata!!!");
//     // }
// });
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true )
// xhr.send()


// getRequest(
//     `${jspURI}/users/1`,
//     (err, res) => {
//         if (err) {
//             console.error(err);
//         }
//         else {
//             console.table(res);
//             getRequest(
//                 `${jspURI}/users/2`,
//                 (err, res) => {
//                     if (err) {
//                         console.error(err);
//                     }
//                     else {
//                         console.table(res);
//                         getRequest(
//                             `${jspURI}/users/3`,
//                             (err, res) => {
//                                 if (err) {
//                                     console.error(err);
//                                 }
//                                 else {
//                                     console.table(res);
//                                     getRequest(
//                                         `${jspURI}/users/4`,
//                                         (err, res) => {
//                                             if (err) {
//                                                 console.error(err);
//                                             }
//                                             else {
//                                                 console.table(res);
//                                             }
//                                         }
//                                     );
//                                 }
//                             }
//                         );
//                     }
//                 }
//             );

//         }
//     }
// );

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(responseJson => {console.log(responseJson)})


const jspURI = "https://jsonplaceholder.typicode.com";
const getCommentsWithAwait = async () => {
    console.log("inner await 1");
    console.log("inner await 2");
    const response = await fetch(`${jspURI}/comments/1`);
    const data = await response.json();
    console.log("await answer: ", data);
    console.log("inner await 3");
    console.log("inner await 4");
}
const getCommentsWithThen = async () => {
    console.log("inner then 1");
    console.log("inner then 2");
    fetch(`${jspURI}/comments/1`)
        .then(response => response.json())
        .then(data => console.log("then answer: ", data));
    console.log("inner then 3");
    console.log("inner then 4");
 
}

console.log("outer 1");
console.log("outer 2");
getCommentsWithAwait();
getCommentsWithThen();
console.log("outer 3");
console.log("outer 4");