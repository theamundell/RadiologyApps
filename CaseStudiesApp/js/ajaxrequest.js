function getRandom() {
  $.ajax({
    url: 'test-section.html',
    // data : data,
    contentType: "text/html",
    method: 'GET'
  }).done( function ( returned_data ){
    $('.swiper-wrapper').append(returned_data);
  }).fail( function( data ) {
    console.log( data );
  });
}
