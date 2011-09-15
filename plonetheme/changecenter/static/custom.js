(function() {
  var $;
  $ = jQuery;
  $(function() {
     $('.newsImageContainer a')
        .prepOverlay({
            subtype: 'image',
            urlmatch: '/image_view_fullscreen$',
            urlreplace: '_preview'
        });
  });
}).call(this);

