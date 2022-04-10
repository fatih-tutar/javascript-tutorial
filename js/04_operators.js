// Operators
var sonuc
const x = 60
const y = 12
let z = 7
let t = 9

// Aritmetic Operators
sonuc = x + y
console.log(sonuc)
console.log(typeof sonuc)
sonuc = x - y
console.log(sonuc)
sonuc = x * y
console.log(sonuc)
sonuc = x / y
console.log(sonuc)
sonuc = x % y
console.log(sonuc)
sonuc = x % z
console.log(sonuc)

sonuc = z++;
console.log(sonuc)
sonuc = ++z;
console.log(sonuc)
sonuc = z--
console.log(sonuc)
sonuc = --z
console.log(sonuc)

// Assignment Operators
sonuc = x
console.log(sonuc)
sonuc += x
console.log(sonuc)
sonuc -= x
console.log(sonuc)
sonuc *= x
console.log(sonuc)
sonuc /= x
console.log(sonuc)
sonuc %= x
console.log(sonuc)

// Comparison Operators
sonuc = 9 == '9'
console.log(sonuc)
sonuc = 9 === '9'
console.log(sonuc)
sonuc = x != y
console.log(sonuc)
sonuc = z > t
console.log(sonuc)
sonuc = z < t
console.log(sonuc)
sonuc = z >= t
console.log(sonuc)
sonuc = z <= t
console.log(sonuc)

// Logical Operators

// && AND
sonuc = (z < t) && (x > y)
console.log(sonuc)

// || OR
sonuc = (z > t) || (x < y)
console.log(sonuc)

// ! NOT
sonuc = !(z > t)
console.log(sonuc)