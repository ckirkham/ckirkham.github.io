/*------------------------------------------------------------------------------------------------------
	Modernizr
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
	Home page projects active transition
------------------------------------------------------------------------------------------------------*/
$('#top').waypoint(function() {
    $('#nav .outer-container #uppernav li a#link-projects').removeClass('active');
}, {
    offset: '-80%'
});
$('#projects').waypoint(function() {
    $('#nav .outer-container #uppernav li a#link-projects').addClass('active');
});
$('footer').waypoint(function() {
    $('#nav .outer-container #uppernav li a#link-projects').removeClass('active');
});
/*------------------------------------------------------------------------------------------------------
	Smooth scroll anchors
------------------------------------------------------------------------------------------------------*/
$(".anchor").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});
/*------------------------------------------------------------------------------------------------------
	Show / hide grid
------------------------------------------------------------------------------------------------------*/
$('#show-grid').on('click', function() {
    $('.overlay-grid').toggleClass('show-hide-grid');
});
/*------------------------------------------------------------------------------------------------------
	Show projects on scroll
------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - $(window).height()/1.3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
});
/*------------------------------------------------------------------------------------------------------
	Mobile navigation
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
	$('#uppernav').fadeToggle('active');
	e.preventDefault();
});
/*------------------------------------------------------------------------------------------------------
	Remove 'display: none' caused by fadeToggle class
------------------------------------------------------------------------------------------------------*/
// $(window).resize(function(){
// 	if(window.outerWidth >= 768){
// 		$('#nav').css('display', '');
// 	} else {
// 	}
// });