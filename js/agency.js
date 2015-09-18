/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

var jump=function(e){
   if (e){
    e.preventDefault();
    var clicked = $(this);
    var target = clicked.attr("href");
    if(clicked.data('go') === 'home' && location.pathname !== '/'){
      e.stopPropagation();
      window.location = '/' + target;
    }
   }else{
    var target = location.hash;
   }
   $('html, body').stop().animate({
       scrollTop: $(target).offset().top
   },1500,function(){
       location.hash = target;
   });

};

$(function() {
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
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],

            typeSpeed: 70,
            backDelay: 500,
            startDelay: 1000,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
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
	}
});
