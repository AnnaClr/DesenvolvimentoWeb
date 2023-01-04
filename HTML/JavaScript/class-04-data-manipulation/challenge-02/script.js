// Crie uma função que remova os elementos de um Array através do parâmetro;
// O algoritimo deve funcionar com tipo texto e tipo numérico;
// Valide para receber espaços, letras maiúsculas e letras minúsculas.

let techs = ['HTML', 15, 'css', 15, 'JavaScript', 30, 'SQL', 10, 'git', 8]

function deleteArrayElement(techsName) {
    let auxArray = techs
    techs = []

    auxArray.map((element) => {
       if(String(techsName).toLocaleLowerCase().split(" ").join("") != String(element).toLocaleLowerCase().split(" ").join("")) {
        techs.push(element)
       }
       
    })
}

deleteArrayElement("JavaScript")
document.write(techs)
console.log(techs)










