// error handling, try-catch

//referenceerror, typeerror, syntaxerror, urierror

//error
var person = {
    name : 'fatih'
}

try{
    console.log(person.name)
    console.log(person.age)
    if(!person.age){
        throw new Error('Person has no age!')
    }
    console.log(newFunction())
}catch(e){
    console.log(e.name)
}

finally{
    console.log('finally block')
}