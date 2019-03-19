$(document).on('turbolinks:load', function() {
  $(function() {
    $(".sell-price__input input").keyup(function() {
      var input = $(this).val();
      var fee = input*0.1;
      var profit = input * 0.9;
      if (input >= 300){
        $(".sell-price__tax .right-side").text("¥"+fee)
        $("#profit .right-side").text("¥"+profit)
      }else{
        $(".sell-price__tax .right-side").text("-")
        $("#profit .right-side").text("ー")
      }
      // $(".nav-parent-lists__list",this).css('display', 'block');
    });
  });

  $(function() {
    $('#product_shipping_cost').change(function() {
      var val = $('#product_shipping_cost').val()
      if ($.isEmptyObject(val)){
        $(".shipping_method").css('display', 'none');
      }else{
        $(".shipping_method").css('display', 'block');
      }
    });
  });

  $(function() {
    $('#product_large_category_id').change(function() {
      var val = $('#product_large_category_id').val()
      if ($.isEmptyObject(val)){
        $("#middle-category").css('display', 'none');
      }else{
        $.ajax({
          url: '/products/new',
          type: 'GET',
          dataType: 'json',
          data: {id: val}
        })
        .done(function(categories) {
          $("#middle-category").css('display', 'block');
          $('.select-middle option').remove();
          $('.select-middle').append(`<option value>---</option>`);
          categories.forEach(function(category) {
            $('.select-middle').append(`<option value=${ category.id }>${ category.genre }</option>`);
          })
        })
        .fail(function(data) {
            console.log('選択に失敗しました');
        })
      }

    });
  });

  $(function() {
    $('#product_middle_category_id').change(function() {
      var val = $('#product_middle_category_id').val()
      if ($.isEmptyObject(val)){
        $("#small-category").css('display', 'none');
      }else{
        $.ajax({
          url: '/products/new',
          type: 'GET',
          dataType: 'json',
          data: {smallId: val}
        })
        .done(function(categories) {
          $("#small-category").css('display', 'block');
          $('.select-small option').remove();
          $('.select-small').append(`<option>---</option>`);
          categories.forEach(function(category) {
            $('.select-small').append(`<option value=${ category.small_id }>${ category.small_genre }</option>`);
          })
        })
        .fail(function(data) {
            console.log('選択に失敗しました');
        })
      }
    });
  });

  $(function() {
    $('#product_small_category_id').change(function() {
      var val = $('#product_small_category_id').val()
      console.log(val)
      if (val === "---"){
        $("#size-form").css('display', 'none');
      }else{
        $("#size-form").css('display', 'block');
        $("#brand-form").css('display', 'block');
      }
    });
  });
});
