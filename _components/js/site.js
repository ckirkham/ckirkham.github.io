// Modernizr
if (Modernizr.touch) {
	skrollr.init().destroy();
} else {   
	var s=skrollr.init(
		{
			forceHeight: false
		}
	);
}
			
// Slick initialisation

$('.gallery').slick({
	prevArrow: '<span class="icon-arrow-left slick-prev"></span>',
	nextArrow: '<span class="icon-arrow-right slick-next"></span>'
});

// Waypoints
$('#project-page').waypoint(function() {
    $('#uppernav').removeClass('scrolling');
    $('#mobile-nav').removeClass('scrolling');
}, {
    offset: '-70%'
});
$('#project-content').waypoint(function() {
    $('#uppernav').addClass('scrolling');
    $('#mobile-nav').addClass('scrolling');
}, {
    offset: '5%'
});

// Mobile navigation
$('.toggle-nav').click(function(e) {
	var $this = $(this);
	$(this).toggleClass('active');
	if($this.hasClass('active')) {
		$this.text('Close');
		$('body').addClass('noscroll');
	} else {
		$this.text('Menu');
		$('body').removeClass('noscroll');
	}
	$('#nav').fadeToggle('active');
	e.preventDefault();
});
// Remove 'display: none' caused by fadeToggle class
$(window).resize(function(){
	if(window.outerWidth >= 768){
		$('#nav').css('display', '');
	} else {
	}
});
	












