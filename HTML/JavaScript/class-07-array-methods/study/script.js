// Array Methods - Principio da imutabilidade
// const team = ['Brasil']
// const teams = ['Brasil', 'Alemanha', 'Argentina', 'Portugal']

// teams.forEach((value)=> {
//     console.log("Nome:" + value)
// }) 

// let teamArray = Array.from(team)
// team.forEach((value) => {
//     console.log(value)
// })


// console.log(teamArray)

// let teste = teams.map((v, i, a) => {
//     console.log(v, i, a)
//     return v + 'Teste'
// })
// console.log(teste)
// console.log(teams)


// const real = [10, 20, 30, 40, 50,]

// const sumReal = real.reduce((a, b) => a + b )
// console.log(sumReal)

// let dollarValue = 5.26
// const convertDollar = real.map((value) => +((value * dollarValue).toFixed(2)))
// let sumDollar = convertDollar.reduce ((a, b) => a + b)
// console.log(sumDollar)

// console.log(convertDollar)
// console.log(real)

// console.log(real.map((value) => value * dollarValue).reduce((a, b) => a + b))

// console.log(real.filter((value, index) => {
//     return index > 3

// }))

// const averageStudants = [
//     {id: 1, name: 'João', average: 4, birth: 1990},
//     {id: 2, name: 'Thiago', average: 6, birth: 2002},
//     {id: 3, name: 'Jonas', average: 6, birth: 1998},
//     {id: 4, name: 'Rosa', average: 4, birth: 2004},
//     {id: 5, name: 'Amanda', average: 8, birth: 1992},
//     {id: 6, name: 'Pedro', average: 7, birth: 1993}
    
// ]
// console.table(averageStudants)
// console.table(averageStudants.filter(studant => studant.birth >= 2000))
// console.log(averageStudants.filter(value))

// let yearCurrent = new Date().getFullYear()

// console.log(yearCurrent)
// console.table(averageStudants.filter(studant => (yearCurrent - studant.birth) >= 30))
// console.log(averageStudants.find((studant) => studant.name == 'Thiago'))
// console.log(averageStudants.filter((studant) => Array.from(studant.name)[0].toLocaleLowerCase() == "J"))

// const teams = ['Brasil', 'Alemanha', 'Argentina', 'Portugal']
// // const real = [10, 20, 30, 40, 50,]
// const real = [10, 30, 50, 20, 40]

// console.log(teams.concat(real))

// console.log(real.sort((a, b) => a - b ));
// console.log(teams.sort((a, b) => {
//     if (a.toLocaleLowerCase > b.toLocaleLowerCase) return 1;
//     if (a.toLocaleLowerCase < b.toLocaleLowerCase) return -1;
//     return 0
// })

// )


// >>>>> ANOTAÇÕES <<<<<

// + = Number
// Table ASCII (0-9, A-Z, a-b)












