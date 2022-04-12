// Deleting Element
let list = document.querySelector('#task-list')
console.log(list)

list.childNodes[1].remove()

list.children[0].remove()

list.removeChild(list.children[2])

// removing attribute
list.children[0].removeAttribute('class')