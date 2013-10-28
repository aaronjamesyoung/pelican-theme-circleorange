$(document).ready(function(){

//Responsive nav - on small screens we change stuff.
//check this media query against any needed in scss/layouts/_navigation.scss
//if(Modernizr.mq('only all and (max-width: 600px)')) {
  $('body').addClass('body-push');
  $('.menu-toggle').click(function() {
    $('body').toggleClass('body-push-right');
    $('.navigation-main ul').toggleClass('menu-open');
  });
//}

//** FOUNDATION COMPONENTS **//
//for foundation stuff, see: http://foundation.zurb.com/docs/javascript.html
$(document).foundation('clearing');

$(document).foundation('orbit', {
  animation: 'fade',
  timer_speed: 10000,
  pause_on_hover: false,
  resume_on_mouseout: false,
  animation_speed: 500,
  stack_on_small: false,
  navigation_arrows: false,
  slide_number: false,
  container_class: 'orbit-container',
  stack_on_small_class: 'orbit-stack-on-small',
  next_class: 'orbit-next',
  prev_class: 'orbit-prev',
  timer_container_class: 'orbit-timer',
  timer_paused_class: 'paused',
  timer_progress_class: 'orbit-progress',
  slides_container_class: 'orbit-slides-container',
  bullets_container_class: 'orbit-bullets',
  bullets_active_class: 'active',
  slide_number_class: 'orbit-slide-number',
  caption_class: 'orbit-caption',
  active_slide_class: 'active',
  orbit_transition_class: 'orbit-transitioning',
  bullets: false,
  timer: false,
  variable_height: false,
  before_slide_change: function(){},
  after_slide_change: function(){}
});

//** CONTACT PAGE **//
$(function() {
  $("#submit-form").click(function() {
    var thename = $("input#thename").val();
    var theemail = $("input#theemail").val();
    var thephone = $("input#thephone").val();
    var thewebsite = $("input#thewebsite").val();
    var themessage = $("#themessage").val();
    var fromform = $("input#fromform").val();
    var theurl = $("input#url").val();
    // validate client-side?

    //process form here
    var dataString = 'thename='+ thename + '&theemail=' + theemail + '&thephone=' + thephone + '&thewebsite=' + thewebsite + '&themessage=' + themessage + '&fromform=' + fromform + '&url=' + theurl;
    //alert (dataString);return false;
    $.ajax({
      type: "POST",
      url: "http://ajy.co/theme/js/contactform.php",
      data: dataString,
      success: function(data) {
        $('#contactform').html("<h2>Contact Form Submitted!</h2>")
        .append("<p>I will be in touch soon.</p>" + data)
        .hide()
        .fadeIn(1000);
      }
    });
    return false;
  });
});

}); //end document ready
