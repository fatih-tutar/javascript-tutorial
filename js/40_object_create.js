// Object Create

let player = {
    calculate : function(){
        return 2022 - this.yearOfBirth
    }
}

let haydar = Object.create(player)

haydar.name = 'haydar'
haydar.yearOfBirth = 1985

console.log(haydar)
console.log(haydar.calculate())

let sedat = Object.create(null)

sedat.name = 'sedat'
sedat.age = 25
console.log(sedat)