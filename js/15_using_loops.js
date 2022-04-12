let cars = ['BMW','Mercedes','Audi']
let people = [
    { firstName : 'Fatih', lastName : 'Tutar' },
    { firstName : 'Mustafa', lastName : 'Koç' }
]

for(let i = 0; i < cars.length; i++){
    console.log(cars[i])
}

// for-in
for(let i in cars){
    console.log(`Index : ${i}, Value : ${cars[i]}`)
}

console.log(typeof cars)

// foreach

cars.forEach(element => {
    console.log(element)
});

console.log(people)

console.log(typeof people)

for(let i = 0; i < people.length; i++){
    console.log(people[i])
}

for(let i in people) {
    console.log(`Index : ${i}, Value : ${people[i].firstName}`)
}

people.forEach(element => {
    console.log(element.lastName)
});