let category = 'milk'

switch(category){
    case 'coffee':
        console.log('Your black coffee is being prepares')
        break;
    case 'coffeemilk':
        console.log('Your coffee with milk is being prepared')
        break;
    default :
        console.log('You chose the wrong category')
        break;
}

let day = new Date().getDay()

switch(day){
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Thursday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Tuesday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    default:
        console.log('You made a mistake in choosing a category')
        break;
}