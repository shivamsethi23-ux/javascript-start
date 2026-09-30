let score = "33"

//let score = "33abc" // if the value is not a number then the value will be NaN(not a number)

//let score = null // if null then the value will be 0
//let score = undefined // if undefined then the value will be NaN

 
console.log(typeof score);

let convertToNumber = Number(score)
console.log(convertToNumber);
console.log(typeof convertToNumber);  



// "33" = 33
// "33abc" = NaN
// ture = 1 ; false = 0

let isLoggedIn = 1
//let isLoggedIn = ""
//let isLoggedIn = "name"


let newConvert = Boolean(isLoggedIn)

console.log(newConvert);
console.log(typeof newConvert);

// 1 = true
// 0 = false
// "" = false
// "name" = true

let isNumber = 33

let stringconvert = String(isNumber)
console.log(stringconvert);
console.log(typeof stringconvert);




