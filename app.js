

const container = document.querySelector('.container')
const date = document.querySelector('#date')
document.querySelector('.open-navbar-icon').addEventListener('click', () => {
  container.classList.add('change')
})

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
  container.classList.remove('change')
})

const colors = [ '#C6C013','#008148', '#EF2917']

let i = 0

Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`
})

Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle('change')
  }
})
date.innerHTML = new Date().getFullYear()


// Aos
AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
})