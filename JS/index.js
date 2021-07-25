let user = ''
let weigh = 92;
let age = 18;
let height = 184;
let gender = 'men';
let condition = 'Moderadamente Activo';
let calcForCondition = 0;

 // ME HACE FALTA HACER INPUTS DE 'Si o No' y mejor empleo del codigoconsole.log(`Welcome ${user}, would you like start the program?`)
//  I NEED A INPUT TO MY USER

switch (condition) {
    case 'Sedentario':
    calcForCondition = 1.2
        break
    case 'Ligeramente Activo':
        calcForCondition = 1.375
        break
    case 'Moderadamente Activo':
        calcForCondition = 1.55
        break
    case 'Muy Activo':
        calcForCondition = 1.725
        break
    case 'Hiper Activo':
        calcForCondition = 1.9
        break
    default:
        console.log('ta')
}

function calcMen(a, b, c, d){
    console.log(((10 * a) + (6.2 * b) - (5 * c + 5)) * d)
}   
function calcWoMen(a, b, c, d){
    console.log(((10 * a) + (6.2 * b) - (5 * c - 151)) * d)
}   

if(gender === 'men'){
    calcMen(weigh, height, age, calcForCondition)
} else if (gender === 'women'){
    calcWoMen(weigh, height, age, calcForCondition)
} else {
    console.log('I\'m sorry, i work with either men or women only')
}