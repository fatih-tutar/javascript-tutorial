// Arrays

var country = ['Turkey','Germany','England','France']
var numbers = [15,48,36,78,12]
var cn = ['Turkey',90,null,undefined,['Fatih',28]]

console.log(country)
console.log(typeof country)
console.log(country.length)

console.log(numbers)
console.log(typeof numbers)
console.log(numbers.length)

console.log(cn)
console.log(typeof cn)
console.log(cn.length)

// get arrays
console.log(country[0])
console.log(cn[1])

// set arrays
country[0] = 'Ottoman'
console.log(country[0])
console.log(country[country.length -1])
country[country.length] = 'China'
console.log(country)
country[10] = 'Russia'
console.log(country)

// add arrays item
country.push('Finland')
console.log(country)
country.unshift(20)
console.log(country)

// remove arrays item
country.pop()
console.log(country)
country.shift()
console.log(country)

// reverse
country.reverse()
console.log(country)

// sort
country.sort()
console.log(country)

// concat
var unitedArray = country.concat(numbers)
console.log(unitedArray)

