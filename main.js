//function a(x){
//    x()
//}
//function b()
//{
//    console.log("b");
//}
 //
//a(b)

//let arr = [1, 2, 3, 4, 5, 6, 7];

//let new_arr = arr.map (function (el) {
//    if (el % 2 == 0){
//        return "juft";
//    }else return "toq"; 
//    return el % 2 == 0 ? "juft" : "toq"
//});
//console.log(new_arr)// Foydalanuvchidan son kiritish
//let number = [
//    ["o'n", "yigirma", "o'ttiz", "qirq", "elik", "oltmish", "yetmish", "saksons", "to'qson"]
//    ["bir", "ikki", "uch", "to'rt", "besh", "olti", "yeti", "sakiz", "to'qiz"]
//];
//let num = prompt("Son ayting!");
//let result = num .split("") .map((el, i) => n)
// Foydalanuvchidan so'z kiritishni so'raymiz
////////////let kiritilganSoz = prompt("Iltimos, bir so'z kiriting:");
//let sozBoyginlar = kiritilganSoz.split('');

//for (let i = 0; i < sozBoyginlar.length; i++) {
//  console.log(sozBoyginlar[i]);
//}

//UY ISHI
//81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
//bo’g’in borligini aytsin.
//function countSyllables(word) {
//  word = word.toLowerCase().replace(/[^a-z]/g, ''); 
//  if (word.length <= 3) return 1; 

//  let syllableCount = 0;
//  let prevCharWasVowel = false;

//  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; 

//  for (let i = 0; i < word.length; i++) {
//    const currentChar = word[i];
//    const isVowel = vowels.includes(currentChar);
//    if (isVowel && !prevCharWasVowel) {
//      syllableCount++;
//    }
 //   prevCharWasVowel = isVowel;
//  }

  
//  const endings = ['es', 'ed', 'e']; 
//  endings.forEach((ending) => {
//    if (word.endsWith(ending)) {
//      syllableCount--;
//    }
//  });

//  return syllableCount || 1; 
//}

//console.log(countSyllables("Hehehehehehe")); 
//console.log(countSyllables("bobobobobobobobo")); 
//console.log(countSyllables("NANANA")); 

//82.Funskiyaga belgi kiritilsa ushbu belgining ASCII kodini
//qaytarsin.
//function getASCIICode(character) {
//  return character.charCodeAt(0);
//}

//console.log(getASCIICode('A')); 
//console.log(getASCIICode('m')); 
//console.log(getASCIICode('[')); 

//83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
//bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta
//yoki kichik harflarda yozilgani ahamiyatsiz deb oling.
//function areWordsEqualIgnoreCase(word1, word2) {
//  return word1.toLowerCase() === word2.toLowerCase();
//}

//console.log(areWordsEqualIgnoreCase('Hello', 'hello'));
//console.log(areWordsEqualIgnoreCase("motive", "emotive")); 
//console.log(areWordsEqualIgnoreCase("venom", "VENOM")); 
//console.log(areWordsEqualIgnoreCase("mask", "mAskinG")); 


//84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta
//belgidan iborat ekanligini qaytarsin. Bunda string.length
//propertisizdan foydalanish mumkin emas !!!
//function countCharacters(word) {
//  let count = 0;
//  while (word[count] !== undefined) {
//    count++;
//  }
//  return count;
//}

//console.log(countCharacters("Hello World")); 
//console.log(countCharacters("Edabit")); 
//console.log(countCharacters("wash your hands!")); 
//85.Karona virusdan tuzalganlar soni, yangi kasallanganlar
//soni va hozirda kasallar soni natijalari qo’limizda mavjud.
//Tuzalganlar soni va yangi kasallar soni har kuni bir xil natija.
//Funksiya necha kundan keyin barcha tuzalishini qaytarsin.
//function endCorona(recoveriesPerDay, newCasesPerDay, currentCases) {
//  let days = 0;

//  while (currentCases > 0) {
//    currentCases += newCasesPerDay - recoveriesPerDay;
//    days++;

//    if (currentCases < 0) {
//      break;
//    }
//  }

//  return days;
//}

//console.log(endCorona(4000, 2000, 77000)); // Output: 39
//console.log(endCorona(3000, 2000, 50699)); // Output: 51
//console.log(endCorona(30000, 25000, 390205)); // Output: 79

