// OBJECT LITERALS
let val
let person = {
    firstName : 'Fatih',
    lastName : 'Tutar',
    age : 28,
    hobbies : ['music','csgo'],
    address : {
        city : 'Bursa',
        country : 'Turkey'
    },
    getBirthYear: function ($currentYear){
        $result = $currentYear - this.age
        return $result;
    }
}
console.log(person)
val = person
console.log(val)
val = person.firstName
console.log(val)
val = person.lastName
console.log(val)
val = person.age
console.log(val)
val = person.hobbies
console.log(val)
val = person.hobbies[1]
console.log(val)
val = person.address
console.log(val)
val = person.address.city
console.log(val)
val = person.address.country
console.log(val)
val = person.getBirthYear(2022)
console.log(val)

let people = [
    {
        firstName : 'Fatih',
        lastName : 'Tutar'
    },
    {
        firstName : 'Mustafa',
        lastName : 'Koç'
    }
]
val = people
console.log(val)