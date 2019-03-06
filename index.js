

$(document).ready(function() {
  $('.drawer').drawer();
  var page = $(this).data('page');
  if(page === undefined) {
    var a = 1+Math.round(Math.random()*10);
    if (a==1) page = "page1"
    if (a==2) page ="page2"
	  if (a==3) page ="page3"
	  if (a==4) page ="page4"
	  if (a==5) page ="page5"
	  if (a==6) page ="page6"
	  if (a==7) page ="page7"
	  if (a==8) page ="page8"
	  if (a==9) page ="page9"
	  if (a==10) page ="page10"
	  if (a==11) page ="page11"
    $(".main-content .page:not('.hide-content')").stop().fadeOut('fast', function() {
        $(this).addClass('hide-content');
        $('.main-content .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide-content');
    });
    $.router.set({
      route: '#/playlist',
      queryString: 'q=' + page
    });
  }
  $(".drawer-menu li a").on('click', function(e) {
      e.preventDefault();
      page = $(this).data('page');
      $.router.set({
        route: '#/playlist',
        queryString: 'q=' + page
      });
      $(".main-content .page:not('.hide-content')").stop().fadeOut('fast', function() {
          $(this).addClass('hide-content');
          $('.main-content .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide-content');
          $('.drawer').drawer('toggle')
      });
  })
  $('.random').on('click', function() {
    var page = $(this).data('page');
    if(page === undefined) {
      var a = 1+Math.round(Math.random()*10);
      if (a==1) page = "page1"
      if (a==2) page ="page2"
  	  if (a==3) page ="page3"
  	  if (a==4) page ="page4"
  	  if (a==5) page ="page5"
  	  if (a==6) page ="page6"
  	  if (a==7) page ="page7"
  	  if (a==8) page ="page8"
  	  if (a==9) page ="page9"
  	  if (a==10) page ="page10"
  	  if (a==11) page ="page11"
      $(".main-content .page:not('.hide-content')").stop().fadeOut('fast', function() {
          $(this).addClass('hide-content');
          $('.main-content .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide-content');
      });
      $.router.set({
        route: '#/playlist',
        queryString: 'q=' + page
      });
    }
  })
  $('.enlaces-toggle').on('click', function() {
    $('.drawer').drawer('toggle');
    $('.enlaces').toggleClass('hide-enlaces')
    $('.info').addClass('hide-info')
    $('.drawer-nav ul li').toggleClass('hide-content')
  })
  $('.drawer').on('drawer.closed', function(){
    $('.drawer-nav ul li').removeClass('hide-content')
    $('.enlaces').addClass('hide-enlaces')
  });
  $('.info-toggle').on('click', function() {
    $('.enlaces').addClass('hide-enlaces')
    $('.info').toggleClass('hide-info')
  })
  $('.close-enlaces').on('click', function() {
    $('.enlaces').toggleClass('hide-enlaces')
  })
  $('.close-info').on('click', function() {
    $('.info').toggleClass('hide-info')
  })
});
