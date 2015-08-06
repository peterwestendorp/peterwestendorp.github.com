window.PW = window.PW || {};

PW.Modal = function(){
  // Usage:
  //
  // * Links that should be opened with the modal should have the
  //   following attributes:
  //
  //   - href
  //   - data-modal
  //
  // * the minimum CSS needed for the modals to work properly is the following:
  //   .modal-window {
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     width: 80%;
  //     background-color: #FFF;
  //     opacity: 0;
  //     visibility: hidden;
  //     z-index: 999;
  //       -webkit-transition: opacity 0.5s;
  //       -moz-transition:    opacity 0.5s;
  //     transition:           opacity 0.5s;
  //   }
  //
  //   .modal-window a.close {
  //     position: absolute;
  //     top: 12px;
  //     right: 12px;
  //     font-size: 25px;
  //     text-decoration: none;
  //     color:#999;
  //     opacity: 0;
  //     visibility:hidden;
  //   }
  //
  //   .modal-window .page {
  //     overflow: auto;
  //     display:block;
  //     height: 100%;
  //     padding: 0 2%;
  //     background-color: #FFF;
  //     border-top: 1px solid #DDD;
  //     border-bottom: 1px solid #DDD;
  //     opacity: 0;
  //     visibility:hidden;
  //   }
  //
  //   body.modal .modal-window,
  //   body.modal .modal-window a.close,
  //   body.modal .modal-window .page {
  //     opacity: 1;
  //     visibility:visible;
  //   }

  var $body = $('body'),
      $modalWindow = $('<div class="modal-window"><a href="#" class="close">&#x2715;</a><div class="page"></div></div>').appendTo($body),
      $page = $('div.page', $modalWindow),
      $closeBtn = $('a.close', $modalWindow);

  return {
    init: function(){
      this.bindEvents();
      this.setPosition();
    },
    bindEvents: function(){
      var _this = this;
      $(window).on('resize', this.setPosition);
      $body.on('click', 'a[data-modal][href]', function(ev){
        ev.preventDefault();
        _this.loadContent(ev.currentTarget.href);
        _this.show();
      });
      $closeBtn.on('click', function(ev){
        ev.preventDefault();
        _this.hide();
      });
    },
    setPosition: function(){
      var height = $body.height()-175;
      $modalWindow.css('height', height);
      $modalWindow.css('marginLeft', 0 - ($modalWindow.outerWidth() / 2));
      $modalWindow.css('marginTop', 0 - ($modalWindow.outerHeight() / 2));
    },
    loadContent: function(contentUrl){
      $.ajax({
        url: contentUrl,
        success: function(data){
          $page.html("");
          $page.append(data);
          sh_highlightDocument();
        }
      });
    },
    show: function(){
      $body.addClass('modal');
    },
    hide: function(){
      $body.removeClass('modal');
    }
  }
};
