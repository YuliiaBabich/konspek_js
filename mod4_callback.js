// function a(onSuccess, onUnsuccess) {
//   console.log(onSuccess)
//   console.log(onUnsuccess)
//   const mark = Number(prompt('What is your mark?'))
//   if (mark >= 10) {
//    onSuccess()
//   } else {
//    onUnsuccess()
//   }
// }

// function b() {
//   alert('It is great!')
// }

// function c() {
//   alert('It is excellent mark!')
// }

// function d() {
//   alert('It is bad mark!')
// }

// a(b, d)

// a(c, d)

/*const users = [
    {
      id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      id: "249b6175-5c30-44c6-b154-f120923736f5",
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      id: "150b00fb-dd82-427d-9faf-2879ea87c695",
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      id: "e1bf46ab-7168-491e-925e-f01e21394812",
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];
  
//   const newUsers = []
  
//   users.forEach(function(user, index) {
//     // console.log('N:', index + 1)
//     // // console.log(user)
//     const {name, age, ...restProps} = user;
//     // console.log(`${index + 1} - ${name} - ${age}`)
//     // console.log(restProps)
//     newUsers.push(restProps)
//   })
  
//   console.log(newUsers)
  
//   const classicAdd = function (a, b, c) {
//     console.log(arguments)
//     return a + b + c;
//   };

//   classicAdd(1, 2, 3)
  
//   const arrowAdd1 = (a, b, c) => {
//     // console.log(arguments)
//     return a + b + c;
//   };

//   arrowAdd1(1, 2, 3)
  
//   const arrowAdd2 = (a, b, c) => a + b + c;

//   console.log(arrowAdd2(1, 2, 3))
  
// const mathOperations = (num1, num2, callback1, callback2) => {
//     if (num1 > num2) {
//       const result = callback1(num1, num2);
//       return result;
//     } else if (num2 > num1) {
//       return callback2(num1, num2);
//     } else {
//       return "Enter another numbers";
//     }
//   };
  
//   const add = (num1, num2) => num1 + num2;
//   const substract = (num1, num2) => num2 - num1;
  
//   const multiply = (num1, num2) => num1 * num2;
//   const divide = (num1, num2) => num2 / num1;
  
//   console.log(mathOperations(10, 20, add, substract)); // 10
//   console.log(mathOperations(100, 20, add, substract)); // 120
//   console.log(mathOperations(200, 200, add, substract)); // 'Enter another numbers'

//   console.log(mathOperations(10, 20, multiply, divide)); //2
//   console.log(mathOperations(100, 20, multiply, divide)); //2000
  
//   console.log(mathOperations(10, 20, (num1, num2) => num1 + num2, (num1, num2) => num2 - num1)); // 10
  
//   const newUsers = []
  
//   users.forEach((user, index) => {
//     const {name, age, ...restProps} = user
//     console.log(`${index + 1} - ${name} - ${age}`)
//     newUsers.push(restProps)
//   })

  
//   users.forEach(({name, age, ...restProps}, index) => {
//     console.log(`${index + 1} - ${name} - ${age}`)
//     newUsers.push(restProps)
//   })
  
  // console.log(newUsers)



  users.forEach( ({name, age}) => {
    console.log(`${name} - ${age}`)
  })*/
/*-----------ДЗ---------*/
//function makePizza() {
 // return "Your pizza is being prepared, please wait.";
//}
// Change code below this line

//const result = makePizza(null);
//const pointer = makePizza;



//const pizzaPalace = {
//  pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//    if (this.pizzas.includes(pizzaName)) {
 //     return onSuccess(pizzaName);         
//    } else {
 //       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  //  }
 // },
//};
// Callback for onSuccess
//function makePizza(pizzaName) {
//  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//}

// Callback for onError
//function onOrderError(error) {
//  return `Error! ${error}`;
//}

// Method calls with callbacks
//pizzaPalace.order("Smoked", makePizza, onOrderError);
//console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
//pizzaPalace.order("Four meats", makePizza, onOrderError);
//console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
//pizzaPalace.order("Big Mike", makePizza, onOrderError);
//console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
//pizzaPalace.order("Vienna", makePizza, onOrderError);
//console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach(function (item, index) {
            totalPrice += item;
   });
 // Change code above this line
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));*/
/*--------тоже самое только отдльно-----*/
/*let totalPrice = 0;
const orderedItems = [164, 48, 291];
orderedItems.forEach(function (item, index) {
        console.log('N:', index + 1);
        console.log(item);
    totalPrice += item;
       
});
  console.log(totalPrice); */
  
  /*function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below thi ne
    numbers.forEach(function (number, index) {
  
      if (numbers[index] > value)
      {
      filteredNumbers.push(numbers[index]);
    }
});
  // Change code above this line
  return filteredNumbers;
};
console.log(filterArray([1, 2, 3, 4, 5], 3));// [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
  }   });
  return commonElements;
 
  // Change code above this line
};
console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []*/
// Change code below this line
/*const calculateTotalPrice = (orderedItems)=> {
  let totalPrice = 0;
  orderedItems.forEach( item=> {
    totalPrice += item;
  });
  return totalPrice;
}
// Change code above this line
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));*/

// Change code below this line
/*const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach( number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  // Change code above this line
  return filteredNumbers;
};
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));*/
// Change code below this line
/*const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  // Change code above this line
  return commonElements;
};
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));*/