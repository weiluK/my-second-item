(function ($) {

  $.extend({
    getRandomColor(){
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let a = Math.random().toFixed(1);
      return `rgba(${r},${g},${b},${a})`;
    }
  })

})(jQuery)