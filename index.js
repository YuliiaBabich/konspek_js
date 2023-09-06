// ❗️❗️❗️ Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // можемо ініціалізувати без присвоєння значення;
// console.log(b)
// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;
// console.log(b)

// ❗️❗️❗️ Примітивний типи

// number
// string
// boolean
// null
// undefined
// bigint
// symbol

// ❗️❗️❗️ Взаємодія з користувачем

// - виведення даних:

// console.log("Hello!");
// alert("Hello!");

// - отримання даних:
// const answer = confirm("Is your name Ivan?"); // користувач може відповісти так або відхилити питання
// console.log(answer)
// prompt("What is your name?"); // користувач  може ввести якісь дані або відхилити питання
// const age = prompt("How old are you?");
// console.log(age)
// console.log(typeof age)


// ❗️❗️❗️ Додавання із заміною (також є для всіх інших операторів)

// let value = 5;
// value = value + 10;
// console.log(value) // 15
// value = value + 10;
// console.log(value) // 25

// value += 10;
// console.log(value); // 15
// value += 10;
// console.log(value); // 25

// let value1 = 10;
// value1 = value1 - 2;
// console.log(value1) // 8
// value1 = value1 -2 ;
// console.log(value1) // 6

// value1 -= 2;
// console.log(value1); // 8
// value1 -= 2;
// console.log(value1); // 6

// Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)

// ❗️❗️❗️ Загальні правила порівняння

// Результатом порівняння буде бульове значення.

// При порівнянні різних типів операнди приводяться до числа (крім операторів === та !==)
// null не дорівнює нічому крім себе та undefined.
// undefined не дорівнює нічому крім себе та null.
// NaN не дорівнює нічому, навіть самому собі
// Рядки між собою порівнюються за unicode (посимвольно).

// ❗️❗️❗️ Правила приведення різних типів до числа:

// true --> 1
// false --> 0
// '', а також рядок з пробілами --> 0
// null --> 0
// undefined --> NaN
// не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); // false
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false
// console.log("4" != 4); // false
// console.log("4" !== 4); // true
// console.log(null > 0) // false
// ,,,,,,,,,,,,,,,,,,,console.log(null >= 0) // true

// ❗️❗️❗️ Number.isNaN

// const a = 123;
// const b = "qwerty";

// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// const toNumber = Number(b);
// console.log(toNumber); // NaN
// console.log(Number.isNaN(toNumber)); // true
// console.log(toNumber == NaN) //

// const data = prompt("Enter a number, please");
// console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);


// const num1 = 0.3;
// const num2 = 0.6;
// const sum1 = num1 + num2;
// console.log(sum1)
// console.log((num1*100 + num2*100) / 100 )
// console.log(sum1.toFixed(1));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(fixedSum1);

// ❗️❗️❗️ Приведення до рядка
// const num = 123;
// console.log(num)
// const str1 = String(num)
// console.log(str1)
// const str2 = num + ''
// console.log(str2)
// const str3 = num.toString()
// console.log(str3)

// ❗️❗️❗️ Шаблонні рядки
// const userName = prompt('What is your name');
// const age = prompt('How old are your');

// const message = `My name is ${userName}. I am ${age} years old.`
// alert(message)

// const word1 = "     ";
// console.log(word1.length);

// ❗️❗️❗️ Операції з приведенням типів

// console.log(2 + 5 + "" + 1 + 0 - 10); // 700
// console.log('710bjk' - 10); // NaN
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// console.log(true - "false"); // NaN
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '42'
// console.log("4" / 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log(" -9 "+ 5); // ' -9 5'

// ❗️❗️❗️ Методи рядків

// const word2 = "hTMl";
// console.log(word2.toLowerCase()) // html
// console.log(word2.toUpperCase()) // HTML

// const word3 = "superjavascript";
// const substring1 = "java";
// const substring2 = "css";

// console.log(word3.indexOf(substring1)); // 5
// console.log(word3.indexOf(substring2)); // -1

// const word4 = "banana";
// console.log(word4.indexOf("a")); // 1
// console.log(word4.lastIndexOf("a")); // 5
// console.log(word4.indexOf("n")); // 2
// console.log(word4.lastIndexOf("n")); // 4

// const sentense = "two tasty bananas";
// console.log(sentense.indexOf(" ")); // 3
// console.log(sentense.indexOf("tasty bananas")); // 4

// console.log(word3.includes(substring1)); // true
// console.log(word3.includes("Java")); // false
// console.log(word3.includes(substring2)); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(jsFileName) // "script.js"
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames1 = cssFileNames.replace(".css", ".min.css");
// console.log(minifiedCssFileNames1); // "styles.min.css, about.css, portfolio.css"
// const minifiedCssFileNames2 = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames2); // "styles.min.css, about.min.css, portfolio.min.css"

