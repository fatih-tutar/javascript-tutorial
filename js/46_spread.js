// spread operator
let sum = (a,b,c) => a + b + c
console.log(sum(10,12,13))
let numbers = [10,11,12,13]

//es5
console.log(sum.apply(null,numbers))

//es6 
console.log(sum(...numbers))

let arr1 = [21,22,23]
let arr2 = [24,25,26]
let arr3 = [...arr1,...arr2]
console.log(arr3)