// BUILT IN CONSTRUCTOR

//String

var str1 = 'fatih'
var str2 = new String('fatih')

String.prototype.repeat = function(n){
    return new Array(n + 1).join(this)
}

console.log('fatih'.repeat(5))

console.log(str1)
console.log(str2)

//number 
var num1 = 10
var num2 = new Number(10)
console.log(num1)
console.log(num2)

//boolean
var bool1 = false
var bool2 = new Boolean(true)
console.log(bool1)
console.log(typeof bool1)
console.log(bool2)
console.log(typeof bool2)

//object
var obj1 = {
    name : 'fatih',
    age : 24
}
var obj2 = new Object({
    name : 'fatih',
    age : 28
})

//array 
var arr1 = ['fatih',28]
var arr2 = new Array('fatih',28)

