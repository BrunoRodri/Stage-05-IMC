export const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title'),
  btnClose: document.querySelector('.modal button.close'),
  open() {
    modal.wrapper.classList.add('open')
  },
  close() {
    modal.wrapper.classList.remove('open')
  }
}

modal.btnClose.onclick = () => {
  modal.close()
}


// FECHAR NO ESC
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape'){
    modal.close()
  }
}