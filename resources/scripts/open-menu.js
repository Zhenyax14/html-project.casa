
function openMenu() {
  var menu = document.querySelector('.main-menu');
  menu.classList.toggle('main-menu--active');

  // añadimos el class a classList para cambiar display
  if (menu.classList.contains('main-menu--active')) {
      menu.style.display = 'block';
  } else {
      menu.style.display = 'none';
  }
}

function closeMenu() {
        var menu = document.querySelector('.main-menu');
        menu.classList.remove('main-menu--active');
        menu.style.display = 'none';
}


