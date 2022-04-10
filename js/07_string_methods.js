// String Methods

const firstName = 'Fatih'
const surname = 'Tutar'
var x = firstName + ' ' + surname
console.log(x)
console.log(typeof x)

// String Concat
x = firstName.concat(' - ',surname)
console.log(x)

// String Length
x = firstName.length
console.log(x)

// String Uppercase
x = firstName.toUpperCase()
console.log(x)

// String Lowercase
x = firstName.toLowerCase()
console.log(x)

// String IndexOf
x = x.indexOf('h')
console.log(x)
x = firstName.indexOf('b')
console.log(x)

// Substring
x = surname.substring(0, 3)
console.log(x)
x = surname.substring(3)
console.log(x)

// Slice()
x = surname.slice(0, 3)
console.log(x)
x = surname.slice(3)
console.log(x)

// String Replace()
x = surname.replace('u','a')
console.log(x)