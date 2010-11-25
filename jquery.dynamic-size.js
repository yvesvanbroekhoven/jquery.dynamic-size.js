/*
 * Dynamic resize elements compared to the viewport width
 * Author: Yves Van Broekhoven
 * Date: 2010-11-25
 * Version: 1.0.0
 */
 
(function($){
      
  var _resize, options;
  
  $.fn.dynamicSize = function(opts){
    _this = this;
    options = opts ? $.extend($.fn.dynamicSize.options, opts) : $.fn.dynamicSize.options;
    
    this.each(function(){
      _this.hide();
      _resize(_this);
      
      $(window).resize(function(){
        _resize(_this);
      });
      
      
    });
  };
  
  
  /*
   * Options
   * @param ratio [Integer] Ratio between the window and the element
   * @param maxWidth [Integer] Maximum width of the element
   * @param minWidth [Integer] Minimum width of the element
   * @param fadeInSpeed [Integer] Speed of fade in animation in milliseconds
   */
  $.fn.dynamicSize.options = {
    ratio: 1/4,
    maxWidth: 2000,
    minWidth: 1,
    fadeInSpeed: 300
  };
  
  
  /*
   * Resize
   * @param _this [jQuery Array] element to be resized
   */
  _resize = function(_this){
    var width = $(window).width() * options.ratio;
    
    if (width > options.maxWidth) {
      width = options.maxWidth;
    } else if (width < options.minWidth) {
      width = options.minWidth;
    }
    console.log(width);
    _this.width(width);
    
    if (!_this.is(':visible')) {
      _this.fadeIn(300);
    }
  };
  
})(jQuery);