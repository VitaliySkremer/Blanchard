document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.accrodion__list-item-link').forEach(function(tabsBtn){
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path


      // document.querySelectorAll(".accrodion__list-item-link").forEach(function(tabContent){
      //   tabContent.classList.remove("how__step-active")
      // })
      //document.querySelector(`[data-path="${path}"]`).classList.add("how__step-active")
      document.querySelectorAll(".rolled__main-cocntent").forEach(function(tabContent){
        tabContent.classList.remove("rolled__main-content-active")
      })
      document.querySelector(`[data-rolled-target="${path}"]`).classList.add("rolled__main-content-active")
    })
  })
})