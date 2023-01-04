// Solicite 2 números para operação:
// Apresente as operações e os resultados escrevendo no document.writeto (Função Write).
// Crie constantes com as operações de +, -, *, /, %, ** e raiz para os números solicitados.

const numberOne = Number(prompt("Digite o primeiro número: "))
const numberTwo = Number(prompt("Digite o segundo número: "))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo
const rem  = numberOne % numberTwo
const exp  = numberOne ** numberTwo
const sqr  = numberOne ** (1/numberTwo)


document.write(`A soma de ${numberOne} + ${numberTwo} é = ${sum} <br>`)
document.write(`A diferença de ${numberOne} - ${numberTwo} é = ${sub} <br>`)
document.write(`O produto de ${numberOne} * ${numberTwo} é = ${mul} <br>`)
document.write(`O quociente de ${numberOne} / ${numberTwo} é = ${div.toFixed(2)} <br>`)
document.write(`O resto de ${numberOne} % ${numberTwo} é = ${rem} <br>`)
document.write(`A potencia de ${numberOne} ** ${numberTwo} é = ${exp} <br>` )
document.write(`A raiz ${numberOne} ** ${numberTwo} é = ${sqr} <br>` )