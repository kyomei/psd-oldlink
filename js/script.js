$(document).ready(function () {

   // Exibi o primeiro item do carousel
   $("#carousel .item-group").first().show();
   

   // ao clicar no indicador do carousel
   $(document).on('click', '.carousel-controls li', function () {
      // Remove a classe de todos li controls
      $('.carousel-controls li').removeClass('active');
      // Adiciona a classe apenas no li control clicado
      $(this).addClass('active');
      // Pega o valor guardado na data-slide-to do item clicado
      let slide_to = $(this).attr('data-slide-to');
      // Oculta todos os sliders do carousel
      $("#carousel .item-group").hide('fast');
      // Mostra apenas o carousel que tiver com o indice igual o do data-slide-to clicado
      $("#carousel .item-group:eq(" + slide_to + ")").show('slow');
   });

   
   nextSlider();
   function nextSlider() {
      setInterval(function () {
         let element = $('.carousel-controls li[class="active"]');
         let next = parseInt(element.attr('data-slide-to')) + 1;
         element.removeClass('active');
         $(".carousel-controls li[data-slide-to= " + next + "]").addClass('active');
         // Oculta todos os sliders do carousel
         $("#carousel .item-group").hide('fast');
         // Mostra apenas o carousel que tiver com o indice igual o do data-slide-to clicado
         $("#carousel .item-group:eq(" + next + ")").show('slow');
        
      }, 3000);

   }
});