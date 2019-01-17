$(document).on('turbolinks:load', function() {
  $(function() {
    $('#product-tab li').click(function() {
      var index = $('#product-tab li').index(this);
      $('#product-tab li').removeClass('active');
      $(this).addClass('active');
      $('#product-menu li').removeClass('active').eq(index).addClass('active');
    });
  });

  $(function() {
    $('#news-tab li').click(function() {
      var index = $('#news-tab li').index(this);
      $('#news-tab li').removeClass('active');
      $(this).addClass('active');
      $('#news-menu .mypage-tab-panel-list').removeClass('active').eq(index).addClass('active');
    });
  });

  $(function() {
    $(".mypage-tab-panel__news li").hover(
      function() {
        $(this).css('background', '#f5f5f5');
      },
      function() {
        $(this).css('background', '#fff');
    });
  });

  $(function() {
    $(".common-nav__list li").hover(
      function() {
        $(this).css('background', '#f5f5f5');
      },
      function() {
        $(this).css('background', '#fff');
    });
  });
});
