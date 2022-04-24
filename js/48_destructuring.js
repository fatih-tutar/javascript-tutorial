var x, y
[x,y] = [1,2]
console.log(x)
console.log(y)

var a,b,c
[a,b,...c] = [1,2,3,4,5,6]
console.log(a)
console.log(b)
console.log(c)

var m, n
[m = 1, n = 2] = [3]
console.log(m)
console.log(n)

var p = 5, r = 4
[p,r] = [r,p]
console.log(p)
console.log(r)

let array = () => [1,2,3]
var [a,b] = array()
console.log(a)
console.log(b)