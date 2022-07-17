const _cartButton= document.querySelector ('.main-header__cart-button-container')
const _modal = document.querySelector (".cart-modal-container")


_cartButton.addEventListener ('click', e => { 
    e.target.classList.toggle ('main-header__cart-button-container--presionado')
    _modal.classList.toggle('show')
    
    if (e.target.classList.contains ('main-header__cart-button-container--presionado')){
        console.log('Ocultar')
    } else {
        console.log('Mostrar')
    }
})

window.addEventListener('keydown', e =>{
    _modal.classList.remove('show')
    if(e.key == 'Escape'){

        console.log('Cerrar modal')
    }else{
        console.log(e.key)

    }
})
