let checkbutton = document.getElementById("check-button")
let ageInput = document.getElementById('age-input')

checkbutton.addEventListener('click', function() {
    let age = ageInput.value
    let message = (age>=18) ? "Você é um adulto!" : 'Você não é um adulto!'
    alert(message)
    ageInput.value = ''
})