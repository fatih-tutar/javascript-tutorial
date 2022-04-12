// mouse events
const btn = document.querySelector('#btnPlus')
const division = document.querySelector('#first-group')

btn.addEventListener('click',mouseCatch)
division.addEventListener('click', mouseCatch)

function mouseCatch(e){
    console.log(`event type : ${e.type}`)
    console.log(e)
    h2.textContent = `Mouse X : ${e.offsetX} Mouse Y :${e.offsetY}`
    e.preventDefault()
}

// double click
division.addEventListener('dblclick',mouseCatch)

// mousedown
division.addEventListener('mousedown', mouseCatch)

//mouseup
division.addEventListener('mouseup', mouseCatch)

//mouseenter
division.addEventListener('mouseenter', mouseCatch)

//mouseleave
division.addEventListener('mouseleave', mouseCatch)

//mouseover
division.addEventListener('mouseover', mouseCatch)

//mouseout
division.addEventListener('mouseout', mouseCatch)

// moov
division.addEventListener('mousemove', mouseCatch)

const h2 = document.querySelector('h2')