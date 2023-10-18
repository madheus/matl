const rl = require('readline-sync')
let celsius = Number(rl.question('Quanto graus em celsius esta fazendo? '))
let ab = Number(celsius) + 32
let ac = Number(ab) * 9
let ad = Number(ac)/5
console.log(`esta fazendo ${ad}F`)
