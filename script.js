const accordion = document.querySelectorAll('.faq-boxes')
const dropdown = document.getElementById('language-container')
const dropdwnMenu = document.getElementById('dropdown-box')
const footer = document.getElementById('footer-language-container-id')
const footerDropdown = document.getElementById('footer-dropdown-container-id')

footer.addEventListener('click', () => {
  footerDropdown.classList.toggle('footer-toggle')
})

dropdown.addEventListener('click', () => {
    dropdwnMenu.classList.toggle('toggle')
    
})



  accordion.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('active')
    })
  });

  