const ALL_BUTTON = document.querySelectorAll('button')
const DIVCOUNT = document.querySelector('.count')
function clickMe() {
    let count = 0
  return  ALL_BUTTON.forEach(elem => {
    elem.addEventListener('click', () => DIVCOUNT.innerHTML = count++)
    elem.addEventListener('click', () => elem.innerHTML = 'Нажата')
})
}
clickMe()
