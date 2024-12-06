// let m = [85, 84, 95, 90, 50];
// let sum = 0;
// for (let i = 0; i < m.length; i++) {
//     sum += m[i];
// }
// let avg = sum / m.length;

// console.log("Average marks of the class: " + avg);


// let arr = ["microsoft", "uber", "google", "ibm", "netflix"];


// let rmlast = arr.pop();
// console.log("Removed last item:", rmlast);
// console.log("Array after removing last item:", arr);

// arr.slice(2,2,"boomberg")
// console.log("Array after removing google and ibm and adding bloomberg:", arr);


// arr.push("amazon");
// console.log("Final array after adding amazon:", arr);

// let a=[1,2,3,4,5];
// a.forEach(function(a) {
//     console.log(a * a);
// });


// let marks = [
//     { name: "A", marks: 85 },
//     { name: "B", marks: 92 },
//     { name: "C", marks: 88 },
//     { name: "D", marks: 95 },
//     { name: "E", marks: 78 },
//     { name: "F", marks: 90 }
// ];


// let st90= [];

// marks.forEach(i => {
//     if (i.marks >= 90) {
//         st90.push(i);
//     }
// });

// console.log(st90);




// let n = prompt("Enter a number:");
// n = Number(n);
// let numbers = [];
// for (let i = 1; i <= n; i++) {
//   numbers.push(i);
// }
// let sum1 = numbers.reduce((prev, curr) => prev + curr, 0);
// let product = numbers.reduce((prev, curr) => prev * curr, 1);
// console.log("Sum of all numbers:", sum);
// console.log("Product of all numbers:", product);

//----------X----------X----------X----------X----------X----------X----------X----------X----------X----------X----------X----------X----------X----------X----------X----------X


//1 loops practice quesations
//Write a program using a for loop to print numbers from 1 to 10
for(let i =1;i<=10;i++){
    console.log(i);
}

//Write a program using a while loop to calculate the sum of numbers from 1 to 100.
let sum = 0;
let i=1;
while( i<=100) {
    sum += i;
    i++;
}
console.log("\n");
console.log(sum);

//2 nested loops
//Create a program using nested loops to print the following pattern:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// Write a program to generate a multiplication table from 1 to 5 using nested for loops

for (let i = 1; i <= 5; i++) { // Outer loop for each number from 1 to 5
    console.log("Multiplication table for:"+i);
    for (let j = 1; j <= 10; j++) { // Inner loop for numbers from 1 to 10
        console.log(i+" X "+j+" = "+ i*j);
    }
    console.log(''); // Blank line after each table
}

// Given the array let numbers = [10, 20, 30, 40, 50], use a for loop to calculate the sum of all elements.
let numbers = [10, 20, 30, 40, 50];
sum=0;
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log(`sum of array = ${sum}`);


// Using a for...of loop, find the maximum number in the array [3, 5, 7, 2, 8]
let number = [3, 5, 7, 2, 8];
let maxi = number[0]; // Initialize max with the first element of the array

for (let num of number) {
    if (num > maxi) {
        maxi = num; // Update max if the current num is greater
    }
}

console.log("Maximum number:", maxi);

// Given the object let user = { name: "John", age: 25, city: "New York" }, use a for...in loop to print all key-value pairs.
let user = { name: "John", age: 25, city: "New York"}
for (let key in user){
    console.log(`${key} : ${user[key]}`);
}


// Write a function that takes an object and a string as input and checks if the string is a key in the object




//  Write a program that prints all numbers from 1 to 10, but skips the number 5.
for (let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

// Create a program that prints numbers from 1 to 20 but stops when it encounters a number divisible by 7.
for(let i =1; i<=20; i++){
    if(i%7==0){
        break ;
    }
    console.log(i);
}

// Create an object to represent a book with properties: title, author, and year. Access and print each property
let book={
    title: "To kill a mockingbird",
    author: "Harper Lee",
    year:1960
};

console.log(book.title);
console.log(book['author']);
console.log(book.year);

// Write a program to update the value of an object’s property and add a new property to the object.
book.year=1961;
book.genre="fiction";
console.log(book);

// Create an object calculator with two methods: add(a, b) and multiply(a, b). Test the methods

let calculator={
    add: function(a,b){
        return a+b;
    },

    multiply: function(a,b){
        return a*b;
    }
};

console.log(`Addition of two numbers = ${calculator.add(5,3)}`);
console.log(`Multiplication of two numbers = ${calculator.multiply(5,3)}`);

// Write an object person with properties firstName and lastName and a method getFullName() that returns the full name
let person={
    firstname:"Arpit",
    lastname:" Sharma",

    fullname: function(){
        return (person.firstname+person.lastname);
    }
};
console.log(`Full Name: ${person.fullname()}`);

// Write a function that takes an object as input and returns an array of all the keys in the object


// Write a program to merge two objects: javascript Copy code
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

console.log({...obj1,...obj2});

// Write a program to find the oldest student
let students = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 23 }
  ];

let oldstd=students[0];
students.forEach(student => {
    if(student.age>oldstd.age){
        oldstd=student;
    }
});

console.log(oldstd);

