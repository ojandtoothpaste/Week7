//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
const ageDifference = ages[ages.length - 1] - ages[0];
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
ages.push(40);
const newAgeDifference = ages[ages.length - 1] - ages[0];
//Use a loop to iterate through the array and calculate the average age.
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}
const averageAge = totalAge / ages,length;

//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//Use a loop to iterate through the array and calculate the average number of letters per name.
let totalNumberOfLetters = 0;
for(let i = 0; i < names.length; i++){
    totalNumberOfLetters += names[i].length;
}
const averageNumberOfLetters = totalNumberOfLetters / names.length;

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let allNames = '';
for (let i = 0; i < names.length; i++){
    allNames += names[i] + ' ';
}
//How do you access the last element of any array? array.length - 1
//How do you access the first element of any array? array[0]

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
nameLengths = []
for (let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
function hello(word, n){
    console.log(word.repeat(n));
}
// Write a function that takes two parameters, firstName and lastName, and returns a full name.
function firstAndLast (firstName, lastName){
    return `${firstName} ${lastName}`;
}

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function numbers [17, 22, 39, 15]{
    if(numbers.sum == 100){
        return true;
    }
}

//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const average = sum / array.length;
    return average;
  }
  
  const array = [1, 2, 3, 4, 5];
  const average = calculateAverage(array);
  console.log(average); 

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function averageElements ([33, 21, 18], [91, 20, 78]){
    let sum = 0;
    for(let i=0);
}

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink (isHotOutside, moneyInPocket){
    if(willBuyDrink && moneyInPocket > 10.50){
        return true
    }
}