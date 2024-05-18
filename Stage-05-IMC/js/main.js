import { modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { imc,notNumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight =  document.querySelector('#peso')
const inputHeight = document.querySelector('#altura')

form.onsubmit = (e) => {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)
  
  if(showAlertError){
    AlertError.open()
    return
  }

  const result = imc(weight, height)
  const message = `Seu IMC é de ${result}`
  
  modal.message.innerText = message
  modal.open()
}

form.oninput = () => {
  AlertError.close()
}


