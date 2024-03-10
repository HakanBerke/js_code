//async example
// console.log(1);
// console.log(2);
// setTimeout(
//     () => console.log(3),
//     1000
// )
// console.log(4);
// console.log(5);

// const { promise } = require("selenium-webdriver");

// const request = new XMLHttpRequest(); //readyState: 0

// request.addEventListener(
//     "readystatechange",
//     () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.responseText);
//         }
//         else {
//             console.warn(`An error occurred: ${request.status} - ${request.statusText}`);
//         }
//     }
// );

// request.open("GET", "https://jsonplaceholder.typicode.com/photos/5"); //readyState: 1
// request.send(); //readyState: 2


// const jspURI = "https://jsonplaceholder.typicode.com";

// const getRequest = (endpoint, callbackFunction) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener(
//         "readystatechange",
//         () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 //               err, data
//                 callbackFunction(null, data);
//             }
//             else if (request.readyState === 4) {
//                 //               err, data
//                 callbackFunction(`An error occurred: ${request.status} - ${request.statusText}`, null);
//             }
//         }
//     );

//     request.open("GET", endpoint);
//     request.send(); //readyState: 2
// }

// getRequest(
//     `${jspURI}/users/1a`,
//     (err, res) => {
//         if(err){
//             console.error(err);
//         }
//         else{
//             console.table(res);
//         }
//     }
// );

// const jspURI = "https://jsonplaceholder.typicode.com";

// const getRequest = (endpoint, callbackFunction) => {
//     let result = null;
//     const request = new XMLHttpRequest();

//     request.addEventListener(
//         "readystatechange",
//         () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 //               err, data
//                 callbackFunction(null, data);
//                 result = data;
//             }
//             else if (request.readyState === 4) {
//                 //               err, data
//                 callbackFunction(`An error occurred: ${request.status} - ${request.statusText}`, null);
//                 result = `An error occurred: ${request.status} - ${request.statusText}`;
//             }
//         }
//     );

//     request.open("GET", endpoint, true); //readyState: 1
//     request.send(); //readyState: 2
//     return result;
// }

// console.log(
//     getRequest(`${jspURI}/users/1`)
// );

// console.log(1);
// console.log(2);
// getRequest(
//     `${jspURI}/users/1`,
//     (err, res) => {
//         if (err) {
//             console.error(err);
//         }
//         else {
//             console.table(res);
//         }
//     }
// );
// console.log(3);
// console.log(4);

//callback hell
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

// PROMİSE
const jspURI = "https://jsonplaceholder.typicode.com";

const getRequest = (endpoint) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", (err, data) => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data)
            }
            else if (request.readyState === 4) {
                reject(err)
            }
        }
        )
        request.open("GET", endpoint);
        request.send();
    })
};
getRequest(`${jspURI}/usersS`)
    .then(data => console.table(data))
    .catch(err => console.err(err))
    .finally(() => console.log("FİNİSH.."))