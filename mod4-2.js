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
   },   {
     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
     name: "Carey Barr",     email: "careybarr@nurali.com",
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

 const ages = []
 for (const user of users) {
   ages.push(user.age)
 }
 console.log(ages)*/

// const ages = []
// users.forEach(user => {ages.push(user.age)})
// console.log(ages)

// const ages1 = users.map(user => user.age)
// console.log(ages1)

// const ages2 = users.map(({ age}) => age)
// console.log(ages2)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const a = students.map(({ courses }) => courses)

// const b = a.flat()

// console.log(b)
// console.log(a)

// const courses = students.flatMap(({courses}) => courses);
// console.log(courses) // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']

// const students = [
//   { name: "Манго", courses: ["математика", "фізика", [1, 2, [7, 8, [100, 700, [5, 10]]]]] },
//   { name: "Полі", courses: ["інформатика", "математика", [3, 4, [9, 10]]] },
//   { name: "Ківі", courses: ["фізика", "біологія", [5, 6]] },
// ];

// const courses0 = students.map(({courses}) => courses);

// console.log(courses0)

// const courses = students.flatMap(({courses}) => courses);

// console.log(courses)

// const a = students.map(({ courses }) => courses)

// console.log(a)

// console.log(a.flat(Infinity))

// const users1 = users.filter(({ balance }) => balance > 3000 )
// console.log(users1)

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
//  ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(allCourses)

//  const uniqueCourses = allCourses.filter(
//    (course, index, array) => {
//   console.log('#iteration', index + 1)
//    console.log('index', index)
//    console.log(array.indexOf(course))
//    return array.indexOf(course) === index
//    }
//  );

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses)

// const users2 = users.filter(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(users2)

// const userFind = users.find(({ name, balance }) => balance > 3000 && name[0] === "S")
// console.log(userFind)

// const userFind = users.find(({ balance }) => balance > 3000 )
// console.log(userFind)

// console.log(users.indexOf(userFind))

// const index = users.findIndex(({  balance }) => balance > 3000 )
// console.log(index)

// const result1 = users.every(({ balance }) => balance > 1000)

// console.log(result1)

// const result2 = users.every(({age}) => age >= 20 && age <=30)

// console.log(result2)

// const result3 = users.some(({ eyeColor }) => eyeColor === 'green')
// console.log(result3)

// const result4 = users.some(({friends}) => friends.length > 5)
// console.log(result4)

// const numbers = [2, 7, 3, 14, 6]

// const total = numbers.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// const array = [2, 7, 3, 14, 6]
// const init = 0
// const total = array.reduce((previousValue, number, index) => {
//   console.log('Iteration:', index + 1)
//   console.log('previousValue', previousValue)
//   console.log('number', number)
//   const res = previousValue + number;
//   console.log('res', res)
//   return res;
// }, init);

// // console.log(total); // 32

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const result1 = users.map(({balance}) => balance)
// console.log(result1)
// const result2 = result1.filter(el => el > 2500)
// console.log(result2)
// const result3 = result2.reduce((acc, item) => acc + item, 0)
// console.log(result3)

// const result = users
//   .map(({ balance }) => balance)
//   .filter((el) => el > 2500)
//   .reduce((acc, item) => acc + item, 0);
// console.log(resufunction changeEven(numbers, value) {
 
/*function changeEven(numbers, value) {
     // Change code below this line
     const newArray = [];
     numbers.forEach(number => {
        if (number % 2 === 0) {            
            newArray.push(number + value)      
           } else newArray.push(number) 
     });    
  return newArray;
  // Change code above this line
};
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));*/

/*const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);*/

/*const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

//const titles = books.map(book => book.title);
//console.log(titles);

// const genres = books.flatMap(book => book.genres);
// console.log(genres);*/
/*
const users =
[
  {
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


const getTotalBalanceByGender = (users, gender) => {
  return [...users].filter(user => user.gender === gender) 
  .reduce((previousValue, user) => {
  return previousValue + user.balance;
}, 0);
};
console.log(getTotalBalanceByGender(users, "male"));
  console.log(getTotalBalanceByGender(users,"female"));*/
/*const getSortedFriends = users => {
  return users.flatMap(user => user.friends)
    .filter(
      (friend, index, array) => array.indexOf(friend) === index)
    .sort((firstFriend, secondFriend) =>
    firstFriend.localeCompare(secondFriend));
  };
    console.log(getSortedFriends(users));*/
/*const getNamesSortedByFriendCount = users 
=> {
  return [...users].sort((firstUser, secondUser) =>
    firstUser.friends.length - secondUser.friends.length)
  .map(user => user.name);
};
console.log(getNamesSortedByFriendCount(users));
/*
const sortByName = users => {
  return users.sort((firstUser, secondUser) =>
    firstUser.name.localeCompare(firstUser.name));
  
};
console.log(sortByName);*/

