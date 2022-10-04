/* Desenvolva sua lógica aqui */
let createModal = () => {
let divModal = document.createElement('div')
let divModalMain = document.createElement('div')
let divHeader = document.createElement('div')
let h2 = document.createElement('h2')
let buttonCloseModal = document.createElement('button')
let divModalBody = document.createElement('div')
let p = document.createElement('p')
let divImputModal = document.createElement('div')
let divBodyTwo = document.createElement('div')
let spanValue = document.createElement('span')
let inputModal = document.createElement('input')
let spanTypeValue = document.createElement('span')
let divModalValue = document.createElement('div')
let buttonEntrada = document.createElement('button')
let buttonSaida = document.createElement('button')
let divModalFinale = document.createElement('div')
let buttonCancelar = document.createElement('button')
let buttonInserir = document.createElement('button')

divModal.classList ='modal show-modal'
divModalMain.classList.add('div-modal-main')
divHeader.classList.add('modal-header')
h2.classList.add('h2-modal')
buttonCloseModal.classList.add('button-close-modal')
divModalBody.classList.add('modal-body')
divImputModal.classList.add('div-input-modal')
divBodyTwo.classList.add('div-body-two')
spanValue.classList.add('span-modal')
inputModal.classList.add('input-modal')
spanTypeValue.classList = 'span-modal span-type-value'
divModalValue.classList.add('modal-type-value')
buttonEntrada.classList.add('button-type-value')
buttonSaida.classList.add('button-type-value')
divModalFinale.classList.add('modal-button-finale')
buttonCancelar.classList = 'button-modal-value button-cancelar'
buttonInserir.classList = 'button-modal-value button-inserir'

h2.innerText = 'Registro de valor'
buttonCloseModal.innerText = 'x'
p.innerText = 'Digite o valor e em seguida no botao referente ao tipo de valor'
spanValue.innerText = 'Tipo de valor'
inputModal.placeholder = 'R$ 00,00'
inputModal.type = 'number'
spanTypeValue.innerText = 'Valor'
buttonEntrada.innerText = 'Entrada'
buttonInserir.innerText = 'Inserir valor'
buttonCancelar.innerText = 'Cancelar'
buttonSaida.innerText = 'Saida'


divHeader.append(h2, buttonCloseModal)
divModalBody.append(p, divImputModal)
divImputModal.append(spanTypeValue, inputModal)
divBodyTwo.append(spanValue,divModalValue)
divModalValue.append(buttonEntrada, buttonSaida)
divModalFinale.append(buttonCancelar, buttonInserir)
divModalMain.append(divHeader, divModalBody, divBodyTwo, divModalFinale )
divModal.appendChild(divModalMain)

return divModal

}


function showModal () {
    const buttonHeader = document.getElementById('button-openModal')
    const body = document.querySelector('body')    

    buttonHeader.addEventListener('click', () => {

        const modal = createModal()

        body.appendChild(modal)
        closeModal()
        closeModaCancelar()
    }) 
    
 }
 showModal ()

 function closeModal () {
   
    const modalClose = document.querySelector('.button-close-modal')
    const modalMain = document.querySelector('.modal')

    modalClose.addEventListener('click', () => {
        
        modalMain.remove()
    })

 }

 function closeModaCancelar () {
   
    const modalClose = document.querySelector('.button-cancelar')
    const modalMain = document.querySelector('.modal')

    modalClose.addEventListener('click', () => {
        
        modalMain.remove()
    })

 }


 