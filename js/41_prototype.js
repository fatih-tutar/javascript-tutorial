let Person = function(name,yearOfBirth){
    this.name = name
    this.yearOfBirth = yearOfBirth
}

Person.prototype.calculateAge = function(){
    return 2020-this.yearOfBirth
}

let Engineer = function(name,yearOfBirth,phoneNumber){
    Person.call(this,name,yearOfBirth)
    this.phoneNumber = phoneNumber
}

Engineer.prototype = Object.create(Person.prototype)
Engineer.prototype.constructor = Engineer

let fatih = new Engineer('fatih',1993,'05315426368')

console.log(fatih)
console.log(fatih.calculateAge())

