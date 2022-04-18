document.addEventListener("DOMContentLoaded", function(){
  $(document).mouseup(function (e) {
    var container = $(".window__block");
    if (container.has(e.target).length === 0){
      document.querySelectorAll(".window").forEach(function(tabContent){
        tabContent.classList.remove("window__active")
      })
    }
  });
  document.querySelectorAll('.gallery__swiper-item').forEach(function(tabsBtn){
    tabsBtn.addEventListener("click", function(event) {
      document.querySelector(".window").classList.toggle("window__active")
      const path = event.currentTarget.dataset.path
      document.querySelectorAll(".window__block").forEach(function(tabContent){
        tabContent.classList.remove("window__active")
      })
        document.querySelector(`[data-gallery-target="${path}"]`).classList.toggle("window__active")
    })
  })
})
