// const a = "new variable"; // ініціалізуємо завжди зі значенням

// console.log(a)

//function checkAge(age) {
 // if (age >= 18) { // Change this line
 //   return "You are an adult";
 // }

 // return "You are a minor";
//}
//console.log(checkAge(20));
//console.log(checkAge(0));
//console.log(checkAge(14));
//console.log(checkAge(38));

//function checkStorage(available, ordered) {
  // Change code below this line
  
 // if (ordered === 0) {
 //   return "Your order is empty!";
 //   }
  //  if (ordered > available) {
  //  return "Your order is too large, not enough goods in stock!";
 // } 
  //return "The order is accepted, our manager will contact you";
  // Change code above this line
//}
//console.log(checkStorage(100, 50));
//console.log(checkStorage(100, 130));
//console.log(checkStorage(70, 0));
//console.log(checkStorage(200, 20));
//console.log(checkStorage(200, 250));
//console.log(checkStorage(150, 0));

//const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
//const firstElement = fruits [0];
//const secondElement = fruits [1];
//const lastElement = fruits[3];
//console.log(firstElement);
//console.log(fruits[3]);

//const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
//fruits[1] = "peach";
//fruits[3] = "banana";
//console.log(fruits);

//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
//const fruitsArrayLength = fruits.length;
//console.log(fruitsArrayLength);

/*const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length - 1;
console.log(lastElementIndex);
console.log(fruits[lastElementIndex]);
const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
console.log (lastElementIndex);
console.log(lastElement);*/

/*function getExtremeElements(array) {
  
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    return [firstElement, lastElement];
   };
console.log(getExtremeElements([1, 2, 3, 4, 5])); //1,5
console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // earth, venus
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));*/

function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
 words = message.split(delimiter);

  // Change code above this line
  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));
