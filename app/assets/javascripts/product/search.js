$(document).on('turbolinks:load', function() {
  $(function(){
    //_form.htmlにある検索結果一覧
    function appendBrand(brand) {
        var html = `<li class="sell-brand__name">
                       ${ brand.name }
                    </li>`
        $(".sell-brand-suggest").append(html);
      }

    $(document).on('keyup',".brand-field", function(){
      //サーチ欄にテキストを入力し文字が打ち込み終わる（キーが上がる）たびに発火
      var input = $(".brand-field").val();
      //フォームに入力されている値をvalで取得、inputに入れる

      $.ajax({
        type: 'GET',
        url: '/products/new',
        data: { keyword: input },
        dataType: 'json'
      })
      //GET /usersのリクエストなのでusersコントローラのindexアクションが動く
      .done(function(brands) {
          $("ul.sell-brand-suggest li").remove();
          brands.forEach(function(brand) {
            //配列全てに一つ一つ適応
              appendBrand(brand);
              //検索結果を最後に追加
          })
      })
      .fail(function() {
          alert('ブランド検索に失敗しました');
      })
    });
  // });
  // $(function() {
    $(document).on("ho", ".sell-brand__name",
      function() {
        console.log("aaa")
        $(this).css('background', '#4294fb');
      },
      function() {
        $(this).css('background', '#fff');
    });
  });
  $(function() {
    $(document).on({
      "mouseenter": function(){
        $(this).css('background', '#4294fb');
      },
      "mouseleave": function(){
        $(this).css('background', '#fff');
      }
    }, ".sell-brand__name");
  });
  $(function() {
    $(document).on("click",'.sell-brand__name', function() {
      $("ul.sell-brand-suggest li").remove();
      var brand = $(this).text().replace(/[\n\s　]/g, "");
      console.log(brand)
      $("#product_brand").val(brand);
    });
  });
})

