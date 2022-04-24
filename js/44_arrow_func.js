// Arrow Functions

// ES5
let ES5 =function(){
    console.log('Hello ES5')
}
ES5()

// ES6
let ES6 = () => {
    console.log('Hello ES6')
}
ES6()

// parameters

//ES5
let paramES5 = function(a,b){
    return a * b
}
console.log(paramES5(2,3))

//ES6
let paramES6 = (a,b) => a * b
console.log(paramES6(4,5))