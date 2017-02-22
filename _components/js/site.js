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






