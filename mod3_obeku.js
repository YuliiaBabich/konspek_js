// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 0,
//     data: {
//         a: 1,
//         b: {
//           test: 'test!!!',
//           test1: {
//             d: 10
//           }
//         },
//         c: 3
//     }
//   };

// const a = book.title
// console.log(a)
// console.log(book.genres)
// console.log(book.data.a)
// console.log(book.data.b.test)

// console.log(book['genres']);
// console.log(book[genres]); // error

// const x = 'author';

// console.log(book['author']) //  "Bernard Cornwell"
// console.log(book[x]) // "Bernard Cornwell"

// console.log(book.x) // undefined

// console.log(book['data']['a']) // 1

// console.log(book)

// book.isPublic = true;

// console.log(book)

// book.genres.push('tale')
// console.log(book)

// console.log(book.price)

// book.price = '10$'
// book['price'] = '10$'

// book.data.d = 'd'

// book.x.y = 'test' // error

// book.x = {}
// book.x.y = {}
// book.x.y.q = 'a'
// book.array = [1, 2, 3]

// console.log(book)


// ❗️❗️❗️ Скорочена форма запису при створенні об'єкта

// const name = "Генрі Сибола";
// const age = 45;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user)

// const user = {
//   name,
//   age,
// };

// console.log(user)

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

//  ❗️❗️❗️ Приклад з методами

/*const student = {
     name: 'Jhon',
     email: 'jhon@gmail.com',
     homeworkResults: [],
    getName() {
        return this.name
    },
     getEmail() {
         console.log(this.email)
    },
     getHWResults() {
         console.log(this.homeworkResults)
     },
    addHomeworkResults(topic, sucess) {
   // const item = {topic:topic, sucess:sucess}
         const item = {topic, sucess}
        this.homeworkResults.push(item)
        this.getHWResults()
     }
 }*/
 //console.log(student.getName())
//const studentName = student.getName()
//console.log(studentName)
//student.getEmail()
// const studentEmail = student.getEmail()
// console.log(studentEmail)
// student.getHWResults()
// student.addHomeworkResults('HTML/CSS', true)
// student.addHomeworkResults('JS', true)



// ❗️❗️❗️ Протопитипне наслідування, for in

// const animal = {
//   legs: 4,
//   eyes: 2
// };

// console.log(animal)

// const dog = Object.create(animal);

// console.log(dog)

// dog.name = "Манго"

// console.log(dog); // {name: 'Манго'}
//  console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// for (const a in dog) {
//   console.log(a)
// }

// for (const key in dog) {

//   console.log(dog.hasOwnProperty(key))
// if (dog.hasOwnProperty(key)) {
//     console.log(key)
// }
// }

// dog.eyeColor = 'grey';

// const keys = Object.keys(dog)
// console.log(keys)

// for (const item of keys) {
//   console.log(item)

// }

// const values = Object.values(dog)
// console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)


// ❗️❗️❗️ Задача
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

const data = {}
const keys = Object.keys(books[0])
 console.log(keys)

for (const key of keys) {
    data[key] = []
}
console.log(data)

for (const key in data) {
    for (const book of books) {
        data[key].push(book[key])
    }
}


console.log(data)

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country ='Jamaica';
apartment.location.city = 'Kingston';
console.log(apartment);*/

/*const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
 image, 
  tags, 
  // Change code above this line
};

console.log(product);
console.log(name);*/

/*const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product.name);
console.log(product.price);
console.log(product.image);
console.log(product.tags);
console.log(product);*/



// ❗️❗️❗️ Spread

// const a = ['a', 'b', 'c'];
 //const b = [1, 2, 3];
// const c = [[1, 2], 'qwe', 1234]
// const d = [...a, 100, 200, 300, ...b, ...c];
// const d = [...a, 100, 200, 300, ...b, ...c[0], c[1], c[2]];
//const e = [a, b, c]

//console.log(d)

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 0, c: 3, d: 4}
// const obj3 = {...obj2, ...obj1}
// const obj3 = {...obj2, ...obj1, a: 5, e: 9}
// console.log(obj3)

// ❗️❗️❗️ Rest

// function q(...otherArgs) {
//   console.log(otherArgs); // Масив інших аргументів
// }

// q(1, 2);
// q(1, 2, 3);
// q(1, 2, 3, 4, 5, 6, 7);

// function w(a, b, c, ...otherArgs) {

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(otherArgs); // Масив інших аргументів
// }
// w(1, 2, 3);
// w(1, 2, 3, 4, 5, 6, 7);

