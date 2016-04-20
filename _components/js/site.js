/*------------------------------------------------------------------------------------------------------
1. Modernizr
------------------------------------------------------------------------------------------------------*/
if (Modernizr.touch) {
	skrollr.init().destroy();
} else {   
	var s=skrollr.init(
		{
			forceHeight: false
		}
	);
}
/*------------------------------------------------------------------------------------------------------
2. Slick initialisation
------------------------------------------------------------------------------------------------------*/
$('.gallery').slick({
	prevArrow: '<span class="icon-arrow-left slick-prev"></span>',
	nextArrow: '<span class="icon-arrow-right slick-next"></span>'
});
$('.photography-gallery').slick({
	arrows: false
});

/*------------------------------------------------------------------------------------------------------
3. Waypoints
------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------
	3.1 Black to white transition
------------------------------------------------------------------------------------------------------*/
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
/*------------------------------------------------------------------------------------------------------
	3.2 Home page projects active transition
------------------------------------------------------------------------------------------------------*/
$('#top').waypoint(function() {
    $('#nav #uppernav li a#link-projects').removeClass('active');
}, {
    offset: '-90%'
});
$('#projects').waypoint(function() {
    $('#nav #uppernav li a#link-projects').addClass('active');
});

/*------------------------------------------------------------------------------------------------------
4. Mobile navigation
------------------------------------------------------------------------------------------------------*/
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
/*------------------------------------------------------------------------------------------------------
	4.1 Remove 'display: none' caused by fadeToggle class
------------------------------------------------------------------------------------------------------*/
$(window).resize(function(){
	if(window.outerWidth >= 768){
		$('#nav').css('display', '');
	} else {
	}
});

/*------------------------------------------------------------------------------------------------------
5. Smooth scroll anchors
------------------------------------------------------------------------------------------------------*/
$('.anchor').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});












