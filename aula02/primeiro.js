const rl = require('readline-sync')
let n = Number(rl.question("Digite um numero; "));

impa = function() {
let total = n/2;
if(n%2 == 0){
	console.log("Par");
}else{
	console.log("Impar");
}
}
impa();
