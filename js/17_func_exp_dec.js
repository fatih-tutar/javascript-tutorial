// function declaration
function sum(a,b){
    var c = a + b
    return c
}
console.log(sum(10,20))

// function expression
const add = function(a,b){
    if(typeof a === 'undefined'){
        a = 0
    }
    if(typeof b === 'undefined'){
        b = 0
    }
    var c = a + b
    return c
}
console.log(add(10,20))
console.log(add(10))

// with ecmascript 6
const collect = function (a = 0, b = 0) {
    var c = a + b
    return c
}
console.log(collect(10))