// const inputCheck = document.querySelector("#modo-noturno")
// const elemento = document.querySelector('body')

// alterarTema.addEventListener('click', () => {
//     const modo = inputCheck.checked ? "dark" : "light"
//     elemento.setAttribute("data-bs-theme", modo)
// })
const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
const modo = inputCheck.checked ? 'dark' : 'light'
elemento.setAttribute("data-bs-theme", modo)
})