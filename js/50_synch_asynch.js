var a = document.querySelector(".redBox")
var b = document.querySelector(".greenBox")
var c = document.querySelector(".blueBox")

const first = () => {
    setTimeout(() => {
        a.style.backgroundColor = 'red'
    }, 3000)
}
const second = () => {
    setTimeout(() => {
        b.style.backgroundColor = 'green'
    }, 2000)
}
const third = () => {
    setTimeout(() => {
        c.style.backgroundColor = 'blue'
    }, 1000)
}
first()
second()
third()