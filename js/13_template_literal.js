const fullName = 'Fatih Tutar'
const city = 'Istanbul'
const yearBirth = 1993

let val = 'My name is ' + fullName +
            ' I live in ' + city +
            ' I am ' + (2022 - yearBirth) + 'years old.'
console.log(val)

let templateLiteral = `My name is ${fullName}. I live in ${city}. I am ${(2022 - yearBirth <= 18) ? 'Under 18' : 'Over 18'} years old.`
console.log(templateLiteral)