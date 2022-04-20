let Person = function(name, yearOfBirth){
    this.name = name
    this.birth = yearOfBirth
    this.calculateAge = function(){
        return 2022-this.birth
    }

    console.log(this)
}
let user = new Person('Fatih',1993)
let user_2 = new Person('Mustafa',1994)

console.log(user)
console.log(user_2)
console.log(user.calculateAge())
console.log(user_2.calculateAge())