/*const sortByDescendingFriendCount = users => {
  return [...users].sort((firstUser, secondUser) => 
    secondUser.friends.length - firstUser.friends.length)  ;
};*/
/*const sortByAscendingBalance = users => {
  return users.sort((firstUser, secondUser) =>
    firstUser.balance - secondUser.balance);
};
console.log(sortByAscendingBalance(users));

const getTotalFriendCount = (users) => {
  return users.reduce((previousValue, user, index) => {
    return user.friends.length + previousValue;
  }, 0); 
};
console.log(getTotalFriendCount(users));*/
/*const calculateTotalBalance = users => {
  users.reduce ((previousValue, user, index) => {
  console.log('#iteration', index + 1);
  console.log('previousValue', previousValue);
  console.log('user', user);
  return user.balance + previousValue;
}, 0);}*/

//console.log(calculateTotalBalance(users));


/*const getUserNames = (users) => {
  return users.map(user => user.name);
};
const getUserEmails = (users)  => {
     return users.map(user => user.email); 
  };*/
/*---------создам массиы из четных или нечтных числ---*/
/*  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => {
  return   number % 2 === 0   
});
console.log(evenNumbers);
const oddNumbers = numbers.filter(number => {
   return   number % 2 > 0   
});
console.log(oddNumbers);*/
/! ----------- fильтрация уникальных элeмнтов--*/
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => 
  book.genres);  

const uniqueGenres = allGenres.filter((genre, index, array)  =>
  array.indexOf(genre) === index
);
console.log(allGenres);
console.log(uniqueGenres);*/

/*const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter((book) => book.rating > MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);*/
/*[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
 };
console.log(getUsersWithEyeColor);*/

/*const users =
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
{   
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
  ]
 const isEveryUserActive = (users) => {
  return users.every(user => user.isActive === true);
};
   console.log(isEveryUserActive(users));
/*const getUserWithEmail = (users, email) => {
  return users.find(user =>
    user.email === email);
  user.push(user.name);
}; 
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));*/

/*const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
   
    }; 

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
//console.log(getUserWithEmail(users, "elmahead@omatom.com"));
//console.log(getUserWithEmail(users, "enuyead@omatom.com"));


  /*const getInactiveUsers = (users) => 
    return users.filter(user =>
  user.isActive === false);
    user.flatMap(user => user.name)};  */

  /*const getUsersByEyeColor = (arr, color) =>
  arr.filter(user => user.eyeColor.color);
	console.log(getUsersByEyeColor(users, "blue"));

  const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
 };
console.log(getUsersWithEyeColor);*/

/*const getActiveUsers = (arr, el) => {
  return arr.filter(user => user.isActive.el);
};
console.log(getActiveUsers(users, "true"));
/*const result = users.map(({ balance }) => balance);
console.log(result);
const result1 = result.filter(el => el > 2500);
console.log(result1);
const result2 = result1.reduce((acc, item)  => acc + item, 0);
console.log(result2);*/
/*
/!----------тож само ЛАНЦЮЖКОМ МЕТОДIВ-----*/
/*const result = users.map(({ balance }) => balance)
  .filter(el => el > 2500)
  .reduce((acc, item) => acc + item, 0);
  console.log(result);*/


// Change code below this line
//const getActiveUsers = (users) => users.filter(({ isActive }) =>
 //isActive  => return user.name);
// Change code above this line

/*const getActiveUsers = users
  .filter(({ isActive }) => isActive)
  .map(({ name }) => name);*/

/*console.log(getActiveUsers);*/
/*const getActiveUsers = (users) => { 
  return users.filter(({ isActive }) => isActive).map(({ name }) => name);
  };*/
//const getActiveUsers = users.filter(user =>
 // user.isActive === true).flatMap(user => user.name); 
//console.log(getActiveUsers);
//console.log(getActiveUsers(users))*/

/*const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book  =>
book.title === BOOK_TITLE);
const bookByAuthor = books.find(book  =>
book.author === AUTHOR);
console.log(bookWithTitle);
console.log(bookByAuthor);*/

/*const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
const eachElementInFirstIsEven = firstArray.every(number =>
  number % 2 === 0);
console.log(eachElementInFirstIsEven);
const eachElementInFirstIsOdd = firstArray.every(number =>
  number % 2 > 0);
console.log(eachElementInFirstIsOdd);*/
/*
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line
const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(totalPlayTime);
console.log(averagePlayTime);*/

/*const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line
const totalAveragePlaytimePerGame = players.reduce((previousValue, player, index) => {
  console.log('#iteration', index + 1);
  console.log('previousValue', previousValue);
  console.log('player', player);
  return player.playtime / player.gamesPlayed + previousValue;
}, 0);

console.log(totalAveragePlaytimePerGame); 
 
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
const ascendingReleaseDates = releaseDates.sort();
const alphabeticalAuthors = authors.sort();
console.log(releaseDates);
console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);*/
 /*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = releaseDates.sort((a, b) => a - b);
console.log(ascendingReleaseDates);
const descendingReleaseDates = releaseDates.sort((a, b) => b - a);
console.log(descendingReleaseDates);*/

/*const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Change code below this line
const names = books.filter(book=> 
  book.rating > MIN_BOOK_RATING)
  .sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author))
  .map(book => book.author);
console.log(names);*/
/*const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);
console.log(sortedByAuthorName);
const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);
console.log(sortedByReversedAuthorName);
const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
  firstBook.rating - secondBook.rating);
  console.log(sortedByAscendingRating);
  const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
  secondBook.rating - firstBook.rating);
  console.log(sortedByDescentingRating);*/