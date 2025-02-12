/**
 * Task 1:
 * Create a function named `printName`
 * - take a name as a parameter
 * - that just prints that name on the screen
 */
function printName(name) {
  console.log(name);  
}
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {
  let currentYear = new Date().getFullYear();  
  let age = currentYear - birthYear;  
  console.log(age);  
}

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  let greeting;

  if (language === "en") {
    greeting = "Hello";
  } else if (language === "es") {
    greeting = "Hola";
  } else if (language === "fr") {
    greeting = "Bonjour";
  } else if (language === "tr") {
    greeting = "Merhaba";
  } else {
    greeting = "Hello";
  }

  console.log(`${greeting} ${name}`);
}

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  const maxNumber = Math.max(num1, num2); // Use Math.max to find the larger number
  console.log(maxNumber);

   // Print the result
}
// TODO: Uncomment these functions as you work on them
// Make sure they're all uncommented before you push your solution!
module.exports = {
  printName,
  printAge,
  printHello,
  printMax,
};
