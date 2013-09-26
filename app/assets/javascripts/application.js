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

  $(".gnb.white ul li").on('mouseenter', function(){
    $("#header").stop().animate({'height': '130px'}, 900, 'easeOutExpo');
    var dwidth = $(this).children('a').width();
    var dleft = $(this).children('a').position().left;
    $(".menu-bar").stop().animate({'left': dleft, 'width': dwidth}, 900, 'easeOutExpo');
  });

  $(".gnb.blue ul li").on('mouseenter', function(){
    $("#header").stop().animate({'height': '130px'}, 900, 'easeOutExpo');
    var dwidth = $(this).children('a').width();
    var dleft = $(this).children('a').position().left + (dwidth / 2);
    $(".menu-bar").stop().animate({'left': dleft}, 900, 'easeOutExpo');
  });

  $("#header").on('mouseleave', function(){
    if($("#header").height() >= 130)
      $("#header").stop().animate({'height': '75px'}, 900, 'easeOutExpo');
      $(".menu-bar").stop().animate({'width': 0}, 900, 'easeOutExpo');
  });
});
