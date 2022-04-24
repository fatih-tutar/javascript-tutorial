// this keyword

//es5
let obj = {
    category : 'person',
    names : ['fatih','zehra','ayşe','davut'],
    call : function(){
        var obj2 = this
        this.names.map(function(name){
            console.log(`${obj2.category} ${name}`)
        })
    }
}
obj.call()

//es6
let object = {
    category : 'person',
    names : ['fatih','zehra','ayşe','davut'],
    call : function(){
        this.names.map((name) => {
            console.log(`${this.category} ${name}`)
        })
    }
}
object.call()