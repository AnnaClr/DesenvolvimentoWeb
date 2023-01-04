// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: String, Number, Function, Array, Object

let name = "Ana"
let num = 17

function MyTest(test) {
    console.log(test)
}

MyTest("Minha prova")


var a = ''
let b = 2
const c = () => {}
let d = []
let e = {name: 'Ana'}





// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

const numberOne = 12
const numberTwo = 3
const numberThree = 144

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo
const rem = numberOne % numberTwo
const exp = numberOne ** numberTwo
const sqr = numberThree ** (1/2)

console.log(`A soma de ${numberOne} + ${numberTwo} é = ${sum} <br>`)
console.log(`A diferença de ${numberOne} - ${numberTwo} é = ${sub} <br>`)
console.log(`O produto de ${numberOne} * ${numberTwo} é = ${mul} <br>`)
console.log(`O quociente de ${numberOne} / ${numberTwo} é = ${div.toFixed(2)} <br>`)
console.log(`O resto de ${numberOne} % ${numberTwo} é = ${rem} <br>`)
console.log(`A potencia de ${numberOne} ** ${numberTwo} é = ${exp} <br>` )
console.log(`A raiz de ${numberThree} ** ${1/2} é = ${sqr} <br>` )

// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" e imprima seu retorno.

function test(MyTest) {
    console.log(MyTest);
}

test("JavaScript")

// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valores e posteriormente insira mais um valor no final e substitua o do início por outro.

let techs = ["SQL", "JavaScript", "Git"]
techs.shift()
techs.unshift("HTML")
techs.push("CSS")

console.log(techs)

// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

const techsX = ["HTML", "JavaScript", "Git", "CSS"]
for (let index = 3; index < techsX.length; index++) {
    const element = techsX[index];
    console.log(techsX);
}

for (const value of techs) {
    console.log(value);
}

// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200-299 e do 300-399:
let count = 0
while (count <= 500) {
    if (count < 200 || count >= 400) {
        console.log(count)
    }
    count++
}

// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

let velocidade = 60
if (velocidade > 60 || velocidade < 60 / 2) {
    console.log("Multa!")
} else {
    console.log("Sem multa!")
}

// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000]

const newSalary = salary.map((salary) => salary * 1.1)
const oldSalarySum = salary.reduce((a, b) => a + b)
const newSalarySum = newSalary.reduce((a, b) => a + b)

console.log(newSalary)
console.log(newSalarySum)
console.log(newSalarySum - oldSalarySum);