// const word5 = "javascript";

// const word6 = word5.slice();
// console.log(word6); // 'javascript'
// console.log(word5.slice(0, word5.length)); // 'javascript'
// console.log(word5.slice(0)); // 'javascript'
// console.log(word5.slice(0, 10)); // 'javascript'

// console.log(word5.slice(3)); // 'ascript'

// const word7 = word5.slice(0, 4);
// console.log(word7); // 'java'
// console.log(word5.slice(4)); // 'script'
// console.log(word5.slice(-6, -3)); // 'scr'
// console.log(word5.slice(-1)); // 't'
// console.log(word5.slice(-6)); // 'script'

// console.log('    a    '.trim().length) // 1


// ❗️❗️❗️  Логічні операторы (&&,  ||,  !)

// У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// (falsy) значення, що приводяться до false у логічному перетворенні:
// 0
// NaN
// null
// undefined
// порожній рядок
// false.

// Абсолютно все інше приводиться до true.

// && - запинається на false
// Якщо всі операнди були приведені до true, повертається остання.
// Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// || - запинається на true
// Повертає перше правдиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// ! - інвертує true в false, або false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi"); // 'kiwi'
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4

// ?? - оператор нульового злиття

// console.log(null ?? 1)
// console.log(undefined ?? 1)
// console.log(false ?? 1)
// Change code below this line

// Заняття 1-2
// ❗️❗️❗️ Оператори розгалудження

// const number1 = Number(prompt("Enter a number 1, please"));
// console.log(number1);
// const number2 = Number(prompt("Enter a number 2, please"));
// console.log(number2);

// if (number1 > number2) {
    //      console.log('I am here')
    // }

// if (number1 > number2) {
    //     console.log('+')
    // } else {
    //     console.log('-')
    // }

// if (number1 > number2) {
    // console.log(">");
    // } else if (number1 === number2) {
    // console.log("=");
    // } else if (number1 < number2) {
    // console.log("<");
    // }
    
// if (number1 > number2) {
//   console.log(">");
// } else if (number1 === number2) {
//   console.log("=");
// } else {
//   console.log("<");
// }

// if (number1 > number2) {
//   console.log(">");
// } else {

//   if (number1 === number2) {
//     console.log("=");
//   } else {
//     console.log("<");
//   }

// }

// if(number1 > 50 && number2 > 50) {
//     console.log('super')
// }

// ❗️❗️❗️ Тернарний оператор

// const number1 = 100

// if (number1 > 20) {
    //  console.log('true')
    // } else {
    //     console.log('false')
    // }

// number1 > 20 ? console.log('true') : console.log('false')

// const number2 = 20;
// number2 > 20
//   ? console.log(">")
//   : number2 === 20
//   ? console.log("=")
//   : console.log("<");

// ❗️❗️❗️ Switch

// const number = Number(prompt("Enter a number berween 0 and 3"));

// switch (number) {
    //      case 0:
        //          console.log("Your entered 0");
        //         break;
    //    case 1:
        //         console.log("Your entered 1");
        //          break;
    //      case 2:
        //         console.log("Your entered 2");
        //         break;
    //     case 3:
        //         console.log("Your entered 3");
        //          break;
    //     default:
        //          console.log("Your entered another number");
    // }

// if (number === 0) {
//   console.log("Your entered 0");
// } else if (number === 1) {
//   console.log("Your entered 1");
// } else if (number === 2) {
//   console.log("Your entered 2");
// } else if (number === 3) {
//   console.log("Your entered 3");
// } else {
//   console.log("Your entered another number");
// }


// ❗️❗️❗️ Області видимості

// const a = 1;
// console.log(b)

// if (true) {
//  const a = 2;
//     const b = 3;
//  console.log(a)
//     if (true) {
//         const a = 4;
// console.log(a)
//     }
//     if (true) {
//  const a = 4;
//         console.log(a)
//     }
// }
// console.log(b)

// let a = 1;

// if (true) {
//   a = 2;
//  console.log(a)
// }

// console.log(a);

// ❗️❗️❗️ Цикли

//let password = "";

//do {  password = prompt("Введіть пароль довший 4-х символів", "");
//} while (password.length < 5);

// console.log("Ввели пароль: ", password);



// let counter = 1;

//while (counter <= 5) {
    //     console.log("counter: ", counter);
    //     counter = counter + 1
    //      counter += 1;
    //}

// console.log('next')

//let number

// do {
    //      console.log('here')
    //      number = prompt('Input number, that bigger then 100')
    // } while (number <= 100)

