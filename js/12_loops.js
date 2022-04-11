// Loops

// While Loops
let i = 0
while(i<10){
    console.log(i)
    i++;
}

// Do-While Loops
let x = 0
do{
    console.log(x)
    x++;
}
while(x<10){
    console.log(x)
}

// For Loops
for(let b = 0; b < 10; b++){
    if(b == 2){
        console.log("Two : " + b)
        continue
    }
    console.log(b)
}

// nested for loops
for(let m = 10; m > 0; m--){
    for(let n = 0; n < 5; n++){
        console.log("First Loop : " + m + " Second Loop : " + n)
    }
}