// rest parameters
let multiplication = (a,b,c) => a * b * c

console.log(multiplication(1,2,3))
console.log(multiplication(1,2))
console.log(multiplication(1,2,3,4))

let multip = (...numbers) => numbers.reduce((x,y) => x * y)
console.log(multip(1,2))
console.log(multip(1,2,3))
console.log(multip(1,2,3,4))