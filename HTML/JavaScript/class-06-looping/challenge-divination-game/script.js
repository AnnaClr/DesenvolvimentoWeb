const numberRandom = Math.ceil(Math.random() * 10) 
let count = 1

while(true) {
    let numberUser = prompt("Digite um número de 1 a 10!")
    console.log(numberUser)

    if (Number(numberUser) == numberRandom) {
        alert(`Parabéns! acertou o número ${numberRandom} em ${count} tentativas.`)
        break;
    }

    if (numberUser == null) {
        alert("Programa encerrado!")
        break;

    }

    count++
}
console.log(numberRandom) 




