
const navbar = document.querySelector('#nav')
const navBtn =document.querySelector(".btn-toggle");

const closeBtn = document.querySelector('.aside-btn')
const sidebar = document.querySelector('.sidebar');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})
navBtn.addEventListener("click",function(){
 sidebar.classList.toggle("show-toggle")
})

closeBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-toggle')
})