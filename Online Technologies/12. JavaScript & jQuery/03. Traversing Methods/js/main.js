$(document).ready(function() {

  /* 01. PARENT - CHILD TRAVERSAL */

  /* .parent() - get the direct parent of each element in the set of matched elements */

  //$('.section-1').parent().css('background', 'red');
  //$('.section-2').parent().css('background', 'black');

  /* children() - get the immediate children of each element in the set of matched elements */

  //$('.inner-container').children().css('color', 'green');

  /* find() - get all descendant elements of each element in the set of matched elements, filtered by a selector */

  //$('body').find('p').css('background', 'red');
  //$('body').find('.span-1, .span-2').css('background', 'yellow');
  //$('body').find('p').find('.span-1, .span-2').css('background', 'green');

  /* SIBLING TRAVERSAL */

  /* siblings() - get the siblings of each element in the set of matched elements */

  //$('.section-1').siblings().css('background', 'red');
  //$('h1').siblings().css('font-weight','bold');
  //('.section-1-p').siblings('h2').css('background', 'orange');

  /* next() - get the immediately following sibling of each element in the set of matched elements */

  //$('.section-1-p').next().css('background', 'red');
  //$('h1').next().css('background', 'red');

  /* prev() - get the immediately preceding sibling of each element in the set of matched elements */

  //$('.section-1-p').previous().css('background', 'red');
  //$('.image-01').prev().css('background', 'yellow');

  /* ANCESTOR - DESCENDANT TRAVERSAL */

  /* parents() - get all ancestor elements of each element in the set of matched elements, optionally filtered by a selector */

  //$('.span-1').parents().css('background', 'yellow');
  //$('.span-1').parents('p').css('background', 'yellow');
  //$('.span-1').parents('.inner-container').css('background', 'yellow');

  /* closest() - get the first ancestor of each element in the set of matched elements that matches a specified selector */
  
  //$('.span-1').closest('p').css('background', 'orange');
  //$('.span-1').closest('.inner-container').css('background', 'orange');

  /* FILTERING TRAVERSAL */

  /* .first(), .last() - reduce the set of matched elements to the first/last one in the set */

  //$('#container-1').find('.inner-container').first().css('background', 'yellow');

  /* .eq() - reduce the set of matched elements to the one at the specified index */

  //$('#container-1 > .inner-container').find('p').eq(1).css('background', 'yellow');

  /* ITERATION */

  /* .each() function() */

  $('.inner-container').each(function() {

    //$(this).find('h2').css('background', 'yellow');
    //$(this).children('p').first().css('background', 'yellow');
    //$(this).children('p').find('span').css('background', 'orange');

  });

});