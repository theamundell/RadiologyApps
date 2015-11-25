
function getRandom() {
  $.ajax({
    url: 'cases/1-1.html',
    // data : data,
    contentType: "text/html",
    method: 'GET'
  }).done( function ( returned_data ){
    $('.swiper-wrapper').append(returned_data);
    swiper.init();
  }).fail( function( data ) {
    console.log( "An error occurred during AJAX request." );
  });
}
