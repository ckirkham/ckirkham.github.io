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
$('.photography-gallery').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
	{
		breakpoint: 768,
		settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 3
	}
},
{
	breakpoint: 480,
	settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1
	}
}
]
});
$('.product-gallery').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
	{
		breakpoint: 768,
		settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 3
	}
},
{
	breakpoint: 480,
	settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1
	}
}
]
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
	} else {
		$this.text('Menu');
	}
	$('#nav').toggleClass('active');
	e.preventDefault();
});
