//86.Quyidagi namunani kuzatgan holda funkisya yasang
//function namuna(arr) {
//  let result = [];

//  for (let i = 0; i < arr.length; i++) {
//    result.push(arr[i] * 2);
//  }

//  return result;
//}

//console.log(namuna([2, 5, 3]));
//console.log(namuna([1, 86, -5]));
//console.log(namuna([5, 382, 0]));

//87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
//so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.
//function wordLengths(arr) {
//  let lengths = [];

//  for (let i = 0; i < arr.length; i++) {
//    lengths.push(arr[i].length);
//  }

//  return lengths;
//}

//console.log(wordLengths(["hello", "world"])); 
//console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); 
//console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));

//88.Taksi kilometriga 1000 so’mdan haq oladi. Lekin birinchi
//kilometri 4000 so’m. Agar funksiya taksiga to’langan yakuniy
//summani qabul qilsa. Funksiya taksining necha kilometr
//yurganini qaytarsin.
//function taksi(totalSum) {
//  const firstKilometerCost = 4000; 
//  const otherKilometerCost = 1000; 

  
//  if (totalSum <= firstKilometerCost) {
//    return 1; 
//  }

 
//  const remainingSum = totalSum - firstKilometerCost;
//  const additionalKilometers = Math.ceil(remainingSum / otherKilometerCost);

//  return additionalKilometers + 1; 
//}

//console.log(taksi(4000)); 
//console.log(taksi(7000)); 
//console.log(taksi(5000));

//89.Funksiya matn qabu qilsa, ushbu funksiya ushbu matnda “d”
//harfi nechi marta ishtirok etganligini qaytarsin. “d” harfining
//katta kichikligini ahamiyati yo’q.
//function dlar(text) {
  //const count = (text.match(/d/gi) || []).length;
  //return count;
//}

//console.log(dlar("My friend Dylan got distracted in school."));
//console.log(dlar("Debris was scattered all over the yard.")); 
//console.log(dlar("The rodents hibernated in their den.")); 

//90.Funksiya string qabul qiladi. Va har belgini orasiga bo’sh joy
//qo’yib qaytarsin
//function boshJoy(str) {
//  return str.split('').join(' ');
//}

//console.log(boshJoy("space")); // Chiqaradi: "s p a c e"
//console.log(boshJoy("far out")); // Chiqaradi: "f a r   o u t"
//console.log(boshJoy("elongated musk")); // Chiqaradi: "e l o n g a t e d   m u s k"

//91.Funksiya 2ta son argument qabul qiladi. Funksiya shunday
//qiymat qaytarsinki, ushbu qiymat ana shu ikkala sondan katta
//va 2-chi songa bo’linsin.
//function greaterDividedByTwo(a, b) {
//  const maxNumber = Math.max(a, b);

//  const result = (maxNumber + 1) / 2;

//  return result;
//}
//console.log(greaterDividedByTwo(17, 8)); // Output: 9
//console.log(greaterDividedByTwo(98, 3)); // Output: 50.5
//console.log(greaterDividedByTwo(14, 11)); // Output: 7.5

//92.Agar men cafedan 3ta kofe olsam yana 1ta tekinga qo’shib
//berishadi. Funksiya nechta kofe olsam meni qo’limda jami
//nechta kofe bo’lishini qaytarsin.
//function totalCoffees(coffees) {
  //const cupsPerPurchase = 3; 
  //const extraCup = 1; 

  //const total = coffees + Math.floor(coffees / cupsPerPurchase);

  //return total;
//}
//console.log(totalCoffees(4)); 
//console.log(totalCoffees(10)); 
//console.log(totalCoffees(200)); 

//93.Funksiyaga string va son berilsa, ushbu stringning oxirigi
//belgisini funksiya son marta takrorlab qaytarib bersin.
//function namuna(str, num) {
//  return str + str.slice(-1).repeat(num);
//}

//console.log(namuna("Hello", 3)); // Chiqaradi: "Hellooo"
//console.log(namuna("hey", 6)); // Chiqaradi: "heyyyyyy"
//console.log(namuna("excuse me what?", 5)); // Chiqaradi: "excuse me what?????"

