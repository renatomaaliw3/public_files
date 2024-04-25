$(document).ready(function() {

  $('.thumbnails > img').on('click', function() {

    // Get img's data-img attribute
    var imageURL = $(this).attr('data-img');

    $('.overlay img').attr('src', 'img/' + imageURL);

    // Display the Overlay
    $('.overlay').fadeIn();

    // Hide overlay when clicked outside the image
    $('.overlay').on('click', function() {

      $(this).fadeOut();

    })

  });
  
});