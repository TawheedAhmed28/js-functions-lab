/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {
    if (age >= 18) {
        return "Adult"
    } else {
        return "Minor"
    }
}

console.log('Exercise 2 Result:', isAdult(12));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(character) {
    const vowels = ["a", "e", "i", "o", "u"] /* also add uppercase (A, E, I, O, U) to array, or 
    aeiouAEIOU.includes(character) */
    if (vowels.includes(character)) {
        return true
    } else {
        return false
    }
}
// vowels.includes(character) gives a boolean anyway so scrap the 'if' statement - return vowels.includes(character) instead

console.log('Exercise 3 Result:', isCharAVowel("o"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(username, address) {
    return username + "@" + address
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, time) {
    return `Good ${time}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "evening"));

/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString(string) {
     let newString = ""
     for (let i = string.length - 1; i > -1; i--) {
        newString += string[i] // ie. newString == newString + string[i]
     } 
     return newString
} 

console.log('Exercise 6 Result:', reverseString("tedious"));

/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome(forWord) {
    let backWord = ""
    for (let i = forWord.length - 1; i > -1; i--) {
       backWord += forWord[i]
    } 
    if (backWord === forWord) { /* (backWord === forWord gives a boolean anyway, so no 'if' 
    statement required. Just return (backWord === forWord). */
        return true
    } else {
        return false
    }
}

// Note the cool pun I added there (the word is the same forwards as it is backwards - get it?)

/* Also, we can call the previous function reverseString(string) to make the solution here less 
wordy - I treated the exercise as an individual exercise ie. in the world of Exercise 7, no other 
exercise and its contents exist */

console.log('Exercise 7 Result:', checkPalindrome("taco"));

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3) {
    if ((num1 >= num2) && (num1 >= num3)) {
        return num1
    } else if ((num2 >= num1) && (num2 >= num3)) {
        return num2
    } else if ((num3 >= num1) && (num3 >= num2)) {
        return num3
    }
}

// return Math.max(num1, num2, num3) is the much easier and more versatile solution

console.log('Exercise 8 Result:', maxOfThree(10, 10, 7));

  /*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip (bill, tipPercentage) {
    const tip = bill * (tipPercentage/100) 
    return tip
}

console.log('Exercise 9 Result:', calculateTip(250, 25));

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(tempValue, tempUnit) {
    if (tempUnit === "F") {
        const newTemp = (tempValue - 32) / 1.8
        return newTemp
    } else if (tempUnit === "C") {
        const newTemp = (tempValue * 1.8) + 32
        return newTemp
    }
}

console.log('Exercise 10 Result:', convertTemperature(32, "C"));

/*
Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). Perform the provided operation on the two numbers. In operations where the order of numbers is important, treat the first parameter as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator (firstNum, secondNum, operation) {
    if (operation === "add") {
        return firstNum + secondNum
    } else if (operation === "subtract") {
        return firstNum - secondNum
    } else if (operation === "multiply") {
        return firstNum * secondNum 
    } else if (operation === "divide") {
        return firstNum / secondNum
    }
}

console.log('Exercise 11 Result:', basicCalculator(10, 5, "divide"));


