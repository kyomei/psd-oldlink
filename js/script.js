
var slideIndex = 0;
showSlides();

$(document).on('click', '.dot', function(){
   slideIndex = ($(this).attr('data-slide-to'));
});


function showSlides() {
   var slides = $(".item-group");
   var dots = $(".dot");
   
   $.each(slides, function(){
      slides.css('display', 'none');
   });
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1; }
   $.each(dots, function() {
      dots.removeClass("active");
   });
   slides.eq(slideIndex-1).css('display', 'block');
   dots.eq(slideIndex-1).addClass('active');
   setTimeout(showSlides, 2000);
}