var randomcases=new Array()

// Section 1
randomcases[0]='cases/section1/1-1.html'
randomcases[1]='cases/section1/1-2.html'
randomcases[2]='cases/section1/1-3.html'
randomcases[3]='cases/section1/1-4.html'
randomcases[4]='cases/section1/1-5.html'
randomcases[5]='cases/section1/1-6.html'
randomcases[6]='cases/section1/1-7.html'
randomcases[7]='cases/section1/1-8.html'
randomcases[8]='cases/section1/1-9.html'
randomcases[9]='cases/section1/1-10.html'
randomcases[10]='cases/section1/1-11.html'
randomcases[11]='cases/section1/1-12.html'
// randomcases[12]='cases/section1/1-13.html'  // Case 12 doesn't exist for some reason.
randomcases[13]='cases/section1/1-14.html'
randomcases[14]='cases/section1/1-15.html'
randomcases[15]='cases/section1/1-16.html'
randomcases[16]='cases/section1/1-17.html'

// Section 2
randomcases[17]='cases/section2/2-1.html'
randomcases[18]='cases/section2/2-2.html'
randomcases[19]='cases/section2/2-3.html'
randomcases[20]='cases/section2/2-4.html'
randomcases[21]='cases/section2/2-5.html'
randomcases[22]='cases/section2/2-6.html'
randomcases[23]='cases/section2/2-7.html'
randomcases[24]='cases/section2/2-8.html'
randomcases[25]='cases/section2/2-9.html'
randomcases[26]='cases/section2/2-10.html'
randomcases[27]='cases/section2/2-11.html'
randomcases[28]='cases/section2/2-12.html'
randomcases[29]='cases/section2/2-13.html'
randomcases[30]='cases/section2/2-14.html'
randomcases[31]='cases/section2/2-15.html'
randomcases[32]='cases/section2/2-16.html'
randomcases[33]='cases/section2/2-17.html'
randomcases[34]='cases/section2/2-18.html'
randomcases[35]='cases/section2/2-19.html'
randomcases[36]='cases/section2/2-20.html'
randomcases[37]='cases/section2/2-21.html'

// Section 3
randomcases[38]='cases/section3/3-1.html'
randomcases[39]='cases/section3/3-2.html'
randomcases[40]='cases/section3/3-3.html'
randomcases[41]='cases/section3/3-4.html'
randomcases[42]='cases/section3/3-5.html'
randomcases[43]='cases/section3/3-6.html'
randomcases[44]='cases/section3/3-7.html'
randomcases[45]='cases/section3/3-8.html'
randomcases[46]='cases/section3/3-9.html'
randomcases[47]='cases/section3/3-10.html'
randomcases[48]='cases/section3/3-11.html'
randomcases[49]='cases/section3/3-12.html'
randomcases[50]='cases/section3/3-13.html'

// Section 4
randomcases[51]='cases/section4/4-1.html'
randomcases[52]='cases/section4/4-2.html'
randomcases[53]='cases/section4/4-3.html'
randomcases[54]='cases/section4/4-4.html'
randomcases[55]='cases/section4/4-5.html'
randomcases[56]='cases/section4/4-6.html'
randomcases[57]='cases/section4/4-7.html'
randomcases[58]='cases/section4/4-8.html'
randomcases[59]='cases/section4/4-9.html'
randomcases[60]='cases/section4/4-10.html'
randomcases[61]='cases/section4/4-11.html'
randomcases[62]='cases/section4/4-12.html'
randomcases[63]='cases/section4/4-13.html'
randomcases[64]='cases/section4/4-14.html'
randomcases[65]='cases/section4/4-15.html'

function randomcase(){

	var rand = Math.floor(Math.random()*randomcases.length);

	// Make sure rand is not invalid; randomcases[12] does not exist.
	while (rand === 12) {
		rand = Math.floor(Math.random()*randomcases.length);
	}

	return randomcases[rand];
}

function getRandom() {
  $.ajax({
    url: randomcase(),
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
