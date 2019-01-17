$(document).on('turbolinks:load', function() {
  $(function() {
    $(".nav-lists li").hover(
      function() {
        $(".nav-parent-lists__list",this).css('display', 'block');
      },
      function() {
        $(".nav-parent-lists__list",this).css('display', 'none');
    });
  });
});
