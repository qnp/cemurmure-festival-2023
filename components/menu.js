let menuOpen = false;
const navContent = document.querySelector('.nav-content');
const burger = document.querySelector('.burger');
burger.addEventListener('click', function(e) {
  if (!menuOpen) navContent.classList.add('open');
  else navContent.classList.remove('open');
  menuOpen = !menuOpen;
});
