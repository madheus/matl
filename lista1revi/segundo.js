const rl = require('readline-sync')
let Neleitores = Number(rl.question('Digite o Numero de eleitores: '))
let Vbranco = Number(rl.question('Numero de votos em branco: '))
let Vnulos = Number(rl.question('Digite o numero de votos nulos: '))
let Vvalidos = Number(rl.question('Digite os votos validos: '))

let Brancos = (Number(Vbranco) / Number(Neleitores)) * 100
let nulos = (Number(Vnulos) / Number(Neleitores)) * 100
let Validos = (Number(Vvalidos) / Number(Neleitores)) * 100

console.log(`Votos em branco ${Brancos}% de ${Neleitores}`)
console.log(`Votos nulos ${nulos}% de ${Neleitores}`)
console.log(`Votos em validos ${Validos}% de ${Neleitores}`)

