const submitBtn = document.querySelector('.submit-btn'),
      phone = document.querySelector('#phone'),
      password = document.querySelector('#user-password'),
      passwordConfirm = document.querySelector('#user-password-confirm'),
      email = document.querySelector('#mail'),
      errorDisplayers = document.getElementsByClassName('error'),
      inputFields = document.querySelectorAll('input'),
      cardContainer = document.querySelector('.card-container'),
      outroOverlay = document.querySelector('.outro-overlay')

let count = 6

function onValidation(current ,messageString, booleanTest){
    let message = current
    message.textContent = messageString
    booleanTest != 0 ? ++count : count
}

for(let i=0; i<inputFields.length; i++){
    let currentInputField = inputFields[i]
    let currentErrorDisplayer = errorDisplayers[i]

    currentInputField.addEventListener('keyup', (e)=>{
        let message = currentErrorDisplayer
        e.target.value != "" ? onValidation(currentErrorDisplayer, '', 0) : onValidation(currentErrorDisplayer, '*Preencha esse campo', 0)
    })
}

phone.addEventListener('keyup', (e)=>{
    let message = errorDisplayers[3]
    e.target.value == e.target.value.replace(/\D/g,'') ? onValidation(message, '', 1) : onValidation(message, '*Informe um número válido', 0)
})

email.addEventListener('keyup', (e)=>{
    let message = errorDisplayers[2]
    mail.value.includes('@') & mail.value.includes('.com') ? onValidation(message, '', 1) : onValidation(message, '*Informe um Email válido', 0)
})

password.addEventListener('keyup', (e)=>{
    let message = errorDisplayers[4]
    password.value.length >= 8 ? onValidation(message, '', 1) :  onValidation(message, 'Mínimo de 8 caracteres', 0)
})

passwordConfirm.addEventListener('keyup', (e)=>{
    let message = errorDisplayers[5]
    password.value === e.target.value ? onValidation(message, '', 1) : onValidation(message, '*As senhas não são iguais', 0)
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(count > 5){
        window.location.href = '../../index.html';
    }
    else{
        for(let i=0; i<errorDisplayers.length; i++){
            errorDisplayers[i].textContent = '*Preencha este campo'
        }
    }
})