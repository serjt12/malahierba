$(document).ready(function() {
  $('.drawer').drawer();
    $(".drawer-menu li a").on('click', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        $(".main-content .page:not('.hide-content')").stop().fadeOut('fast', function() {
            $(this).addClass('hide-content');
            $('.main-content .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide-content');
            $('.drawer').drawer('toggle')
        });
    });
});
