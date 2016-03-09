!function getRandomCases() {

	var randomCases = new Array();

	// Section 1
	randomCases[0]='cases/section1/1-1.html';
	randomCases[1]='cases/section1/1-2.html';
	randomCases[2]='cases/section1/1-3.html';
	randomCases[3]='cases/section1/1-4.html';
	randomCases[4]='cases/section1/1-5.html';
	randomCases[5]='cases/section1/1-6.html';
	randomCases[6]='cases/section1/1-7.html';
	randomCases[7]='cases/section1/1-8.html';
	randomCases[8]='cases/section1/1-9.html';
	randomCases[9]='cases/section1/1-10.html';
	randomCases[10]='cases/section1/1-11.html';
	randomCases[11]='cases/section1/1-12.html';

	// Section 2
	randomCases[17]='cases/section2/2-1.html';
	randomCases[18]='cases/section2/2-2.html';
	randomCases[19]='cases/section2/2-3.html';
	randomCases[20]='cases/section2/2-4.html';
	randomCases[21]='cases/section2/2-5.html';
	randomCases[22]='cases/section2/2-6.html';
	randomCases[23]='cases/section2/2-7.html';
	randomCases[24]='cases/section2/2-8.html';
	randomCases[25]='cases/section2/2-9.html';
	randomCases[26]='cases/section2/2-10.html';
	randomCases[27]='cases/section2/2-11.html';
	randomCases[28]='cases/section2/2-12.html';
	randomCases[29]='cases/section2/2-13.html';
	randomCases[30]='cases/section2/2-14.html';
	randomCases[31]='cases/section2/2-15.html';
	randomCases[32]='cases/section2/2-16.html';

	// Section 3
	randomCases[38]='cases/section3/3-1.html';
	randomCases[39]='cases/section3/3-2.html';
	randomCases[40]='cases/section3/3-3.html';
	randomCases[41]='cases/section3/3-4.html';
	randomCases[42]='cases/section3/3-5.html';
	randomCases[43]='cases/section3/3-6.html';
	randomCases[44]='cases/section3/3-7.html';
	randomCases[45]='cases/section3/3-8.html';
	randomCases[46]='cases/section3/3-9.html';
	randomCases[47]='cases/section3/3-10.html';
	randomCases[48]='cases/section3/3-11.html';
	randomCases[49]='cases/section3/3-12.html';

	// Section 4
	randomCases[51]='cases/section4/4-1.html';
	randomCases[52]='cases/section4/4-2.html';
	randomCases[53]='cases/section4/4-3.html';
	randomCases[54]='cases/section4/4-4.html';
	randomCases[55]='cases/section4/4-5.html';
	randomCases[56]='cases/section4/4-6.html';
	randomCases[57]='cases/section4/4-7.html';
	randomCases[58]='cases/section4/4-8.html';
	randomCases[59]='cases/section4/4-9.html';
	randomCases[60]='cases/section4/4-10.html';
	randomCases[61]='cases/section4/4-11.html';
	randomCases[62]='cases/section4/4-12.html';

	while (randomCases.length > 0) {
		var rand = Math.floor(Math.random()*randomCases.length);

		// Make sure rand is not invalid; randomCases[12] does not exist.
		while (rand === 12) {
			rand = Math.floor(Math.random()*randomCases.length);
		}

		if(randomCases[rand]) sendAJAX(randomCases[rand]);
		randomCases.splice(rand, 1);
	}
}()

function sendAJAX(url) {
	if(url){
		$.ajax({
			url: url,
			// data : data,
			contentType: "text/html",
			method: 'GET'
		}).done( function ( returned_data ){
			$('#append-to').append(returned_data);
			swiper.init();
			if(url.substring(0, 14) == 'cases/section2') {
        $('.hidden-section').hide();
      }
		}).fail( function( data ) {
			console.log( "An error occurred during AJAX request." );
		});
	}
}
