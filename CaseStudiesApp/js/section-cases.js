var section1 = new Array();
var section2 = new Array();
var section3 = new Array();
var section4 = new Array();

section1[0] = 'cases/section1/1-1.html';
section1[1] = 'cases/section1/1-2.html';
section1[2] = 'cases/section1/1-3.html';
section1[3] = 'cases/section1/1-4.html';
section1[4] = 'cases/section1/1-5.html';
section1[5] = 'cases/section1/1-6.html';
section1[6] = 'cases/section1/1-7.html';
section1[7] = 'cases/section1/1-8.html';
section1[8] = 'cases/section1/1-9.html';
section1[9] = 'cases/section1/1-10.html';
section1[10] = 'cases/section1/1-11.html';
section1[11] = 'cases/section1/1-12.html';
  // section1[12]='cases/section1/1-13.html';  // Case 12 doesn't exist for some reason.
section1[13] = 'cases/section1/1-14.html';
section1[14] = 'cases/section1/1-15.html';
section1[15] = 'cases/section1/1-16.html';
section1[16] = 'cases/section1/1-17.html';

// Section 2
section2[17] = 'cases/section2/2-1.html';
section2[18] = 'cases/section2/2-2.html';
section2[19] = 'cases/section2/2-3.html';
section2[20] = 'cases/section2/2-4.html';
section2[21] = 'cases/section2/2-5.html';
section2[22] = 'cases/section2/2-6.html';
section2[23] = 'cases/section2/2-7.html';
section2[24] = 'cases/section2/2-8.html';
section2[25] = 'cases/section2/2-9.html';
section2[26] = 'cases/section2/2-10.html';
section2[27] = 'cases/section2/2-11.html';
section2[28] = 'cases/section2/2-12.html';
section2[29] = 'cases/section2/2-13.html';
section2[30] = 'cases/section2/2-14.html';
section2[31] = 'cases/section2/2-15.html';
section2[32] = 'cases/section2/2-16.html';
section2[33] = 'cases/section2/2-17.html';
section2[34] = 'cases/section2/2-18.html';
section2[35] = 'cases/section2/2-19.html';
section2[36] = 'cases/section2/2-20.html';
section2[37] = 'cases/section2/2-21.html';

// Section 3
section3[38] = 'cases/section3/3-1.html';
section3[39] = 'cases/section3/3-2.html';
section3[40] = 'cases/section3/3-3.html';
section3[41] = 'cases/section3/3-4.html';
section3[42] = 'cases/section3/3-5.html';
section3[43] = 'cases/section3/3-6.html';
section3[44] = 'cases/section3/3-7.html';
section3[45] = 'cases/section3/3-8.html';
section3[46] = 'cases/section3/3-9.html';
section3[47] = 'cases/section3/3-10.html';
section3[48] = 'cases/section3/3-11.html';
section3[49] = 'cases/section3/3-12.html';
section3[50] = 'cases/section3/3-13.html';

// Section 4
section4[51] = 'cases/section4/4-1.html';
section4[52] = 'cases/section4/4-2.html';
section4[53] = 'cases/section4/4-3.html';
section4[54] = 'cases/section4/4-4.html';
section4[55] = 'cases/section4/4-5.html';
section4[56] = 'cases/section4/4-6.html';
section4[57] = 'cases/section4/4-7.html';
section4[58] = 'cases/section4/4-8.html';
section4[59] = 'cases/section4/4-9.html';
section4[60] = 'cases/section4/4-10.html';
section4[61] = 'cases/section4/4-11.html';
section4[62] = 'cases/section4/4-12.html';
section4[63] = 'cases/section4/4-13.html';
section4[64] = 'cases/section4/4-14.html';
section4[65] = 'cases/section4/4-15.html';

function loadCases (section) {
  switch(section) {
    case 1:
      for(var i = 0; i < section1.length; i++) {
        sendAjax(section1[i]);
      }
      break;
    case 2:
      for(var i = 0; i < section2.length; i++) {
        sendAjax(section2[i]);
      }
      break;
    case 3:
      for(var i = 0; i < section3.length; i++) {
        sendAjax(section3[i]);
      }
      break;
    case 4:
      for(var i = 0; i < section4.length; i++) {
        sendAjax(section4[i]);
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
      // data : data,
      contentType: "text/html",
      method: 'GET'
    }).done(function(returned_data) {
      $('#append-to').append(returned_data);
      swiper.init();
      $('.hidden-section').hide();
    }).fail(function(data) {
      console.log("An error occurred during AJAX request.");
    });
  }
}
