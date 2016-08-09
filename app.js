(function() {

  'use strict';
  var cards = $('.cards>.card');

  for (var i = 0; i <= 10; i++) {
    $('.cards').append('<div><span>' + i + '</span></div>');
  }

  $('.cards>div').click(function() {

    if ($(this).hasClass('zoom')) {
      $(this).removeClass('zoom');
    } else {
      $(this).addClass('zoom');
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function() {
        console.log('Service Worker Registered');
      });
  }
})();