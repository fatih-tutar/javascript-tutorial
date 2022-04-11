// Number Methods
var x = 10
console.log(x)
console.log(typeof x)

x = '10'
console.log(typeof x)
x = Number('10')
console.log(typeof x)
x = isNaN('10x')
console.log(x)

// parseInt 
var number = 24.054642165
intNumber = parseInt(number)
console.log(intNumber)

// parseFloat
floatNumber = parseFloat(number)
console.log(floatNumber)

// precision
precisionNumber = number.toPrecision(5)
console.log(precisionNumber)

// fixed
fixedNumber = number.toFixed(5)
console.log(fixedNumber)

// Math Methods
number = Math.PI;
console.log(number)

number = Math.round(2.8)
console.log(number)

number = Math.round(2.3)
console.log(number)

number = Math.ceil(3.1)
console.log(number)

number = Math.floor(4.9)
console.log(number)

number = Math.sqrt(36)
console.log(number)

number = Math.pow(2,4)
console.log(number)

number = Math.abs(-150)
console.log(number)

number = Math.min(5,8,4,10)
console.log(number)

number = Math.max(78,52,65,12,95)
console.log(number)

number = Math.round(Math.random() * 100)
console.log(number)
