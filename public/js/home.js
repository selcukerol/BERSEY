
$(document).ready(function() {
	$('html,body').scrollTop(0);
	setTimeout(function(){
		$('.welcome-text').removeClass('hidden');
	},500);

	setTimeout(function(){
		$('.welcome-text-sub').removeClass('hidden');
	},3000);

	setTimeout(function(){
		$('.welcome-container').fadeOut(1000);
	},5000);
	setTimeout(function(){
		$('.welcome-container').addClass("hidden");
	},6500);
	setTimeout(function(){
		$('#logo').fadeIn(2000);
	},5000);

	(function($){
		$(function(){

			$('.button-collapse').sideNav({
				edge:'right'
			});
			$('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// init ScrollMagic

var controller = new ScrollMagic.Controller();

//////========SCENE1=====////////////



//build a scene 
var ourScene1 = new ScrollMagic.Scene({

	triggerElement: '#main',
	triggerHook: 0

})
.setPin('#main', {pushFollowers: false})
.addIndicators({
	name: 'overlap',
	colorTrigger: 'black',
	colorStart: 'red'
})
.addTo(controller);

//////========SCENE2=====////////////

var ourScene2 = new ScrollMagic.Scene({

	triggerElement: '#aboutus',
	triggerHook: 0

})
.setPin('#aboutus', {pushFollowers: false})
.setClassToggle("#aboutus", "active")
.addIndicators({
	name: 'overlap',
	colorTrigger: 'black',
	colorStart: 'red'
})
.addTo(controller);

////========SCENE3=====////////////

var ourScene3 = new ScrollMagic.Scene({

	triggerElement: '#services',
	triggerHook: 0

})
.setPin('#services', {pushFollowers: false})
.setClassToggle("#services", "active")
.addIndicators({
	name: 'overlap',
	colorTrigger: 'black',
	colorStart: 'red'
})
.addTo(controller);

////========SCENE4=====////////////

var ourScene4 = new ScrollMagic.Scene({

	triggerElement: '#projects',
	triggerHook: 0

})
.setPin('#projects', {pushFollowers: false})
.setClassToggle("#projects", "active")
.addIndicators({
	name: 'overlap',
	colorTrigger: 'black',
	colorStart: 'red'
})
.addTo(controller);

//========SCENE5=====////////////

var ourScene5 = new ScrollMagic.Scene({

	triggerElement: '#contactus',
	triggerHook: 0

})
.setPin('#contactus', {pushFollowers: false})
.setClassToggle("#contactus", "active")
.addIndicators({
	name: 'overlap',
	colorTrigger: 'black',
	colorStart: 'red'
})
.addTo(controller);

////////////////========TEXT ANIMATIONS=====/////////////////
$('.text').each(function(){

	var tween = TweenMax.from($(this), 1, {autoAlpha:0, scale:0.5, y: -318, ease:Power0.easeNone});

	console.log(this);

	var ourScene6 = new ScrollMagic.Scene({

		triggerElement: this,
		triggerHook: 0,
		reverse: false
	})
	.addIndicators({
	name: 'text',
	colorTrigger: 'green',
	colorStart: 'blue'
})
	.setTween(tween)
	.addTo(controller);
});


});



















