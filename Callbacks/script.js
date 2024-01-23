// // EXEMPEL 1: en enkel callback funktion (function1)
// function function1() {
// 	console.log("Hej, jag är function 1!");
// }

// function function2(callback) {
// 	console.log("Hej, jag är function 2!");
// 	callback(); //anropar vår callback function
// }

// function2(function1); // Skickar function1 som en referens, inte som ett anrop





// // EXEMPEL 2: hur callbacks kan användas för att skicka en funktion som argument till en annan funktion och sedan exekvera den med specifika värden.
// const add = (a, b) => {
// 	return a + b; //returnerar summan av a och b
// }

// const simpleCallback = (callback, a, b) => { //callback = add
// 	let valueOfAdd = callback(a, b); //add anropas och resultatet som returneras sparas i variabeln valueOfAdd
// 	console.log(valueOfAdd); //resultatet loggas i konsolen
// }

// simpleCallback(add, 3, 1); //simpleCallback anropas med add, 3 och 1 som argument

// // let value = add(1,3);
// // console.log(value);





// // EXEMPEL 3: en arraymetod med en callback som argument

// // En callback funktion som loggar varje element och dess index
// function logElement(element, index) {
//     console.log(`Element på index ${index}: ${element}`);
// }

// // En array med värden
// let minArray = ['a', 'b', 'c', 'd', 'e'];

// // Använder metoden forEach för att iterera över arrayen
// minArray.forEach(logElement);




// // EXEMPEL 4: metoden setTimeout

// // Funktion som skriver ut ett meddelande
// function displayMessage() {
//   console.log("Hej! Detta meddelande visas efter 3 sekunder.");
// }

// // Använder setTimeout för att vänta 3000 millisekunder (3 sekunder) innan displayMessage körs
// setTimeout(displayMessage, 3000);


// console.log("visar att koden inte blockeras");









 








// function2(function1);