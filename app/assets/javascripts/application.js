// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.ui.all
//= require bxslider
//= require jquery_ujs
//= require h5bp
//= require turbolinks

$(document).ready(function() {
  $(".bxslider").bxSlider();

  $(".gnb ul li").on('mouseenter', function(){
      $("#header").stop().animate({'height': '125px'}, 900, 'easeOutExpo');
  });
  $("#header").on('mouseleave', function(){
    if($("#header").height() >= 125)
      $("#header").stop().animate({'height': '75px'}, 900, 'easeOutExpo');
  });

});
