$(document).ready(function() {

  $('.tab-item').on('click', function() {

    // Remove 'active' class from all tab items

    $('.tab-item').removeClass('active');

    // Add 'active' class to the clicked tab item
    $(this).addClass('active');

    // Hide all tab contents
    $('.tab-content').hide();

    // Target corresponding tab content based on data-tab attribute

    var tabId = $(this).attr('data-tab');
    $('#' + tabId).fadeIn();
    
  });

});