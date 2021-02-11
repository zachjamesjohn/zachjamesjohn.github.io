const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByTagName('nav')[0]

toggleButton.addEventListener('click', () => { //Used to toggle the hamburger menu on and off
    navbarLinks.classList.toggle('active')
})

