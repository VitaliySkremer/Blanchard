document.addEventListener("DOMContentLoaded", function(){
  $(document).mouseup(function (e) {
    var container = $(".header__bottom-drop-block");
    var container2 = $(".headder__bottom-list-wrapper");
    if (container.has(e.target).length === 0 && container2.has(e.target).length === 0){
      document.querySelectorAll(".header__bottom-drop-block").forEach(function(tabContent){
        tabContent.classList.remove("drop-block-is-active")
      })
      document.querySelectorAll(".header__botom-item-drop").forEach(function(tabContent){
        tabContent.classList.remove("header__bottom-item-btn-active")
      })
    }
  });
  document.querySelectorAll('.header__bottom-item-btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path
      var test = document.querySelector(`[data-target="${path}"]`).classList.contains("header__bottom-item-btn-active")
      if(test){
           document.querySelector(`[data-target="${path}"]`).classList.remove("header__bottom-item-btn-active")
           document.querySelector(`[data-block="${path}"]`).classList.remove("drop-block-is-active")
        }
      else {
        document.querySelectorAll(".header__botom-item-drop").forEach(function(tabContent){
          tabContent.classList.remove("header__bottom-item-btn-active")
        })
        document.querySelectorAll(".header__bottom-drop-block").forEach(function(tabContent){
          tabContent.classList.remove("drop-block-is-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.toggle("header__bottom-item-btn-active")
        document.querySelector(`[data-block="${path}"]`).classList.toggle("drop-block-is-active")
      }
    })
  })
})
