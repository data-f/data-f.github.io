// external js: packery.pkgd.js, imagesloaded.pkgd.js

// init Packery
var $grid = $('.grid-image').packery({
  itemSelector: '.grid-image-item',
  percentPosition: true,
  gutter:20
});
// layout Packery after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.packery();
});