// Add a property grade to each object in the students array and assign a random value between 1 and 10
students.forEach(student => {
    student.grade = Math.floor(Math.random() * 10) + 1;  // Random grade between 1 and 10
  });
console.log(students);

// Create a function that takes an object and returns a deep clone of it (without using JSON methods).
// Write a function to compare two objects and return true if they are deeply equal.

// ○ Write a program to find the length of the string "Hello, World!"
let str="Hello World";
console.log(str.length);

//Create a function isLonger(str1, str2) that compares two strings and returns the longer one.
function isLonger(str1, str2) {
    return str1.length>str2.length?str1:str2;
}
console.log(isLonger("Arpit","Sharma"));
console.log(isLonger("bannana", "apple"));

// Write a program to print the first and last characters of the string "JavaScript"
let stri="JavaScript";
console.log(stri.charAt(0));
console.log(stri.charAt(stri.length - 1));

// Create a function that takes a string and a number as arguments and returns the character at that position.
function pos(string,num){
    if (num>=0 && num< string.length){
        return string.charAt(num)
    }
    else{
        return "invalid position"
    }
}

console.log(pos("arpit",2));

// Create a function toggleCase(str) that toggles the case of each character in a string (e.g., "Hello" → "hELLO").
function toggleCase(nstr){
    let toggledstr='';

    for(let i=0;i<nstr.length;i++){
        let char=nstr[i];

        if(char===char.toUpperCase()){
         toggledstr+=char.toLowerCase();
        }
        else{
            toggledstr+=char.toUpperCase();
        }

    }
    return toggledstr;
}

console.log(toggleCase("Hello"));
console.log(toggleCase("JavaScript"));


// Write a program to check if the word "world" exists in the string "Hello, world!".
let word="Hello, world!"
console.log(word.includes("world"));

// Create a function startsWithVowel(str) that checks if a string starts with a vowel
function startsWithVowel(str3){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let firstChar = str3.charAt(0).toLowerCase();
    return vowels.includes(firstChar);
}
console.log(startsWithVowel("apple"));
console.log(startsWithVowel("lion"));

// Write a program to extract the word "World" from the string "Hello, World!" using the slice() method
let string = "Hello, World!";
console.log(string.slice(7, 12));

// Create a function middleThree(str) that returns the middle three characters of a string if its length is odd.
function middleThree(str){
    let length = str.length;
    let middleIndex = Math.floor(length / 2);
    let middleThree = str.slice(middleIndex - 1, middleIndex +2);
    return middleThree;
}
console.log(middleThree("Hello"));

//Write a program to replace all occurrences of "is" with "was" in the string "This is a test. Is it working?"
let str4 = "This is a test. Is it working?";
console.log(str4.replace(/\bis\b/gi, "was"));

// Create a function trimSpaces(str) that removes all extra spaces from the beginning and end of a string.
function trimSpaces(str){
    return str.trim();
}
console.log(trimSpaces("   Hello, World!   "));

// Write a program to concatenate the strings "Hello" and "World" with a space in between.
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);

// Create a function greet(name) that returns a personalized greeting like "Hello, John!"
function greet(name){
    return "Hello, " + name + "!";
}
console.log(greet("John"));

// Use a template literal to format the string "My name is [name] and I am [age] years old" for the variables name and age
let name = "Arpit";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old`);

// Write a program to reverse the string "JavaScript"
let strin = "JavaScript";
console.log(strin.split("").reverse().join(""));

// Create a function isPalindrome(str) that checks if a string is a palindrome (e.g., "madam")
function isPalindrome(str){
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam"));

// Create a function countVowels(str) that counts the number of vowels in a string
function countVowels(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello, World!"));

// Write a program to count the number of occurrences of the letter "a" in the string "JavaScript is amazing!".
let str5 = "JavaScript is amazing!";
let c=0;
for (let i=0;i<=str5.length;i++){
    if(str5[i] === 'a'){
        c++;
    }
}
console.log(c);

//Write a program to split the string "apple,banana,orange" into an array of words.
let str6 = "apple,banana,orange";
let arr = str6.split(",");
console.log(arr);

// Create a function joinWithDash(arr) that takes an array of strings and joins them with dashes
function joinWithDash(arr){
    return arr.join("-");
}
console.log(joinWithDash(["apple", "banana", "orange"]));

// Create a function removeDuplicates(str) that removes duplicate characters from a string (e.g., "banana" → "ban").
function removeDuplicates(str){
    return [...new Set(str)].join("");
}
console.log(removeDuplicates("banana"));

// Write a function longestWord(sentence) that finds and returns the longest word in a sentence.
function longestWord(sentence){
    let words = sentence.split(" ");
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
            }
            }
            return longest;
            }
            console.log(longestWord("The quick brown fox jumps over the lazy dog."));

// Write a function isEmail(str) that checks if a string is a valid email format.
function isEmail(str){
    let pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(str);
}
console.log(isEmail("test@example.com"));

// Create a function isPhoneNumber(str) to validate if a string is a valid 10-digit phone number
function isPhoneNumber(str){
    let phone=/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phone.test(str);
    }
console.log(isPhoneNumber("1456789630"));
