// Event Listener
const btn = document.querySelector('#btnDeleteAll')

btn.addEventListener('click',function(e){
    console.log('Button clicked')
    e.preventDefault()
})

btn.addEventListener('click',btnClick)

function btnClick(e){
    console.log('Button clicked')
    e.preventDefault()
}

const btn2 = document.querySelector('#btnAddNewTask')

btn2.addEventListener('click',btnClick)

function btnClick2(e){
    console.log('Second button clicked')
    e.preventDefault()
}

btn2.addEventListener('click', btnClick2)