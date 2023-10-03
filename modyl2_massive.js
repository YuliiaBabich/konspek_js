// const a = [1, 2, 3, 4, 5]
//  for(let i = 0; i < a.length; i+=1) {
//  console.log(a[i])
//   console.log(a[i] + 10)
// }
//1:10
// const numbers = [1, 2, 3, 4, 5]

// for(const number of numbers) {
// console.log(numbers.indexOf(number))
//     console.log(number + 10)
// }

// ❗️❗️❗️ Присвоєння за посиланням

// const a = 2;
// const b = a;
// console.log(a === b)
// console.log(2 === 2)

 //const array1 = [1, 2, 3];

 //const array2 = array1;

// console.log(array1)
// console.log(array2)
// console.log(array1 === array2)
// console.log([5, 6, 7] === [5, 6, 7]) //false

// array1[0] = 10;

// console.log(array1)
// console.log(array2);

// array2[2] = 5;

// console.log(array1)

// const array3 = array2

// console.log(array3)

// array3[1] = 100;

// console.log(array1)

//array2.length = 0;
//console.log(array2);

// console.log(array3)

//array1[2] = 1000;
//console.log(array3)
// console.log(array1[0])

// for (const elem of array3) {
//     console.log(elem)
// }

// console.log(array3.length)

// let array1 = [1, 3, 5]
//let array2 = array1;
 
//array1[0] = 50;
//console.log(array1)
//console.log(array2)

//array1 = [9, 90, 900]

//console.log(array1)
//console.log(array2)

// array2 = array1;

// console.log(array1)
// console.log(array2)

// const a = [1, 2, 3]
// const b = a
// console.log(a === b) // true

// const c = [1, 2, 3]
// const d = [1, 2, 3]
// console.log(c === d) // false
// console.log(c[0] === d[0]) // true

// const e = [1, 2, [3, 4]]
// const f = [1, 2, [3, 4]]
 // console.log(e[2] === f[2]) // false
 // console.log(e[0] === f[0]) // true
// console.log(e[2][0]) // 3

// ❗️❗️❗️ Методи масивів

// const string = '1-!2-!3-!4-!5-!6-!7-!8-!9'
// console.log(string.split('!'))

// const string1 = 'vehq jrf vbh jre bv h'
// console.log(string1.split(' '))

// const string2 = "123456789";
// const array = string2.split("");
// console.log(array);

// for (const element of array) {
//     const number = Number(element)
//     console.log(number)
// }

// for (let i = 0; i < array.length; i += 1) {
//   array[i] = Number(array[i]);
// }

// console.log(array);

// const array3 = [1, 2, 3, 4, 5, 6, 7];
// const string3 = array3.join('')
// console.log(string3)

//const array5 = [1,4,6,7,4,7,89]
//const res1 = array5.includes(100 && 4)
//console.log(res1) // true
// const res2 = array5.includes(100) && array5.includes(4)
// console.log(res2) // false

 //const emptyArray = [0, 90]
 
//console.log(emptyArray)
// console.log(emptyArray.push(1))
// const length1 = emptyArray.push(1)
// console.log(length1) // 3
// const length2 = emptyArray.push(2, 3, 100, 200, 1000, 100000)
//console.log(emptyArray)
// console.log(length2)

 //const notEmptyArray = [1, 2, 3, 4, 5]
 //notEmptyArray.pop()
 //console.log(notEmptyArray)
 //const deletedEl = notEmptyArray.pop()
 //console.log(notEmptyArray)
 //console.log(deletedEl)

//const superArray = [1, 2, 3, 4, 5]

//const length2 = superArray.unshift(5, 10)
//console.log(superArray)
// console.log(length2)

//const superArray1 = [1, 2, 3, 4, 5]
//const deletedEl1 = superArray1.shift()
//console.log(superArray1)
//console.log(deletedEl1)

//const array6 = [1, 2, 3, 4, 5, 6, 7]
// const array7 = array6.slice(2, 5)
//console.log(array7)
// const array8 = array6.slice(-2)
// console.log(array8)
// console.log(array6)



// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const numbers3  = numbers2.splice(5, 2)
// console.log(numbers2)
// console.log(numbers3)


// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const copy = numbers2.slice()
// const deleted = copy.splice(5, 2)
// console.log(copy)
// console.log(deleted)
// console.log(numbers2)


