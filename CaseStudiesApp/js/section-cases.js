var section1 = new Array()
var section2 = new Array()
var section3 = new Array()
var section4 = new Array()

section1[0] = 'cases/section1/1-1.html'
section1[1] = 'cases/section1/1-2.html'
section1[2] = 'cases/section1/1-3.html'
section1[3] = 'cases/section1/1-4.html'
section1[4] = 'cases/section1/1-5.html'
section1[5] = 'cases/section1/1-6.html'
section1[6] = 'cases/section1/1-7.html'
section1[7] = 'cases/section1/1-8.html'
section1[8] = 'cases/section1/1-9.html'
section1[9] = 'cases/section1/1-10.html'
section1[10] = 'cases/section1/1-11.html'
section1[11] = 'cases/section1/1-12.html'
  // section1[12]='cases/section1/1-13.html'  // Case 12 doesn't exist for some reason.
section1[12] = 'cases/section1/1-14.html'
section1[13] = 'cases/section1/1-15.html'
section1[14] = 'cases/section1/1-16.html'
section1[15] = 'cases/section1/1-17.html'

// Section 2
section2[0] = 'cases/section2/2-1.html'
section2[1] = 'cases/section2/2-2.html'
section2[2] = 'cases/section2/2-3.html'
section2[3] = 'cases/section2/2-4.html'
section2[4] = 'cases/section2/2-5.html'
section2[5] = 'cases/section2/2-6.html'
section2[6] = 'cases/section2/2-7.html'
section2[7] = 'cases/section2/2-8.html'
section2[8] = 'cases/section2/2-9.html'
section2[9] = 'cases/section2/2-10.html'
section2[10] = 'cases/section2/2-11.html'
section2[11] = 'cases/section2/2-12.html'
section2[12] = 'cases/section2/2-13.html'
section2[13] = 'cases/section2/2-14.html'
section2[14] = 'cases/section2/2-15.html'
section2[15] = 'cases/section2/2-16.html'
section2[16] = 'cases/section2/2-17.html'
section2[17] = 'cases/section2/2-18.html'
section2[18] = 'cases/section2/2-19.html'
section2[19] = 'cases/section2/2-20.html'
section2[20] = 'cases/section2/2-21.html'

// Section 3
section3[0] = 'cases/section3/3-1.html'
section3[1] = 'cases/section3/3-2.html'
section3[2] = 'cases/section3/3-3.html'
section3[3] = 'cases/section3/3-4.html'
section3[4] = 'cases/section3/3-5.html'
section3[5] = 'cases/section3/3-6.html'
section3[6] = 'cases/section3/3-7.html'
section3[7] = 'cases/section3/3-8.html'
section3[8] = 'cases/section3/3-9.html'
section3[9] = 'cases/section3/3-10.html'
section3[10] = 'cases/section3/3-11.html'
section3[11] = 'cases/section3/3-12.html'
section3[12] = 'cases/section3/3-13.html'

// Section 4
section4[0] = 'cases/section4/4-1.html'
section4[1] = 'cases/section4/4-2.html'
section4[2] = 'cases/section4/4-3.html'
section4[3] = 'cases/section4/4-4.html'
section4[4] = 'cases/section4/4-5.html'
section4[5] = 'cases/section4/4-6.html'
section4[6] = 'cases/section4/4-7.html'
section4[7] = 'cases/section4/4-8.html'
section4[8] = 'cases/section4/4-9.html'
section4[9] = 'cases/section4/4-10.html'
section4[10] = 'cases/section4/4-11.html'
section4[11] = 'cases/section4/4-12.html'
section4[12] = 'cases/section4/4-13.html'
section4[13] = 'cases/section4/4-14.html'
section4[14] = 'cases/section4/4-15.html'

function loadCases (section) {
  switch(section) {
    case 1:
      for(var i = 0; i < section1.length; i++) {
        sendAJAX(section1[i]);
      }
      break;
    case 2:
      for(var i = 0; i < section2.length; i++) {
        sendAJAX(section2[i]);
      }
      break;
    case 3:
      for(var i = 0; i < section3.length; i++) {
        sendAJAX(section3[i]);
      }
      break;
    case 4:
      for(var i = 0; i < section4.length; i++) {
        sendAJAX(section4[i]);
      }
      break;
    default:
      console.log('Could not find section.');

  }
}

function sendAJAX(url) {
  if (url) {
    $.ajax({
      url: url,
      async: false,
      // data : data,
      contentType: "text/html",
      method: 'GET'
    }).done(function(returned_data) {
      $('.swiper-wrapper').append(returned_data);
      // swiper.init();
      if(url.substring(0, 14) == 'cases/section2') {
        $('.hidden-section').hide();
      }
    }).fail(function(data) {
      console.log("An error occurred during AJAX request.");
    });
  }
}
