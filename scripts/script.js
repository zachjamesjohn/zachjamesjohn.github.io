//script.js
//COIS 3420 Web Application Development
//Assignment #1 - Front End Design
//Author: Zachary John - zjohn
//Description: The only thing this script does is open the hamburger menu by changing the active class

const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByTagName('nav')[0]

toggleButton.addEventListener('click', () => { //Used to toggle the hamburger menu on and off
    navbarLinks.classList.toggle('active')
})

