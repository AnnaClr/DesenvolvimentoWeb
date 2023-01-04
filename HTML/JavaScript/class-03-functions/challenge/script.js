// Faça um programa que execute o IMC de cada paciente;
// Os pacientes deverão estar em uma lista e conter as propriedades:
// name, height, weight;
// Escreva na tela o nome do paciente e o seu IMC.

function cIMC(paciente) {
    let imc = paciente.weight / (paciente.height / 100) ** 2
    return imc.toFixed(2)
}

const listPacientes = [
    {
        name: "Maria",
        height: 160,
        weight: 60
    },
    {
        name: "João",
        height: 179,
        weight: 80
    },
    {
        name: "Ana",
        height: 150,
        weight: 48
    }

]

for (const paciente of listPacientes) {
    document.write(`O IMC de ${paciente.name} é ${cIMC(paciente)} <br>`)

}

console.log(listPacientes)

// document.write(`O IMC de ${listPacientes[0].name} é ${cIMC(listPacientes[0])} <br>`)
// document.write(`O IMC de ${listPacientes[1].name} é ${cIMC(listPacientes[1])} <br>`)
// document.write(`O IMC de ${listPacientes[2].name} é ${cIMC(listPacientes[2])} <br>`)































