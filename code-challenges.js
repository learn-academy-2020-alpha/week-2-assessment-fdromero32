// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
var num2 = 0
var num3 = -7

const divisibleByThree = (num) => {
    if(num % 3 === 0){
        return `${num} is divisible by three`
    } else if(num % 3 === 1 || num % 3 === -1) {
        return `${num} is not divisible by three`
    } else {
        return 'Please input a numeric value'
    }
}

console.log(divisibleByThree(15));
console.log(divisibleByThree(0));
console.log(divisibleByThree(-7));





// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//create a funtion that takines in array and capitalizes the first letter

const capitalizeFirst = (arr) =>{

    var newarray1 = [];
      
    for(var i = 0; i < arr.length; i++){
        newarray1.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newarray1
}


console.log(capitalizeFirst(randomNouns));



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const numbersInOrder = (arr) =>{

    newArr = []

    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            newArr.push(arr[i])
        }
    }
    return newArr.sort((a,b) => a-b)
}

console.log(numbersInOrder(mixedDataArray))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstSrtringVowel = (str) =>{

    var stringArray = str.split('') //[ 't', 'h', 'r', 'o', 'w' ]
    var firstVowel = stringArray.findIndex(vowel => vowel === 'a' || vowel === 'e' ||vowel === 'i' || vowel === 'o'|| vowel === 'u')
    return firstVowel
}
console.log(firstSrtringVowel(vowelTester1))
console.log(firstSrtringVowel(vowelTester2))

// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const mathIsDarkSided = (num1, operator, num2) => {

    if(num2 === 0){
        return 'Can\'t divide by 0!!'
    }

    if(operator === '*'){
        return num1 * num2
    } else if(operator === '+'){
        return num1 + num2
    } else if(operator === '/'){
        return num1 / num2
    } else if (operator === '-'){
        return num1 - num2
    } else {
        return 'please input two numbers and a math operator'
    }
}


console.log(mathIsDarkSided(3, "*", 9))
console.log(mathIsDarkSided(16, "+", 3))

console.log(mathIsDarkSided(89, "/", 0))
