const rl = require('readline-sync')

let i = Number(rl.question('digite um numero; '))
let ae = 0

while(ae<=9) {
    ae++
    let buu = Number(i) * Number(ae)

    console.log(`${i} x ${ae} = ${buu}`)
    
}

