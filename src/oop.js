"use strict";
// function Animals(cinsi, ayakSayisi, cinsiyeti, kanati) {
//     this.cinsi = cinsi;
//     this.ayakSayisi = ayakSayisi;
//     this.cinsiyeti = cinsiyeti;
//     this.kanati = kanati;
//     Object.seal(this);
// }

// Animals.prototype.tuyRengi 

// const animal1 = new Animals("Köpek",4,"E",false);
// const animal2 = new Animals("kuş",2,"E",true);
// const animal3 = new Animals("kedi",4,"K",false);
// const animal4 = "abcsdas";
// const animals =[]

// animal1.kuyruk = true;
// animal1.cinsiyeti= "K";
// console.log(animal1);
// console.log(animal2);
// console.log(animal3);

// function ekleme (obj){
//     if (obj instanceof Animals){
//         animals.push(obj)
//     }
//     else {
//         throw "yanlış...."
//     }
// }
// ekleme(animal1);
// console.log(animals);

// class Car {
//     carName;
//     car
// }

function log(value) {
    console.log(value);
}

function bolmeIslemi(num1, num2) {
return num1 / num2;
}
function islemYap (num1,num2,callbackFn){
    console.log(callbackFn(num1,num2));
}
islemYap(10,2,bolmeIslemi)