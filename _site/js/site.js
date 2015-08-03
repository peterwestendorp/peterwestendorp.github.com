window.PW = window.PW || {};

// check for -webkit-overflow-scrolling support
Modernizr.addTest('overflowscrolling', function() {
  return Modernizr.testAllProps("overflowScrolling");
});

$(function(){
  var $body = $('body'),
      has3DSupport = $("html.csstransforms3d body").length > 0,
      $navLinks = $('.nav a');

  // 3D context feature detection
  if($(".shelf").css('transform-style') != 'preserve-3d'){
    has3DSupport = false
    $('html').removeClass('csstransforms3d')
  }

  PW.modalInstance = new PW.Modal();
  PW.modalInstance.init();

  setTimeout(function(){
    $body.attr('data-view-shelf', 'bottom');
  }, 250);

  // bind events
  $navLinks.on('click', function(ev){
    var $currentLink = $(ev.target);

    $navLinks.removeClass('active');
    $currentLink.addClass('active');

    if($currentLink.hasClass('shelf-nav')){
      // move camera to shelf by clicking on nav links from shelves page
      ev.preventDefault();
      PW.modalInstance.hide();
      $body.attr('data-view-shelf', $(ev.target).attr('data-view-shelf'));
    }
  });

});
