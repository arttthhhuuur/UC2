//Operador E (AND) - Simbolo: &&
//retorna true APENAS SE TODOS OS ENVOLVIDOS forem true
//Apenas um unico false ja é suficieente para retomar false
//console.log(true && false)

let idade = 16
let maiorIdade = idade >= 18 //boolean
let temCarteira = true
let temCarro = true

console.log(maiorIdade && temCarteira && temCarro)  //false


//Operador OU (OR) - Simbolo ||
//retorna false APENAS SE TODOS OS ENVOLVIDOSforem false
//Apenas um unico true ja é suficiente para retornar true

console.log(true || true) //true
console.log(true || true) //true
console.log(true || true) //true
console.log(true || true) //false

let temTrabalho = true
let economiza = true
let investe = true
let herdeiro = true

console.log((temTrabalho && economiza && investe) || herdeiro)



//Operador NÃO/NEGAÇÃO - Simbolo !
let ligado = true
console.log(!false)