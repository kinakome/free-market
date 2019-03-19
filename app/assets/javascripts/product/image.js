// $(document).on('turbolinks:load', function(){
//   function appendImage(image, i) {
//     var itemCount = $(".sell-upload-items").length
//     var listCount = $(".sell-upload-items").length - 1
//     var url = window.URL.createObjectURL(image);
//     if (i == 0 && itemCount == 0){
//       var label = `
//       <label multiple="multiple" class="sell-upload-items sell-upload-items-${ itemCount }" id = "first" for="product_images_image-${ itemCount }">`
//     }else{
//       var label = `<label multiple="multiple"class="sell-upload-items sell-upload-items-${ itemCount }"" for="product_images_image-${ itemCount }">`
//     }
//     var html = `<div class="sell-upload-figure">
//                   <img src="${ url }"id="image-${ itemCount }"alt="${image.name}">
//                 </div>
//                 <div class="sell-upload-button">
//                   <a class="sell-upload-edit" data-item-id="${ itemCount }">編集</a>
//                   <a class="sell-upload-remove" data-item-id="${ itemCount }">削除</a>
//                 </div>
//                 <input class="hidden" type="file" name="product[images_attributes][${ itemCount }][image][]" id="product_images_image-${ itemCount }">
//               </label>`
//     html = label + html;
//     // console.log($(".sell-upload-items").length)
//     if( itemCount ==3){
//       $('.sell-upload-drop-box').css('display', 'none')
//     }
//     $(".sell-dropbox-container").append(html);
//   }
//   $(function() {
//     $(document).on("change",'#product_images_image', function() {
//       var file = $("#product_images_attributes_0_image").prop('files')[0];
//       var files = $("#product_images_attributes_0_image").prop('files');
//       var fileSize = files.length;
//       console.log(fileSize)
//       for (var i=0; i<fileSize; i++) {
//         var file = files[i];
//         var width = parseInt($('.sell-upload-drop-box').css('width').replace('px', '') )- 160;
//         $(".sell-upload-drop-box").css('width', width);
//         appendImage(file, i);
//       }
//       $('#product_images_image').replaceWith($('#product_images_image').clone())
//     });
//   });

//   $(function() {
//     $(document).on("click",'.sell-upload-remove', function() {
//       var itemId = $(this).data("item-id");
//       $(".sell-upload-items-" + itemId).remove();
//       var width = parseInt( $('.sell-upload-drop-box').css('width').replace('px', '') )+ 160;
//       $(".sell-upload-drop-box").css('width', width);
//       var itemCount = $(".sell-upload-items").length
//       if( itemCount == 3){
//         $('.sell-upload-drop-box').css('display', 'inline-block')
//         $(".sell-upload-drop-box").css('width', "140px");
//       }
//       //ここ修正
//       $(".sell-upload-items").eq(0).attr('id', 'first');
//     });
//   });
// });