//94.Funksiyaga sonlar massivi berilsa, Ana shu massivdagi 5dan
//katta bo’lgan elementlarni yig’indiisini qaytarsin.
//function namuna(arr) {
//  let sum = 0;

//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > 5) {
//      sum += arr[i];
//    }
//  }

//  return sum;
//}

//console.log(namuna([1, 5, 20, 30, 4, 9, 18])); 
//console.log(namuna([1, 2, 3, 4])); 
//console.log(namuna([10, 12, 28, 47, 55, 100])); 

//95.Funksiyaga massiv berilsa, ushbu funksiya massiv elementlarini barchasini yig’indisini qaytarsin.
//function Namuna(arr) {
//  let sum = 0;

//  for (let i = 0; i < arr.length; i++) {
//    sum += arr[i];
//  }

//  return sum;
//}

//console.log(Namuna([2, 7, 4])); 
//console.log(Namuna([45, 3, 0])); 
//console.log(Namuna([-2, 84, 23]));

//96.Funksiyaga faylning manzili kiritiladi. Funksiya ushbu
//ma’lumotdan faylining nomi ajratib bersin
//function Namuna(filePath) {
//  const parts = filePath.split('/');
//  const fileName = parts[parts.length - 1];
  
//  return fileName;
//}

//console.log(Namuna("C:/Projects/pil_tests/ascii/edabit.txt")); 
//console.log(Namuna("C:/Users/johnsmith/Music/Beethoven_5.mp3")); 
//console.log(Namuna("ffprobe.exe")); 

//97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
//yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
//funksiya Doston uyiga qaytishi uchun qancha masofa bosib
//o’tishini aytsin
//function Namuna(distances) {
//  const totalDistance = distances.reduce((acc, val) => acc + val, 0);
//  return Math.abs(totalDistance);
//}

//console.log(Namuna([2, 4, 2, 5])); 
//console.log(Namuna([-1, -4, -3, -2])); 
//console.log(Namuna([3, 4, -5, -2])); 
//98.Funksiya uchburchakning tomonlari argument qilib beriladi.
//Agar ushbu berilgan tomonlardan uchburchak yasab bo’lsa
//unda funksiya true qaytarsin, aks holda false. Uchburchakning
//qoida, istalgan 2ta tomonining yig’igindisi uchunchi tomondan
//katta bo’lsagina uchburchak hosil bo’ladi.
//function Namuna(a, b, c) {
//  if ((a + b > c) && (b + c > a) && (a + c > b)) {
//    return true;
//  } else {
//    return false;
//  }
//}

//console.log(Namuna(2, 3, 4)); 
//console.log(Namuna(3, 4, 5)); 
//console.log(Namuna(4, 3, 8)); 

//99.Funksiya 2 son oralig’gini qabul qilsa, ushbu 2ta son
//orasidagi sonlardan tuzilgan massivni ushbu funksiya
//qaytarsin
//function Namuna(num1, num2) {
//  const result = [];
//  for (let i = num1 + 1; i < num2; i++) {
//    result.push(i);
//  }
  
//  return result;
//}

//console.log(Namuna(2, 4)); 
//console.log(Namuna(5, 9)); 
//console.log(Namuna(2, 11)); 

//100.Quyidagi namunani kuzatgan holda funksiya yasang.
//function Namuna(input) {
//  const [tagName, count] = input.split('*');
//  const result = [];
  
//  for (let i = 0; i < count; i++) {
//    result.push(`<${tagName}></${tagName}>`);
//  }
  
//  return result.join('');
//}

//console.log(Namuna("div*2"));
//console.log(Namuna("p*1")); 
//console.log(Namuna("li*3")); 

//101.Funksiya butun son qabul qilsa, 1dan ushbu butun
//songacha bo’lgan sonlar yig’indisini qaytarsin.
//function namuna(num) {
//  let sum = 0;

//  for (let i = 1; i <= num; i++) {
//    sum += i;
//  }

//  return sum;
//}

//console.log(namuna(3)); 
//console.log(namuna(10)); 
//console.log(namuna(7)); 

//102.Funskiya son va object qabul qiladi. Objectni ichida min va
//max degan propertilar mavjud. Agar ushbu son min va maxni
//oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

//function Namuna(num, obj) {
//  return num >= obj.min && num <= obj.max;
//}

