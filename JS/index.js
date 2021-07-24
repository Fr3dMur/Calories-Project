/**TENGO MI PRIMER IDEA !!!!!!!! 
 * FORMULA PARA TOTAL DE CALORIAS POR PESO DE PERSONA
 * 
 *      Para hombres 
 * men = (10 * Peso (kg)) + (6.2 * Altura (cm)) - (5 * edad (years) + 5)
 * 
 *      Para mujeres
 * wmen = (10 * Peso (kg)) + (6.2 * Altura (cm)) - (5 * edad (years) - 161)
 */
 
let user = ''
let weigh = 92;
let age = 18;
let height = 184;
let menOrWomen = 'men';
let condition = 'Moderadamente Activo';
let calcForCondition = 0;

 // ME HACE FALTA HACER INPUTS DE 'Si o No' y mejor empleo del codigoconsole.log(`Welcome ${user}, would you like start the program?`)

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

if(menOrWomen === 'men'){
    calcMen(weigh, height, age, calcForCondition)
} else if (menOrWomen === 'women'){
    calcWoMen(weigh, height, age, calcForCondition)
} else {
    console.log('I\'m sorry, i work with either men or women only')
}

 /**  
 * Despues multiplicar
 *      1- Si persona es sedentaria
 *        (No realizan practicamente nada de ejercicio)
 *         Si men o wmen es igual sedentario, entonces
 *         sedentario sera igual al 
 *          resultado previamente calculado * 1.2 
 * 
 *      2- Si persona es ligeremante activa
 *          (Ejercicios suaves de 1 a 3 veces por semana)
 *         Si men o wmen es igual ligeramenteActiva, entonces
 *         ligeramenteActiva sera igual al 
 *          resultado previamente calculado * 1.375
 * 
 * 
 *      3- Si persona es moderadamente activa
 *          (Practican deportes suaves de 3 a 5 veces por semana)
 *         Si men o wmen es igual moderadamenteActiva, entonces
 *         moderadamenteActiva sera igual al 
 *          resultado previamente calculado * 1.55
 * 
 * 
 *      4- Si persona es muy activa
 *          (practican deporte de 6 a 7 dias por semana)
 *         Si men o wmen es igual muyActiva, entonces
 *         muyActiva sera igual al 
 *          resultado previamente calculado * 1.725
 * 
 * 
 *      5- Si persona es  hiper activa
 *          (realizan ejercicios muy intensos en menos de 2 horas)
 *         Si men o wmen es igual hiperActiva, entonces
 *         hiperActiva sera igual al 
 *          resultado previamente calculado * 1.9
 */