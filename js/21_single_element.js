// Single Elements
let val
val = document.getElementById('header')
console.log(val)
console.log(val.className)

val.style.fontSize = '45px'
val.style.color = 'Red'

// innerText 
val.innerText = 'My List'

// innerHtml
val.innerHTML = '<b>My List</b>'

// The Alternative Property

// document.querySelector()

val = document.querySelector('#header')
console.log(val)

val = document.querySelector('.card-header')
console.log(val)

val = document.querySelector('li').style.color = 'orange'
console.log(val)

val = document.querySelector('li:last-child').style.color = 'blue'
console.log(val)

val = document.querySelector('li:nth-child(2)').style.color = 'pink'
console.log(val)

val = document.querySelector('li:last-child').textContent = 'Mission completed.'
console.log(val)