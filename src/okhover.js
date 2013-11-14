/*
 * OKHover by OKFocus v1.2.1
 * http://okfoc.us
 *
 * Copyright 2012, OKFocus
 * Licensed under the MIT license.
 *
 */

(function($){
  
  $.okhover = function(el, options){
    var base = this;
    base.$el = $(el);
    base.el = el;
    base.$el.data("okhover", base);
    
    base.init = function(){
      base.options = $.extend({}, $.okhover.options, options);
      
      if (!base.options.el) $('body').append('<div id="ok-bg" style="width:100%;height:100%;background:scroll 150% 150% repeat;z-index:-1;position:fixed;top:0;left:0;"></div>');

      base.build();
    };
    
    base.build = function(){
      if (!base.options.el && $('#ok-bg').length == 0) {
        throw new Error('Failed to attach the ok-bg div to the DOM');
      } else {
        base.start();
      }
    };
    
    base.start = function () {

      var background = base.options.el ? $(base.options.el) : $("#ok-bg");
        
      if (base.options.fadeIn && !base.options.el) background.hide();
      if (base.options.zIndex) background.css('zIndex', base.options.zIndex);
      
      base.preload(base.$el);
      
      base.$el.bind({
        mouseover: function(){
          $(this).mousemove(function(e){
            background.css('backgroundPosition', e.pageX + 'px ' + e.pageY + 'px');
          });

          background.css('backgroundImage', 'url(' + $(this).attr('data-okimage') + ')');

          if (base.options.fadeIn && !base.options.el) background.css('opacity', 0).stop().fadeTo(base.options.fadeInDuration, 1);
          else background.show();
        },
        mouseout: function(){
          if (base.options.fadeOut && !base.options.el) {
            background.stop().fadeTo(base.options.fadeOutDuration, 0, function() { $(this).css('backgroundImage', '').hide() });
          } else if (base.options.el) {
            background.css('backgroundImage', '');
          } else {
            background.css('backgroundImage', '').hide();
          }
        }
      });
    };
    
    base.preload = function(elements) {
      elements.each(function(){
        if ($(this).attr('data-okimage')) {
          (new Image()).src = $(this).attr('data-okimage');
        }
      });
    };
    
    base.init();
  };
  
  $.okhover.options = { 
    fadeIn: false,
    fadeOut: false,
    fadeInDuration: 400,
    fadeOutDuration: 400,
    zIndex: null,
    el: null
  };
  
  $.fn.okhover = function(options){
    return this.each(function(){
      (new $.okhover(this, options));
    });
  };
  
})(jQuery);