// function isIncluded(num, ...array) {
//   console.log(array.includes(num))
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   const newArray = array.slice(1)
//   console.log(newArray.includes(array[0]))
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   console.log(array);
//   const num = array.pop();
//   console.log(array);
//   console.log(num);
//   console.log(array.includes(num));
// }
// isIncluded(5, 2, 3, 5, 6, 8, 10);

// ❗️❗️❗️ Деструктуризація

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   price: "3$",
//   coverImage: "bkjbkbh",
// };
// const { price, title, ...data } = book;

// console.log(book)
//  console.log(price)
// console.log(data)

// const { author} = book;

// console.log(book.author)
// console.log(book['author'])
// console.log(author)

// Деструктуризуємо

// const { title, author, isPublic, rating, coverImage = 'qwerty' } = book;

// console.log(coverImage)

// const { title, author, isPublic, rating: votes, coverImage, price='5$' } = book;
// console.log(rating)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {

// const {title, author, rating} = book
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const {title, author, rating} of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     a: {
//       b: 0,
//       c: {
//         d: "bkjbkjbnlkbklj",
//       },
//     },
//   },
// };


// const {
//   name,
//   tag,
//   stats: {
//     followers,
//     views,
//     likes,
//     a: {
//       b,
//       c: { d },
//     },
//   },
// } = user;

// console.log(stats)

// console.log(d);
// console.log(followers)
// console.log(likes)


// let a
// let b
// a = 5
// b = 10
// console.log(a)
// console.log(b)

// let a, b
// a = 5
// b = 10
// console.log(a)
// console.log(b)


// ❗️❗️❗️ Задача

// const car1 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };

// function createMessage(car) {
//   const message = `
//   Color: ${car.a}
//   Max speed: ${car.maxSpeed}
//   Is new: ${car.isNew}
//   Weight: ${car.dimensions.weight}
//   `;
//   console.log(message);
// }

// function createMessage({
//   dimensions: {
//     weight = 'No info',
//     height = "No info",
//     length = "No info"
//   },
//   a: color = 'No info',
//   maxSpeed = "No info",
//   isNew = "No info",

// }) {
//   const message = `
//   Color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

// createMessage(car2);

/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (let key in apartment) {
    keys.push(key);
  values.push(apartment[key]);
}
console.log(keys);
console.log(values);


/*---------v2------------------*/
/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
console.log(Object.keys(apartment)); 
console.log(Object.values(apartment)); */

/*const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
 if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
  }
  // Change code above this line
};
console.log(keys);
console.log(values);
 /*---------ищем кол-во ключей в обьекте------*/
/*function countProps(object) {
  let propCount = 0;
  // Change code below this line
 propCount = Object.keys(object).length
  return propCount;
}
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
*/
/*-------записать массив власних властивостй----*/
/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
//console.log(keys);

for (const key of keys) {
  //console.log(key);
  values.push(apartment[key]);
  //console.log(apartment[key]);
 };
console.log(values);*/
/*------Функція підраховує тільки власні властивості об'єкта--*
//1-й вариант
/*function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  };
  return propCount;
  // Change code above this line
};
  
//----- 2 - й вариант
function countProps(object) {
  return Object.keys(object).length;
}
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);
console.log(keys);
console.log(values);*/
/*-------посчитать общую ЗП всх сотрудников---*/
/*function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  for (const salary of Object.values(salaries)) {
      totalSalary += salary;
        
  // Change code above this line
  return totalSalary; ---- ERROR надо писать мжду кавычками
}
};
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
*/
/*----------так правильно----*/
/*function countTotalSalary(salaries) {
  let totalSalary = 0;
  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));*/

/*------Перебери масив об'єктів colors,
 використовуючи цикл for...of.
  Додай у масив hexColors значення властивостей hex,
   а в масив rgbColors - значення властивостей rgb
    з усіх об'єктів масиву colors.*/
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
};
console.log(hexColors);
console.log(rgbColors);*/
/*-------показывает цну по называнию продукта
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
  if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}


  // Change code above this line

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));
*/
/*-------длает массивы из властиостй ключів---*/
/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  let values = [];
    for (let i = 0; i < products.length; i++) {
    if (propName in products[i]) {
      values.push(products[i][propName]);
    }
  }
    return values;
}
  // Change code above this line
console.log(getAllPropValues("name"));//["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); //[4, 3, 7, 9]
console.log(getAllPropValues("price"));//  [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); []*/

/*--------------узнам общую стоимость товаров по имени---*/
/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  // Change code below this line
for(const product of products){
let totalPrice = product.price * product.quantity;
if(productName === product.name){
return totalPrice;
}
}
return 0;
}
  // Change code above this line
console.log(calculateTotalPrice("Blaster")); 
console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice("Droid")); //2800 
console.log(calculateTotalPrice("Grip")); //10800 
console.log(calculateTotalPrice("Scanner"));//8100 */
/*-----дструктиризация---*/
/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


