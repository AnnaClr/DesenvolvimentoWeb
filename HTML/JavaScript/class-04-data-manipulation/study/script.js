// >>>> Data Manipulation <<<<

// Prototype (Chain)

// function Car(motorPower) {
//     this.motor = motorPower
// }

// let myName = "Ana Clara"
// let age = 16
// let phrase = "Eu sou Web Developer"

// console.log(myName.length)
// console.log(myName[1])
// console.log(myName.toLocaleUpperCase())
// console.log(phrase.split(","))
//console.log(phrase.includes("web")) // false
// console.log(phrase.includes("Web")) // true
// console.log(phrase.toLocaleUpperCase().includes("WEB"))

// >>>>> Number <<<<<<<

// let num = 7
// let num1 = 7.28700
// let num2 = 7.9876

// console.log(String(num).length)
// console.log(String(num1).replace(".", "").length)
// console.log(String(num1.toFixed(2)).replace(".", ","))
// console.log(String(num2).length)


// Convert Currency (International Standard Currency Code ISO 4217)
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "brl" }))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "usd" }))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "eur" }))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "jpy" }))


// console.log(Math.PI)
// console.log(Math.sqrt(81))
// console.log(Math.abs(num2))
// console.log(Math.max(2, 64, 3, 764, 85, 869, 77))
// console.log(Math.min(2, 64, 3, 764, 85, 869, 77))
// console.log(Math.cell(num1))
// console.log(Math.round(num1))
// console.log(Math.floor(num1))

// let sorteados = []
// let win = false
// let aux = 0

// while (aux < 10) {
//     let num = Math.round(Math.random()* 10)

    
   
//     if(!sorteados.includes(num)) {
//         console.log(num)
//         sorteados[aux] = num
//     }

//     aux++
// }

// console.log(sorteados)


// >>>> Date Manipulation <<<< 

// let date = new Date() 
// let date1 = new Date("2022-11-17 12:03:19")
// let date2 = new Date("2022-11-18 12:03:19")
// documente.write(date)
// let hour = date1.getHours()
// let minuts = date1.getMinutes()
// let seconds = date1.getSeconds()

// document.write(`${String(hour).padStart(2, "0")}:${String(minuts).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`)
// document.write(date1.toLocaleTimeString())
// document.write(date.toLocaleTimeString("pt-BR"))
// document.write(date.toLocaleTimeString())

// date1.setHours(2)
// date1.setHours(date1.getHours() - 3)
// date1.setMinutes(2)
// date1.setMinutes(date1.getMinutes() + 60)
// date1.setSeconds(2)
// date1.setSeconds(date1.getSeconds() + 60)

// document.write(date1.toLocaleTimeString("pt-BR"))

// let day = date.getDay()
// let month = date.getMonth()
// let year = date.getfullYear()
// document.write(day + 1) // 0 - 6
// document.write(date)
// document.write(month + 1)  // 0 - 11
// document.write(year)
// document.write(`${String(data).padStart(2, "0")}/${String(month).padStart(2, "0")}/${String(year)}`)
// document.write(date.toLocaleDateString())

// date.setDate(date.getDate() + 30)
// document.write(date.toLocaleDateString("pt-BR"))

// document.write(date1.toLocaleString("pt-BR"))
// document.write((date2 - date1) / 1000 / 60 / 60 / 24)



// >>>>> Array Manipulation <<<<<<

// let myArray1 = [1, "a" ,"A"]
// let myArray = Array( 1, "a", () => "X")

// console.log(myArray[2]())
// console.log(myArray.length)

// let techs = ["HTML", "CSS", "Git"]
// techs.push("JavaScript") // Insere no topo
// techs.pop() // Remover do topo (LIFO "Pilha")
// techs.unshift("SQL") // Insere no inicio
// techs.shift() // Remove do inicio (FIFO "Fila")
// let elementDeleted = techs.pop()
// alert(elementDeleted)
// document.write(`Elemento ${elementDeleted} removido com sucesso!`)

// let index = techs.indexOf("CSS")
// techs.splice(2, 1) 
// techs.splice(index, 1) 
// console.log(index)
//  document.write(techs)
// document.write(`${techs} <br>`)
// document.write(techs.slice(1, -1))
// document.write(techs.slice(0, -1))


// document.write(techs.sort())
// nums = [2, "2", 20, 1, 10, 5, 78, 34, 3]
// document.write(nums.sort((a, b) => a - b))

// Sort ~ Comparação 
// EX: +(positivo ~ A > B), =(Nulo ~ ordem preservada), -(negativo ~ B > A)