// console.log(number)

// for (let i = 0; i <= 3; i += 1) {
//     console.log(i);
// }

//let word = "";

//for (let i = 0; i < 3; i += 1) {
    //     console.log("Iteration:", i + 1);
    //      console.log("previous string:", word);
    //     console.log(i);
    //    word += i;
    //     console.log("next string:", word);
    // }
//  https://monosnap.com/file/agY6GyBSoMjnf2o9L6IdU4vRnGdZPm
// console.log('final:', word)

// const word = "css";
// let word2 = "";

// for (let i = 0; i < word.length; i += 1) {
//   console.log("Iteration:", i + 1);
//   console.log('i', i)
//   console.log("previous string", word2);
//   console.log(word[i]);

//   word2 += word[i];
//   console.log("next string", word2);
// }

// https://monosnap.com/file/R8e4VDAfvT1CzBHBp9pY0uyEdvsIe6
// console.log(word2);

// const num1 = 5
// const num2 = 10

// for (let i = num2; i >= num1; i -= 1) {
    //    console.log(i)
    // }

// for(let a = 100; a > 50; a -= 10) {
//     console.log(a)
// }

// for (let i = 0; i <= 5; i += 1) {
    //       console.log(i);

    //      if (i === 2) {
        //           console.log("Знайшли число 2, перериваємо виконання циклу");
        //          break;
        //      }
    //  }

// console.log("Лог після циклу");

// for (let i = 0; i < 15; i += 1) {
    //      console.log('before', i);
    //     if (i / 3 === 4 || i / 2 === 5) {
        //           continue;
        //      }
    //     console.log('after', i);
    //  }



// a:
// for (let i = 0; i < 3; i+=1) {
// console.log('i', i)
//    b:
//    for (let j = 0; j < 3; j+=1) {
//     console.log('  j', j)
//       if (i === 1 && j === 1) {
//          break a;
//       }
//    }
// }
// AUTOPEREVIRKU//
// Change code below this line
//function add(a, b, c) {
//console.log(`Addition result equals ${a + b+ c}`);
 //return a + b + c;
  //}
//add(2, 5, 8); // 15
//console.log(add(15, 27, 10));
//console.log(add(10, 20, 30));
//console.log(add(5, 10, 15));

//function add(a, b, c) {
 // console.log(`Addition result equals ${a + b+ c}`);
  // Change code above this line
//}

//add(15, 27, 10);
//add(10, 20, 30);
//add(5, 10, 15);

//function makeMessage(name, price) {
  // Change code below this line
   //const message = `You picked ${name}, price per item is ${price} credits`;
 //console.log(message);
  // Change code above this line
 // return message;
//}

//makeMessage('Radar', 6150);
//makeMessage('Scanner', 3500);
//makeMessage('Reactor', 8000);
//makeMessage('Engine', 4070);
//function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  //const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  //console.log(totalPrice)
  //return totalPrice;
// };
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);
//function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
 //const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery ${deliveryFee} credits is included in total price.`;   
  //  console.log(message);   
    


  // Change code above this line
 // return message;
//};
//makeOrderMessage(2, 100, 50);
//makeOrderMessage(4, 300, 100);
//makeOrderMessage(10, 70, 200);
//function isAdult(age) {
    // Change code below this line
  //  const passed = ${ age >= 18
//};

  // Change code above this line
  //return passed;
//};
//console.log.isAdult(20);
//isAdult(8);
//isAdult(8);
//isAdult(37);
//function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  //  let message; 
  //  const totalPrice = pricePerDroid * orderedQuantity;
//if(totalPrice > customerCredits) {message = "Insufficient funds!";
   // } else {message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
   // }
  // Change code above this line
 // return message;
//};
//makeTransaction(3000, 5, 23000);
//makeTransaction(1000, 3, 15000);
//makeTransaction(5000, 10, 8000);
//makeTransaction(2000, 8, 10000);
//makeTransaction(500, 10, 5000);
//function getDiscount(totalSpent) {
 // const BASE_DISCOUNT = 0;
 // const BRONZE_DISCOUNT = 0.02;
  //const SILVER_DISCOUNT = 0.05;
 // const GOLD_DISCOUNT = 0.1;
 //let discount;
  // Change code below this line
   // if (totalSpent >= 50000) {
      //  discount = GOLD_DISCOUNT;
    //} else if (totalSpent >= 20000 && totalSpent < 50000) {
    //    discount = SILVER_DISCOUNT;
   // } else if (totalSpent >= 5000 && totalSpent < 20000) {
    //    discount = BRONZE_DISCOUNT;
    //} else if (totalSpent < 5000) {
    //    discount = BASE_DISCOUNT;
   // }
  // Change code above this line
  //return discount;