const firstBook = {const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  coverImage = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
}*/

/*const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const { today:
  { low: lowToday,
    high: highToday,
    icon: todayIcon = "https:/ / www.flaticon.com / svg / static / icons / svg / 2204 / 2204346.svg"
  },
  tomorrow: { low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
} = forecast;
console.log(lowToday);
*/

/*
function calculateMeanTemperature(forecast) {
  const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));
*/

/*const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
console.log(Math.max(...scores));
const worstScore = Math.min(...scores);
console.log(Math.min(...scores));*/

/*const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores];
console.log(allScores);
const bestScore = Math.max(...allScores);
console.log(Math.max(...allScores));
const worstScore = Math.min(...allScores);
console.log(Math.min(...allScores));*/

/*const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};
console.log(finalSettings);*/

/*function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  
  const { category, priority, text, completed} = data;
  // Change code above this line
};

console.log(makeTask({}));
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));*/

// Change code below this line
/*----------находит сумму всх элмнтов-----*/
/*function add(...args) {
  // Change code above this line
let total = 0;
for (const arg of args) {
total += arg;
}
return total;
};
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));*/

/*---Функція рахує суму тільки тих аргументів,
 які більші за задане число/першим параметром функції.---- */
/*
function addOverNum(firstNumber,...args) {
  let total = 0;
  for (const arg of args) {
   
if (firstNumber < arg) {
total += arg;
  }
}
return total;
};
 console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8) );
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));*/

/*-----ЗАДАЧА. МАСИВ ЗБІГІВ---*/
// Change code below this line
/*function findMatches(arr,...args) {
  const matches = []; // Don't change this line
   for (let number of args) {
        if (arr.includes(number)) {
            matches.push(number);
        }
    }
  // Change code above this line
  return matches;
};
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));*/

/*const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName){
    return `Deleting book ${bookName}`;
  },
 updateBook(oldName, newName) {
   return `Updating book ${oldName} to ${newName}`;
 },
  // Change code above this line
};
console.log(bookShelf.getBooks());
console.log(bookShelf.addBook("Haze"));
console.log(bookShelf.removeBook("Red sunset"));
console.log(bookShelf.updateBook("Sands of dune", "Dune"));*/

/*---------- This-----*/
/*const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex =  this.books.indexOf(oldName);
     if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1, newName);
    }
    return this.books;
  },
  // Change code above this line
};

console.log(bookShelf.updateBook("The last kingdom", "Dune")); // ['Dune', 'Dungeon chronicles', 'The guardian of dreams']
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); // ['The last kingdom', 'Dungeon chronicles', 'The guardian of dreams']
console.log(bookShelf.updateBook("The last kingdom", "Dune")); // ['Dune', 'Dungeon chronicles', 'The guardian of dreams']*/

/*const atTheOldToad = {
  // Change code below this line
  potions:[],
  getPotion() { return this.potions; },
  addPotion(potionName) {
    this.potions.push(this.potionName);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },
  updatePotion(oldName, newName) {    
      this.potions.splice(potionIndex, 1, newName);
    },

};
  // Change code above this line
console.log(atTheOldToad.potions); // */

/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};
console.log(atTheOldToad.potions);
console.log(atTheOldToad.getPotions());*/

/*-----додаємо зілля  кінец масиву---*/
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
this.potions.push(potionName);
    // Change code above this line
  },
 
};
console.log(atTheOldToad.potions);
atTheOldToad.addPotion("Invisibility");
console.log(atTheOldToad.potions);
atTheOldToad.addPotion("Power potion");
console.log(atTheOldToad.potions);*/

/*-----видаляємо зілля  кінец масиву---*/
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
     // Change code above this line
  },
};
console.log(atTheOldToad.potions);
atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.potions);
atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);*/
/*-----онолюємо зілля  кінец масиву---*/
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);

        // Change code above this line
  },
};
console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName("Stone skin", "Invisibility");
console.log(atTheOldToad.potions);*/

/*-----ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР---*/
/*const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
 getPotions() {
    return this.potions;
  },
    addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
     this.potions.push(newPotion);
  }, 
  removePotion(potionName) {
    const potionIndex = this.potions.findIndex(potion => potion.name === potionName);
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1);
  },
   updatePotionName(oldName, newName) {
    const potionIndex = this.potions.findIndex(potion => potion.name === oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions[potionIndex].name = newName;
  },
  // Change code above this line
};

console.log(atTheOldToad.potions);
atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.potions); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ];


function foo(...args) {
  console.log(args);
}
 foo(1,2,3,4,5) */