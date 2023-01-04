// Crie um programa que converta a temperatura Celsius ou Fahrenheit;
// O algoritimo deve ser capaz de interpretar o valor passado e converter para o outro;
// A temperatura de entrada e de saída deve conter a letra de referência (EX: 10C - 50F);
// Deve funcionar com espaços, letras minusculas e tratar dados invalidos (Throw, Try e Cacth).

// C = (F - 32) * 5 / 9
// F = C * 9/5 + 32

function degreeConvert(degree) {
    let auxxDegree = String(degree.split(" ").join(""))
    let auxDegree = Array.from(auxxDegree)
    let scale = auxDegree.pop()
    let newDegree = Number(auxDegree.join(""))
    
    console.log(auxxDegree)
    console.log(degree)
    console.log(auxDegree)
    console.log(scale)
    console.log(newDegree)

    if (isNaN(newDegree)) {
        throw new Error("Insira uma temperatura válida!")

    }
    
    
    if (scale.toUpperCase() == "C") {
        return (newDegree * 9/5 + 32).toLocaleString("pt-BR") + "F"
        
    } else if (scale.toUpperCase() == "F") {
        return ((newDegree - 32) * 5/9).toLocaleString("pt-BR") + "C"

    } else {
        throw new Error("Escala inválida!")
    }
}

try {
    let temperature = "10C"
    console.log(`${temperature} = ${degreeConvert(temperature)}`)
} catch (error) {
    console.log(error);
}