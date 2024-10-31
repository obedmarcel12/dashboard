var brightness = document.getElementById('brightnessIcon')
var ChangeMenu = document.getElementById('change')
var ToggleHeader = document.getElementById('ToggleHeader')
var searchIcon = document.getElementById('searchIcon')
var AsideChange = document.getElementById('AsideChange')
//
brightness.addEventListener('click', () => {
  ChangeMenu.classList.toggle('dark-mode')
  ToggleHeader.classList.toggle('dark-mode')
  searchIcon.classList.toggle('dark-color')
  AsideChange.classList.toggle('dark-mode')
})