//};
//console.log(getDiscount(137000));
//console.log(getDiscount(46900));
//console.log(getDiscount(8250));
//console.log(getDiscount(1300));
//console.log(getDiscount(5000));
//console.log(getDiscount(20000));
//console.log(getDiscount(50000));
//function checkPassword(password) {
  //const ADMIN_PASSWORD = "jqueryismyjam";
 // let message;
  // Change code below this line
//switch (password) {
   // case null:
   // message = "Canceled by user!";
   // break;
    
   // case ADMIN_PASSWORD:   
   // message = "Welcome!";
   // break;

  //  default:
 //   message = "Access denied, wrong password!";
 // }

  // Change code above this line
 // return message;
//};
//console.log(checkPassword("mangohackzor"));
//console.log(checkPassword(null));
//console.log(checkPassword("polyhax"));
//console.log(checkPassword("jqueryismyjam")); 
//function getShippingCost(country) {
//    let message;
//    let price;
  // Change code below this line
//switch (country) {
  //  case "China":
   //     price = 100;
    //    message = `Shipping to ${country} will cost ${price} credits`;
      //  break;
    
 //   case "Chile":
 //       price = 250;
  //      message = `Shipping to ${country} will cost ${price} credits`;
    //    break;
      //  
 //     case "Australia":
   //     price = 170;
     //   message = `Shipping to ${country} will cost ${price} credits`;
       // break;  
    
   // case "Jamaica":
     //   price = 120;
       // message = `Shipping to ${country} will cost ${price} credits`;
     //   break; 
    
//      default: 
//   message = "Sorry, there is no delivery to your country"
//}
  // Change code above this line
  //return message;
//};
//console.log(getShippingCost("Australia"));
//console.log(getShippingCost("Germany"));
//console.log(getShippingCost("China"));
//console.log(getShippingCost("Chile"));
//console.log(getShippingCost("Jamaica"));
//console.log(getShippingCost("Sweden"));

//function getNameLength(name) {
 // const message = `Name ${name} is ${name.length} characters long`; // Change this line

 // return message;
//};
//console.log(getNameLength("Poly"));
//console.log(getNameLength("Harambe"));
//console.log(getNameLength("Billy"));
///console.log(getNameLength("Joe"));

//function getSubstring(string, length) {
 // const substring = string.slice(0, length); // Change this line

 // return substring;
//};
//console.log(getSubstring("Hello world", 3));
//console.log(getSubstring("Hello world", 6));
//console.log(getSubstring("Hello world", 8));
//console.log(getSubstring("Hello world", 11));
//console.log(getSubstring("Hello world", 0));

//function formatMessage(message, maxLength) {
  //let result;
  // Change code below this line
   // if (message.length <= maxLength) {
    //    result = message;
   // } else { result = message.slice(0, maxLength) + "...";}
  /// Change code above this line
  //return result;
//};
//console.log(formatMessage("Curabitur ligula sapien", 16));
//console.log(formatMessage("Curabitur ligula sapien", 23)); 
//console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//console.log(formatMessage("Vestibulum facilisis purus nec", 30));
//console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
//console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

//function normalizeInput(input) {
  //const normalizedInput = input.toLowerCase(); // Change this line

 // return normalizedInput;
//};
//console.log(normalizeInput("Hello world"));
//console.log(normalizeInput("This ISN'T SpaM"));
//console.log(normalizeInput("Big SALE"));
//function checkForName(fullName, name) {
 //const result = fullName.includes(name); // Change this line
 // return result;
//};
//console.log(checkForName("Egor Kolbasov", "Egor")); // true
//console.log(checkForName("Egor Kolbasov", "egor"))
//console.log(checkForName("Egor Kolbasov", "egOr"))
//console.log(checkForName("Egor Kolbasov", "Zhenya"))
//console.log(checkForName("Vadim Nekrasov", "Vadim"))
//console.log(checkForName("Vadim Nekrasov", "vadim"))
//console.log(checkForName("Vadim Nekrasov", "Dima"))

//function checkForSpam(message) {
 // let result;
  // Change code below this line
 // message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? result = true : result = false;
  // Change code above this line
 // return result;
//};
//console.log(checkForSpam("Latest technology news"));
//console.log(checkForSpam("JavaScript weekly newsletter"));
//console.log(checkForSpam("Get best sale offers now!"));
//console.log(checkForSpam("Amazing SalE, only tonight!"));
//console.log(checkForSpam("Trust me, this is not a spam message"));
//console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
//console.log(checkForSpam("[SPAM] How to earn fast money?"));