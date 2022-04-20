// Prototype

let User = function(name,yearOfBirth){
    this.name = name
}
User.prototype.calculateAge = function(){
    return 2022 - this.yearOfBirth
}
User.prototype.getYearOfBirth = function(){
    return this.yearOfBirth;
}

let fatih = new User('Fatih',1993)
console.log(fatih)