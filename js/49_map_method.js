// javascript map method
let myMap = new Map()
console.log(typeof myMap)

let key1 = 'Fatih'
let key2 = {a:2,b:3}
let key3 = () => 2

myMap.set(key1,'x')
myMap.set(key2,'y')
myMap.set(key3,'z')

console.log(myMap.get(key2))

myMap.forEach((key,value) => console.log(key,value))

const arr = [[key1,'A'],[key2,'B'],[key3,'C']]
console.log(arr)
arr.forEach((key,value) => console.log(key,value))