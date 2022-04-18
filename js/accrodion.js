$(function() {
  $(".accordion").accordion({
          active: false,
          autoHeight: false,
          navigation: true,
          collapsible: true,
          heightStyle: 'content'
      });

});



$('.accrodion__list-item-link').click(() => {
  if (window.innerWidth <= 615) {
    $('html, body').animate({
      scrollTop: $('.rolled__main-description').offset().top
  }, 200);
  }
});