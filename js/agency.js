/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

var jump=function(e){

  var target;


   if (e){
     // user did this
     var clicked = $(this);

     // Track button clicks that don't go to actual pages
     if(clicked.data().go){
       // link to section on home page
       ga('send', 'event', 'HomePage', 'Clicked', clicked.text());
     }else{
       // probably a modal
       ga('send', 'event', 'Modal', 'Clicked', clicked.attr('href'));
     }
    e.preventDefault();
    target = clicked.attr("href");
    if(clicked.data('go') === 'home' && location.pathname !== '/'){
      e.stopPropagation();
      window.location = '/' + target;
    }
   }else{
    target = location.hash;
   }
   $('html, body').stop().animate({
       scrollTop: $(target).offset().top
   },1500,function(){
       location.hash = target;
   });

};

$(function() {

  // track submit button click
  $('button[type=submit]').click(function(){
    ga('send', 'event', 'Submit', 'Clicked', $(this).text());
  });

  // track social clicks
  $('.social-buttons a').click(function(){
    ga('send', 'event', 'Social', 'Clicked', $(this).attr('href'));
  });


  // animate scrolling

  $('a[href^=#]').bind("click", jump);
  if (location.hash){
    setTimeout(function(){
      $('html, body').scrollTop(0).show();
      jump();
    }, 0);
  }else{
    $('html, body').show();
  }

  $("#typed").typed({
    stringsElement: $('#typed-strings'),
    typeSpeed: 70,
    backDelay: 700,
    startDelay: 2000,
    loop: false,
    contentType: 'html',
    // loopCount: 2,
    callback: function () {
      setTimeout(function(){
        $('.typed-cursor').fadeOut('slow');
      }, 500);
    }
  });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	};
});