// const numbers3 = [1, 2, 3, 6, 7, 8, 9]
// const copy1 = numbers3.slice()
// const deleted1 = copy1.splice(3, 0, 4, 5)
// console.log(copy1)
// console.log(deleted1)

// const numbers4 = [1, 2, 3, 4, 4, 4, 7]
// const copy2 = numbers4.slice()
// const deleted2 = copy2.splice(4, 2, 5, 6)
// console.log(copy2)
// console.log(deleted2)

 //const a = [1, 2, 3];
 //const b = [5, 6, 7]
 //const c = 4

 //const arr = a.concat(c, b)
 //console.log(arr)
 //console.log(a)

 // const a = [1, 2, 3];
 //const b = [5, [6, 7]]
 //const c = 4

 //const arr = a.concat(c, b[0], b[1])
 //console.log(arr)
//console.log(a)
 
//Module 2-2

// function isIncluded(array, number) {
//     const result = array.includes(number)
//     console.log(result)
// }

// isIncluded([1, 2, 5, 8, 3], 4) // false
// isIncluded([1, 2, 5, 8, 3], 5) // true
// isIncluded(5, [1, 3, 5]) // error

// function isIncluded(array, number) {
//     const result = array.includes(number)
// console.log(result)
//     return result
// }

// isIncluded([1, 2, 5, 8, 3], 4) // false

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a)

// console.log(isIncluded([1, 2, 5, 8, 3], 4)) // false
// console.log(isIncluded([1, 2, 5, 8, 3], 5)) // true

// const a = isIncluded([1, 2, 5, 8, 3], 4)
// console.log(a) // false
// const b = isIncluded([1, 2, 5, 8, 3], 5)
// console.log(b) // true

// function add(a, b) {
//   const sum = a + b
//   return sum
//   return a + b;
// }

// const number1 = add(1, 3); // 4
// console.log(number1)
// const number2 = add(5, 7); // 12
// console.log(number2)

// const sum = number1 + number2 // 16
// console.log(sum)

// const sum = add(1, 3) + add(5, 7)
// console.log(sum) // 16

// function add(a, b) {
// if (typeof a !== "number" || typeof b !== "number") {
// console.log('One of operands is not a number')
// return
//    return "One of operands is not a number";
//   }
//   return a + b;
// }

 // console.log(add(3, 7)) // 10
//console.log(add(5, "10")); // 'One of operands is not a number'
//console.log(add(3, "7"));

// ❗️❗️❗️ Значення параметрів за замовчуванням

// function add(a = 0, b = 0) {
//   const sum = a + b
//   return sum
//  console.log(a)
//  console.log(b)
//  return a + b;
// }

// console.log(add(1))

// function add(a = 0, b = 0 , c = 0 ) {
//     console.log(a + b + c)
// }

// const num1 = 3;
// const num2 = 4

// add(num1, num2)
// add(3)
// add()

// ❗️❗️❗️ Arguments/
// function add() {
//     console.log(arguments)
//     console.log(arguments[0])
// console.log(arguments.length)
//     let sum = 0;
//     for(const arg of arguments) {
//         console.log(arg)
//         sum +=arg
//     }
//     console.log(sum)
//     return sum
// }

// add(5, 7, 4, 9, 10)
// add(5, 7, 4, 9, 10, 100, 45, 36)

// function isIncluded() {
//     console.log(arguments)
//     const array = Array.from(arguments);
//     console.log(array)
//     const number = arguments[arguments.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// function isIncluded(...array) {
//     console.log(array)
//     const number = array[array.length - 1]
//     console.log(number)
//     const array2 = array.slice(0, -1)
//     console.log(array2)
//     console.log(array2.includes(number))
//     return array2.includes(number)
// }

// isIncluded(2, 5, 6, 8, 4, 9, 3, 7)

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// function add(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//   console.log('One of operands is not a number')
//   return
//     return "One of operands is not a number";
//   }
//   return a + b;
// }

// const add = function(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of operands is not a number'
//    return
//     }
//     return a + b
// }

// console.log(add(3, 7))
// console.log(add( 5, '10'))

// ❗️❗️❗️ stack

// function bar() {
//   console.log("bar");
//   console.log(222);

// }

// function baz() {
//   console.log("baz");
//   console.log(444);
// }

// function foo() {
//   console.log("foo");
//   console.log(111)
//   bar();
//   console.log(333);
//   baz();
//   console.log(555);
//   foo()
// }

