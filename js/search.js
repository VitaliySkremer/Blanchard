window.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#header__search-close").addEventListener("click", function(){
    document.querySelector("#header__search-close").classList.toggle("search-active-btn")
    document.querySelector("#header__search-form").classList.toggle("search-active")
  })

})