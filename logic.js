$( document ).ready(function () {
  $('.block-content').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).css('visibility' ,'visible');

    $(this).addClass( "animated bounceInRight" );
  } else {
    $(this).css('visibility' ,'hidden');
    $(this).removeClass('animated bounceInRight');
  }
});

})