//console.log(Namuna(4, { min: 0, max: 5 })); // Chiqaradi: true
//console.log(Namuna(4, { min: 4, max: 5 })); // Chiqaradi: true
//console.log(Namuna(4, { min: 6, max: 10 })); // Chiqaradi: false
//console.log(Namuna(5, { min: 5, max: 5 })); // Chiqaradi: true

//103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
//ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
//bo’lsa funksiya true qaytarsin, aks holda false.
//function Namuna(num) {
//  const squared = num * num;
//  const lastDigit = squared % 10;

//  return lastDigit === num % 10;
//}

//console.log(Namuna(1)); 
//console.log(Namuna(3)); 
//console.log(Namuna(6)); 
//console.log(Namuna(99)); 

//104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
//massiv qaytarsin
//function Namuna(arr) {
//  return arr.map((_, index) => index);
//}

//console.log(Namuna([0, 0, 0, 0, 0])); // Chiqaradi: [0, 1, 2, 3, 4]
//console.log(Namuna([1, 2, 3, 4, 5])); // Chiqaradi: [1, 3, 5, 7, 9]
//console.log(Namuna([5, 4, 3, 2, 1])); // Chiqaradi: [5, 5, 5, 5, 5]


//105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
//ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
//shakari bor ichimliklar ro’yxati:
//cola//
//function Namuna(arr) {
//  const shakarliIchimliklar = ["cola", "fanta"];
//  return arr.filter(item => !shakarliIchimliklar.includes(item));
//}

//console.log(Namuna(["fanta", "cola", "water"])); // Chiqaradi: ["water"]
//console.log(Namuna(["fanta", "cola"])); // Chiqaradi: []
//console.log(Namuna(["lemonade", "beer", "water"])); // Chiqaradi: ["lemonade", "beer", "water"]

//106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
//raqam borligini qaytarsin
//function Namuna(num) {
  //const numStr = num.toString();
  //return numStr.length;
//}

//console.log(Namuna(123));
//console.log(Namuna(56));
//console.log(Namuna(7154));
//console.log(Namuna(61217311514)); 
//console.log(Namuna(0));

//107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
//o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
//bo’lgan sonni qaytarsin
//function Namuna(num) {
  //const numStr = num.toString();
  //const sortedNum = numStr.split('').sort((a, b) => b - a).join('');
  //return parseInt(sortedNum, 10);
//}

//console.log(Namuna(123)); 
//console.log(Namuna("001")); 
//console.log(Namuna(999)); 
//console.log(Namuna(784));

//108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
//oraliqdan bironta random son qaytarsin.
//function Namuna(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
//}

//console.log(Namuna(5, 9)); 
//console.log(Namuna(5, 9)); 
//console.log(Namuna(5, 9)); 

//109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
//degani sonning har bir raqamini sonning uzunligi miqdorida
//darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.

//function Namuna(num) {
  //const numStr = num.toString();
  //const length = numStr.length;
  //let sum = 0;

  //for (let i = 0; i < length; i++) {
  //  sum += Math.pow(parseInt(numStr[i]), length);
  //}

  //return sum === num;
//}

//console.log(Namuna(153)); // true
//console.log(Namuna(370)); // true
//console.log(Namuna(1652)); // false

//110.Funksiya string qabul qiladi.Funksiya ushbu stringda
//nechta katta harf ishtirok etganin qaytarsin.
//function Namuna(str) {
  //let count = 0;

  //for (let i = 0; i < str.length; i++) {
    //if (str[i] >= 'A' && str[i] <= 'Z') {
    //  count++;
    //}
  //}

  //return count;
//}

//console.log(Namuna("fvLzpxmgXSDrobbgMVrc")); 
//console.log(Namuna("JMZWCneOTFLWYwBWxyFw")); 
//console.log(Namuna("mqeytbbjwqemcdrdsyvq")); 

//11.calculate the average of the numbers in an array of numbers
//function calculateAverage(arr) {
  //if (arr.length === 0) {
    //return 0; 
  //}

 // const sum = arr.reduce((acc, curr) => acc + curr, 0);
 // const average = sum / arr.length;

 // return average;
//}

//const numbers = [4, 7, 10, 3, 8];
//const average = calculateAverage(numbers);
//console.log("The average is:", average);

//12.Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
//function getPositiveNumbers(arr) {
  //return arr.filter(number => number > 0);
