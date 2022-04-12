const input = document.querySelector('#txtTaskName')

// keydown
input.addEventListener('keydown', keyCatch)

// keyup
input.addEventListener('keyup', keyCatch)

function keyCatch(e){
    console.log(`event type : ${e.type}`)
    console.log(`key code : ${e.keyCode}`)
    console.log(`value : ${e.target.value}`)
    e.target.style.backgroundColor = 'blue'
}

function keyCatch2(e){
    e.target.style.backgroundColor = 'white'
}

// keypress
input.addEventListener('keypress',keyCatch)

// keyfocus
input.addEventListener('focus', keyCatch)

// blur
input.addEventListener('blur', keyCatch2)