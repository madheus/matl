const rl = require('readline-sync')
let ae = (rl.question(`?; `))

invertido = function() {
    console.log(`${ae}`.split('').reverse().join(''))
}
invertido();
