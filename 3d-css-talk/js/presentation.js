window.addEventListener("load", function(){
  var traqBall,
      light,
      faceGroup,
      firstTimeFoldable = true;

  Reveal.addEventListener('slidechanged', function(ev){
    if(ev.currentSlide.id === "foldable"){
      // Photon
      if(firstTimeFoldable){
        light = new Photon.Light();
        faceGroup = new Photon.FaceGroup($(".hipster-preview")[0], $('.hipster-preview .surface'), 0.75, 0.15, true);
        faceGroup.render(light, true);

        $(window).on('traqBallRotate', function(){
          faceGroup.render(light, true);
        });

        traqBall = new Traqball({stage: "foldable-traqball", perspective: 1500});
        firstTimeFoldable = false;
      }
    }
    else if(ev.currentSlide.id === "traqball"){
      var traqBall = new Traqball({stage: "traqball-holder", perspective: 1500});
    }

    else if(ev.currentSlide.id === "bad-website"){
      $("#bad-iframe")[0].src = $("#bad-iframe").attr("src");
    }
  });

  Reveal.addEventListener('fragmentshown', function(e){
    var $elm = $('#'+(e.fragment.id.replace('-face', '')), '.step-cube');
    $elm.css('opacity', 0.75);
    if(e.fragment.id === "front-face"){
      $elm.css('transform', 'translateZ(50px)');
    }
    else if(e.fragment.id === "right-face"){
      $elm.css('transform', 'rotateY(90deg) translateZ(50px)');
    }
    else if(e.fragment.id === "back-face"){
      $elm.css('transform', 'translateZ(-50px)');
    }
    else if(e.fragment.id === "left-face"){
      $elm.css('transform', 'rotateY(-90deg) translateZ(50px)');
    }
    else if(e.fragment.id === "top-face"){
      $elm.css('transform', 'rotateX(90deg) translateZ(50px)');
    }
    else if(e.fragment.id === "bottom-face"){
      $elm.css('transform', 'rotateX(-90deg) translateZ(50px)');
    }
  });
});
