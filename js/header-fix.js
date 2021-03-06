$(function(){
  
  let headerFix = $('.js-header-middle');
  let datetime = $('.js-datetime');
  let weather = $('.js-weather');
  let currentCity = $('.js-current-city');
  let menuToTop = headerFix.offset().top;
  let menuHeight = headerFix.innerHeight();
  let menuToBottom = menuToTop + menuHeight;
  let docWidth = $(window).width();
  let main = $('.main');

// Закрепление панели меню наверху при скролле

  $(window).scroll(function() {
    if ( ($(window).scrollTop() > menuToBottom) && (docWidth <= 768) ) {
      headerFix.addClass('header-middle_mobile-fix');
      main.css('margin-top', menuHeight);
      datetime.hide();
      weather.hide();

      if ( docWidth > 560) {
        currentCity.hide();
      }
    } else {
      headerFix.removeClass('header-middle_mobile-fix');
      headerFix.removeAttr('style');
      main.removeAttr('style');
      datetime.show();
      weather.show();
      if ( docWidth > 560) {
        currentCity.show();
      }
    }
  });
  
});