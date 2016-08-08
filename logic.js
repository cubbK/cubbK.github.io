$( document ).ready(function () {
  if (/Mobi/.test(navigator.userAgent)) {
    // mobile!
    $('*').css('visibility' ,'visible');
  }else {
    var num = 0;

    $('.block-content').on('inview', function(event, isInView) {
      if (isInView) {
        $(this).css('visibility' ,'visible');
        var anim = careParte(num);
        num++;

        $(this).addClass( "animated " +anim );
      } else {
        $(this).css('visibility' ,'hidden');
        $(this).removeClass('animated fadeInLeft fadeInRight');
      }
    });
    function careParte(num){
      if(num%2 == 0){

        return 'fadeInLeft';
      }else{

        return 'fadeInRight';
      }
    }

    $('.contactsAndEducation').on('inview', function(event, isInView) {
      if (isInView) {
        $(this).css('visibility' ,'visible');
        $('.education').addClass('animated fadeInLeft');
        $('.contact').addClass(' animated fadeInRight');

      }else{
        $(this).css('visibility' ,'hidden');
        $('.education').removeClass('animated fadeInLeft ');
        $('.contact').removeClass('animated fadeInRight');
      }
    });

  }
  })
