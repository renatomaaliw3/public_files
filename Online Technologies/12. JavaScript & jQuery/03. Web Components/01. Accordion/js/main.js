$(document).ready(function() {

  $('.accordion-title').on('click', function() {

    $(this).next('.accordion-content').slideToggle();

    $(this).find('.fa').toggleClass('fa-minus');

  });

});