// foo();

//   console.log('!!!')

// ❗️❗️❗️ Задачі

// function transform(...args) {
//    console.log(args);
//   const array = [];
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       array.push(String(arg));
//     } else {
//       array.push(Number(arg));
//     }
//   }
//   return array;
// }

// function transform(...args) {
//   const array = [];
//   for (const arg of args) {
//     typeof arg === "number" ? array.push(String(arg)) : array.push(Number(arg));
//   }
//   return array;
// }

// console.log(transform(4, "5", 3, "9", 7)); // ['4', 5, '3', 9, '7']

// function flatArray(array) {
//     const newArray = [];
//     for (const elem of array) {
//       if (Array.isArray(elem)) {
//         for (const item of elem) {
//           newArray.push(item);
//         }
//       } else {
//         newArray.push(elem);
//       }
//     }
//     return newArray;
//   }

//   console.log(flatArray(["a", 5, ["3", 7, 8], "45", [1, 3, 7, 8]]));

//           ГЕНЕРАТОР SLUG
//function slugify(title) {
  // Change code below this line
  //const slug = title.split(" ").join("-").toLowerCase();

  //return slug;
  // Change code above this line
//}

//console.log(slugify("Arrays for beginners"));
//console.log(slugify("English for developers"));
//console.log(slugify("Ten secrets of JavaScript"));*/

//const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
//const firstTwoEls = fruits.slice(0, 2);
//const nonExtremeEls = fruits.slice(1, -1);
//const lastThreeEls = fruits.slice(-3);
//console.log(firstTwoEls);
//console.log(nonExtremeEls);
//console.log(lastThreeEls);

/*function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
 
  if (firstArray.length + secondArray.length > maxLength) {
     return firstArray.concat(secondArray).slice(0, maxLength);        
  } 
  
   return firstArray.concat(secondArray); 
  // Change code above this line
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log( makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));*/
/*const start = 3;
const end = 7;

for (let i = 3; i <= 7; i += 1) { // Change this line
  console.log(i);
}*/

/*function calculateTotal(number) {
 // Change code below this line

  let number1 = 0;
  for (let i = 1; i <= number; i += 1) {
    number1 += i;
  }
  
  return  number1;

  // Change code above this line
}
console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());*/

//const fruits = ['apple', 'plum', 'pear', 'orange'];

//for (let i = 0; i < 4; i += 1) { // Change this line
//  const fruit = fruits[i]; // Change this line
//  console.log(fruit);
//}

/*function calculateTotalPrice(order) {
    let total = 0;
     // Change code below this line
for (let i = 0; i < order.length; i +=1) {
  total += order[i];
  // Change code above this line
 
    }
  return total;
};
const order = [12, 85, 37, 4];
const totalPrice = calculateTotalPrice(order);
console.log(totalPrice); // Виведе 45 */




/*function findLongestWord(string) {
    // Change code below this line
    let array = string.split(' ');
    let wordLength = 0;
    for (let i = 0; i < array.length; i += 1) {
    wordLength = array[1].length;

    if (array[i].length > wordLength) {
      longestWord = array[i];
      return longestWord;
    }
  }
   // Change code above this line
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));*/

/*function findLongestWord(string) {
  let array = string.split(' ');
  let longestWord = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));*/

/*function getCommonElements(array1, array2) {
 // Change code below this line
    const newArray = array1.concat(array2);
    for (let i = 0; array1.length >= i <= array2.length;  i += 1) {
  if (array1.includes(array2)) {
      newArray.push(i);
      console.log(newArray);
        } 
  return newArray;
  // Change code above this line
};
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// [24, 12, 27, 3, 12, 8, 3, 36nts([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElemesh(i);
  numbers.push(max);

function getCommonElements(array1, array2) {
    // Change code below this line
    const newArray = array1.filter((element) => array2.includes(element));
    return newArray;
    // Change code above this line };
    console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
    console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40] 
    console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []*/


/*const start = 6;console.log(start);
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
      number = i;
      
      break;
  }
 }
 function includes(array, value) {

  for (let i = 0; i < array.length; i++) { 
        if (array[i]  === value){
       return true;
        }
    }
    return false;
};

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); 

const c = 20;
function foo(a, b) { 
    const c = 10;
    return a + b + c;   
}
console.log(foo(5, 15)); //30*/
