$(document).on('turbolinks:load', function() {
  $(function() {
    $(".nav-lists li").hover(
      function(e) {
        $(".nav-parent-lists__list",this).css('display', 'block');
      },
      // マウスポインターが画像から外れた時の動作
      function(e) {
      // thisの子要素取得
        $(".nav-parent-lists__list",this).css('display', 'none');
    });
  });
});
