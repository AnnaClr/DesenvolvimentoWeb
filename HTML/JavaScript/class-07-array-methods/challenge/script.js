// Crie uma lógica para calcular o somatorio das receitas e das despesas

const incomes = [
    'salary', 'R$ 2000,00',
    'commission', 'R$ 825,45',
    'bônus', 'R$ 320,00',
]

let incomesValues = incomes.filter((value) => value.includes('R$'))
let incomesValueNumbers = incomesValues.map((value) => 
Number(value.replace('R$ ', "").replace(',', '.')))
let incomesSum = incomesValueNumbers.reduce((a, b) => a + b)

console.log(incomesValues)
console.log(incomesValueNumbers)
console.log(incomesSum)

const expenses = [
    'rent', 'R$ 500,00',
    'energy', 'R$ 325,55',
    'water', 'R$ 120,34',
    'food', 'R$ 1300,62',
]

let expenseValues = expenses.filter((value) => value.includes('R$'))
let expensesValueNumbers = expenseValues.map((value) => 
Number(value.replace('R$ ', "").replace(',', '.')))
let expenseSum = expensesValueNumbers.reduce((a, b) => a + b)

console.log(expenseValues)
console.log(expensesValueNumbers)
console.log(expenseSum)

let balance = incomesSum - expenseSum
let situation

if (balance < 0) {
    situation = 'Welcome to Serasa!'
} else if (balance == 0) {
    situation = 'Escapou fedendo!'
} else {
    situation = 'Congratulations, tu é o bichão!'
}

console.log(`Entradas: ${incomesSum}`)
console.log(`Despesas: ${expenseSum}`)
console.log(`Saldo: ${balance.toLocaleString('pt-BR', {style: 'currency', currency: 'brl'})}`)