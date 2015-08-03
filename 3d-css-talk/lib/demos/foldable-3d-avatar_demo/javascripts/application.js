// JSLint options (see also config/jslint.yml):
/*global  window, alert, confirm, $, Traqball */
// (function() {
//   var $dude = $(".hipster"),
//       $hipsterPreview = $(".hipster-preview"),
//       offsetX = $hipsterPreview.offset().left,
//       offsetY = $hipsterPreview.offset().top,
//       newX = 0,
//       newY = 0;

//   $hipsterPreview.on("mousedown", function(e){
//     var clickX = (e.clientX-offsetX),
//         clickY = (e.clientY-offsetY);

//     $hipsterPreview.on("mousemove", function(e){
//       var evX = (e.clientX-offsetX),
//           evY = (e.clientY-offsetY),
//           xDiff = evX - clickX,
//           yDiff = evY - clickY;

//       yDiff = (yDiff < 0) ? (yDiff * yDiff) : (0 - yDiff);

//       newX = newX + xDiff;
//       newY = newY + yDiff;

//       newY = (newY >= 45) ? 45 : newY;
//       newY = (newY <= -45) ? -45 : newY;

//       clickX = evX;
//       clickY = evY;

//       $dude.css("transform", "rotateX("+newY+"deg) rotateY("+newX+"deg)");
//     });
//   });

//   $hipsterPreview.on("mouseup", function(e){
//     $hipsterPreview.off("mousemove");
//   });
//   $hipsterPreview.on("mouseleave", function(e){
//     $hipsterPreview.off("mousemove");
//   });

// }).call(this);
