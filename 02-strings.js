// var name = 'Ruben';
// var surname = 'Sánchez';

// var fullName = name + ' ' + surname; 

// console.log(fullName)

var firstIngredient = 'leche'
var secondIngredient = 'arroz'
var thirdIngredient = 'limón'
var fourthIngredient = 'canela'

//lista de ingredientes: leche, arroz, limón y canela

    var recipe = 'Lista de ingredientes: \n' + firstIngredient + 
', ' +
 secondIngredient + 
', ' +
 thirdIngredient + 
' y ' +
 fourthIngredient + '.';

console.log(recipe);

var recipeInterpolated = 
`Lista de ingredientes:
- ${firstIngredient}.
- ${secondIngredient}.
- ${thirdIngredient}.
- ${fourthIngredient}.
`

console.log(recipeInterpolated);

console.log('---------------------')

var car = 'Fiat'
var myCar = `Mi coche es un ${car.toUpperCase()}`

console.log(myCar)

var dog = 'CARLINO'
var myDog = `Mi perro es un ${dog.toLocaleLowerCase()}`

console.log(myDog)

var computerDescription = '   Ordenador muy potente con mucha RAM. '
console.log(computerDescription.trim())

var school = 'The PMBA'
var schoolName = school.slice(4, 6)
console.log (schoolName)