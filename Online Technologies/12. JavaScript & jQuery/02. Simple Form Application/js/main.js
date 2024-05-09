$(document).ready(function() {

  var result;
  var mode_;

  $('#compute').on('click', function() {

    var length_ = $('#length').val();
    var width_ = $('#width').val();
    mode_ = $('#mode').val();

    if (mode_ == 'Area') {

      result = length_ * width_;


    } else {

      result = (2 * length_) + (2 * width_);

    }

    $('#result').val(result.toFixed(2));

  });

  $('#mode').on('change', function() {

    mode_ = $('#mode').val();

      if (mode_ == 'Area') {

        mode_ = 'Rectangle - Area';

      } else {

        mode_ = 'Rectangle - Perimeter';

      }
    
    $('legend').text(mode_);

  });
  
});