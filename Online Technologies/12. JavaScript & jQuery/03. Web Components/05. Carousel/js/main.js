$(document).ready(function() {

  var angle = 0;
  var n = $('.carousel-item').length;
  var itemDegree = 360 / n;
  var interval;
  var autoplay = false;

  $('.carousel-item').each(function(index) {

    $(this).css({

      /* 
       Iterate each .carousel item with a css property of:
       transform: rotateY(itemDegree * index) translateZ(275px);
     */   

      //Place your code below:
      'transform': 'rotateY(' + itemDegree * index + 'deg) translateZ(275px)' // Adjust translateZ as needed based on image sizes
    
    });
  
  });

  function rotateCarousel() {

    $('.carousel').css({
        
        /* 
        In order to rotate the $('.carousel') place a css property of
        transform: rotateY(angle)
        */

        //Place your code below:
        'transform': 'rotateY(' + angle + 'deg)'

    });

  }

  $('#next').click(function() {

    /* in order for the previous image to show, you need to decrement the angle by the itemDegree */
    //Place your code below
    angle = angle - itemDegree;
    
    /* Call the rotateCarousel function */
    //Place your code below
    rotateCarousel();

  });

  $('#prev').click(function() {

    /* in order for the previous image to show, you need to increment the angle by the itemDegree */
    //Place your code below
    angle += itemDegree;
    
    /* Call the rotateCarousel function */
    //Place your code below
    rotateCarousel();

  });

  $('#autoplay').on('click', function() {

    if (!autoplay) {

      interval = setInterval(function(){

        angle -= itemDegree;
        rotateCarousel();

      }, 2000); // Change interval time to control rotation speed
      
      autoplay = true;

      $(this).text('Stop Autoplay');

    } else {

      clearInterval(interval);
      autoplay = false;
      $(this).text('Autoplay');

    }

  });

});