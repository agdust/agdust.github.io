$(".nav-link").on('click', function(e) {
   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, 'easeInOutCubic', function(){
       window.location.hash = hash;
     });

});
