$(document).ready(function() {

  var currentIndex = 0;
  var totalImages = $('.gallery img').length;

  //Show the first image

  function showImage(index) {

    $('.gallery img').hide();
    $('.gallery img').eq(index).show();
    $('#currentIndexTracker > span').text(index);

  }

  // Autoplay functionality
  var autoplayInterval = setInterval(function() {

    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);

  }, 3000); // Change image every 3 seconds (adjust as needed)

  // Function to handle next button click

  $('#nextBtn').on('click', function() {

      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);

  });

  // Function to handle prev button click

  $('#prevBtn').on('click', function() {

      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);

  });

  // Clear autoplay interval when hovering over gallery

  $('.gallery-container').hover(

      function() {

          clearInterval(autoplayInterval);
          
      },

      function() {

          // Resume autoplay when mouse leaves the gallery

          autoplayInterval = setInterval(function() {

              currentIndex = (currentIndex + 1) % totalImages;

              showImage(currentIndex);

          }, 3000);
      }
  );
    
  });