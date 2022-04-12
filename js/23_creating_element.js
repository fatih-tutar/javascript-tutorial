// Element Creating
const li = document.createElement('li')
li.className = 'list-group-item list-group-item-secondary'
li.setAttribute('title','text')

// text node
const text = document.createTextNode('6')
li.appendChild(text)

const a = document.createElement('a')
a.setAttribute('href','#')
a.className = 'delete-item float-right'
a.innerHTML = '<i class = "fas fa-times"></i>'

// append a to li
li.appendChild(a)

// append  li to ul
document.querySelector('#task-list').appendChild(li)

console.log(li)