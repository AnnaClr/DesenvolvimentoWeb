const calculateButton = document.querySelector('.calculate-button')
console.log(calculateButton);
calculateButton.addEventListener('click', (event) => {
    event.preventDefault()
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)

    const imc = (weight / (height/ 100) ** 2).toFixed(2)
    console.log(imc)

    if (height && weight) {
        let situation = ''
        if (imc < 18.5) {
            situation = 'Magreza'
        } else if (imc >= 18.5 && imc < 24.9 ) {
            situation = 'Peso Normal'
        } else if (imc >= 24.9 && imc < 29.9 ) {
            situation = 'Sobrepeso'
        } else if (imc >= 29.9 && imc < 34.9 ) {
            situation = 'Obesidade 1'
        } else if (imc >= 34.9 && imc < 39.9 ) {
            situation = 'Obesidade 2'
        } else if (imc >= 39.9) {
            situation = 'Obesidade 3'
        }
        
    const result = document.querySelectorAll('.result')
    result.forEach((result) => {
        result.innerHTML = `Seu IMC é ${imc} ${situation}`
    })

    // console.log(result)

    const Containermodal = document.querySelector('.container-modal')
    Containermodal.style.display = 'grid'

    } else {
        alert('Por favor, insira um peso e altura!')
    }
   
})

const closeButton = document.querySelector('.close-button')
closeButton.addEventListener('click', () => {
    const Containermodal = document.querySelector('.container-modal')
    Containermodal.style.display = 'none'
})
