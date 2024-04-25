$(document).ready(function() {

  $('.accordion-title').on('click', function() {

      var mode = 1;

      if (mode == 0) {

        /* ALL OPEN */

        $(this).next('.accordion-content').slideToggle();
        $(this).find('.fa').toggleClass('fa-minus');

      } else {

        /* SINGLE OPEN */

        // Assign the receiving .accordion-title
        var accordionContent = $(this).next('.accordion-content');

        // Closed other accordion content
        $('.accordion-content').not(accordionContent).slideUp();
      
        // Toggle only the clicked content
        accordionContent.slideToggle();

        // Toggle the accordion Icon

        var accordionIcon = $(this).find('.fa');

        $('.fa').not(accordionIcon).removeClass('fa-minus').addClass('fa-plus');
        accordionIcon.toggleClass('fa-plus fa-minus');

      }

  });

});