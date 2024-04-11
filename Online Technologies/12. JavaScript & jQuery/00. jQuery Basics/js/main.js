$(document).ready(function() {

  //console.log('Hello')

  /* hide and show */

  $('#container > p').show();

  /* HTML and Text Manipulation (html & text), indexing eq, first, last */

  $('#container > p:eq(1)').html('Replaced')

  /* You can add CSS properties */

  $('#container > p').css({'font-size': '18px', 'font-weight': 'bold'});
  $('#container > p:eq(1)').addClass('red');

  /* Attribute Extraction */

  console.log($('#container img').attr('class'));
  $('#container img').attr('alt', 'Man and Woman');
  $('#container img').attr('src', 'img/portfolio-02.jpg')


});