jQuery(document).ready(function($){ 

  var location = false;

  function checkURI() {
    var currloc = window.location.href
    if ( !location || currloc !== location) {
      hideStuff();
      location = currloc;
    }
  }

  function hideStuff() {
    var search = $('#sky-banner, #sky-right, iframe, [id^=zzSdexitdivzedoslidernew]');

    if ( search.length ) {
      search.hide();
    } else if (typeof t != 'undefined') {
      //clearInterval(t);
    }
  };
    
  hideStuff();
  t = setInterval(hideStuff, 100);
});
