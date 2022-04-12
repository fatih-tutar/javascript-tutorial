let val

val = document.getElementsByClassName('card-header')
console.log(val)

per = val[0]
console.log(per)

for(let i = 0; i < val.length; i++){
    console.log(val[i])
}

val = document.getElementsByTagName('div')
console.log(val)

val = document.querySelectorAll('.card-header')
console.log(val)

val.forEach(elements => {
    console.log(elements)
})