//}

//const numbers = [-2, 5, 0, 10, -8, 3];
//const positiveNumbers = getPositiveNumbers(numbers);
//console.log("Positive numbers:", positiveNumbers);

//13.Find the maximum number in an array of numbers
//function findMaxNumber(arr) {
  //if (arr.length === 0) {
  //  return undefined; // Return undefined for an empty array
  //}
  
  //return Math.max(...arr);
//}

//const numbers = [5, 8, 3, 12, 9];
//const maxNumber = findMaxNumber(numbers);
//console.log("The maximum number is:", maxNumber);

//14.Print the first 10 Fibonacci numbers without recursion
//function generateFibonacciNumbers(count) {
//  const fibonacciNumbers = [0, 1]; 

//  for (let i = 2; i < count; i++) {
//    const prev1 = fibonacciNumbers[i - 1];
//    const prev2 = fibonacciNumbers[i - 2];
//    fibonacciNumbers.push(prev1 + prev2);
//  }

//  return fibonacciNumbers.slice(0, count);
//}


//const firstTenFibonacci = generateFibonacciNumbers(10);
//console.log("First 10 Fibonacci numbers:", firstTenFibonacci);

//15.Create a function that will find the nth Fibonacci number using recursion
//function fibonacciRecursive(n) {
//  if (n <= 1) {
//    return n;
//  }
  
//  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
//}

//const n = 10;
//const nthFibonacci = fibonacciRecursive(n);
//console.log(`The ${n}th Fibonacci number is:`, nthFibonacci);

//16.Create a function that will return a Boolean specifying if a number is prime
//function isPrime(number) {
//  if (number <= 1) {
//    return false; 
//  }

 
//  for (let i = 2; i <= Math.sqrt(number); i++) {
//    if (number % i === 0) {
//      return false; 
//    }
 // }

//  return true; 
//}


//const num = 17;
//const result = isPrime(num);
//console.log(`${num} is prime:`, result);

//17.Calculate the sum of digits of a positive integer number javascript
//function sumOfDigits(number) {
//  let sum = 0;
//  while (number > 0) {
//    sum += number % 10; 
//    number = Math.floor(number / 10); 
//  }
//  return sum;
//}


//const num = 12345;
//const sum = sumOfDigits(num);
//console.log(`The sum of digits of ${num} is:`, sum);

//18.Print the first 100 prime numbers javascript
//function isPrime(number) {
//  if (number <= 1) {
//    return false;
//  }

//  for (let i = 2; i <= Math.sqrt(number); i++) {
//    if (number % i === 0) {
//      return false;
//    }
//  }

  //return true;
//}

//function printFirstNPrimes(n) {
//  let count = 0;
//  let currentNumber = 2;

//  while (count < n) {
//    if (isPrime(currentNumber)) {
//      console.log(currentNumber);
//      count++;
//    }
//    currentNumber++;
//  }
//}


//printFirstNPrimes(100);

//19.Create a function that will return in an array the first "p" prime numbers greater than "n" javascript
//function isPrime(number) {
//  if (number <= 1) {
//    return false;
//  }

//  for (let i = 2; i <= Math.sqrt(number); i++) {
//    if (number % i === 0) {
//      return false;
//    }
//  }

//  return true;
//}

//function firstPrimesGreaterThanN(p, n) {
//  const primes = [];
//  let currentNumber = n + 1;

//  while (primes.length < p) {
//    if (isPrime(currentNumber)) {
//      primes.push(currentNumber);
//    }
//    currentNumber++;
//  }

//  return primes;
//}


//const result = firstPrimesGreaterThanN(10, 50);
//console.log("First 10 prime numbers greater than 50:", result);

//20.Rotate an array to the left I position javascript
//function rotateLeft(arr, positions) {
//  const n = arr.length;
//  const shiftAmount = positions % n; 

//  if (shiftAmount === 0) {
//    return arr; 
//  }

//  const leftPart = arr.slice(shiftAmount);
//  const rightPart = arr.slice(0, shiftAmount);

//  return leftPart.concat(rightPart);
//}


//const myArray = [1, 2, 3, 4, 5];
//const rotatedArray = rotateLeft(myArray, 2);
//console.log("Original array:", myArray);
//console.log("Rotated array:", rotatedArray);


