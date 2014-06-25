

/***************************************************
prettyPhoto
***************************************************/

jQuery(document).ready(function () {
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({ 
	animation_speed: 'normal', 
	theme: 'light_square', 
	slideshow: 3000, 
	autoplay_slideshow: false, 
	social_tools: false 
	});

});

/***************************************************
responsive menu
***************************************************/

jQuery(function (jQuery) {
    jQuery("#main-nav").append("<select/>");
    jQuery("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Choose section"
    }).appendTo("#main-nav select");
    //new dropdown menu
    jQuery("#main-nav a").each(function () {
        var el = jQuery(this);
        var perfix = '';
        switch (el.parents().length) {
            case (11):
                perfix = '-';
                break;
            case (13):
                perfix = '--';
                break;
            default:
                perfix = '';
                break;

        }
        jQuery("<option />", {
            "value": el.attr("href"),
            "text": perfix + el.text()
        }).appendTo("#main-nav select");
    });

    jQuery('#main-nav select').change(function () {

        window.location.href = this.value;

    });
});



jQuery(document).ready(function(){
	jQuery('#nav').localScroll(1000);
	jQuery('#nav2').localScroll(1000);
	jQuery('#nav3').localScroll(1000);
	jQuery('#nav4').localScroll(1000);
	jQuery('#nav5').localScroll(1000);
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	jQuery('#header-section').parallax("50%", 0.1);
	jQuery('#features-section').parallax("50%", 0.1);
	jQuery('#team-section').parallax("50%", 0.1);
	jQuery('.bg').parallax("50%", 0.3);
	jQuery('#portfolio-section').parallax("50%", 0.3);
	jQuery('#price-section').parallax("50%", 0.3);
	jQuery('#contact-section').parallax("50%", 0.1);
	jQuery('#slogan-section-1').parallax("50%", 0.3);
	
})
jQuery('#features-section .parallax-point-event').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.effect-box-1').addClass("active");
			jQuery('.effect-box-2').addClass("active");
			jQuery('.effect-box-3').addClass("active");
			jQuery('.effect-box-4').addClass("active");
			
        }else{
            jQuery('.effect-box-1').removeClass("active");
			jQuery('.effect-box-2').removeClass("active");
			jQuery('.effect-box-3').removeClass("active");
			jQuery('.effect-box-4').removeClass("active");
		
			//jQuery('.effect-box').unbind('inview');
        }
    });


jQuery('#slogan-section-1').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.large-slogan').addClass("active");
		 }else{
            jQuery('.large-slogan').removeClass("active"); 	
        }
    });

jQuery('#slogan-section-2 .parallax-point-event').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.browser-shot-1').addClass("active");
			jQuery('.browser-shot-2').addClass("active");
			jQuery('.browser-shot-3').addClass("active");
			
        }else{
            jQuery('.browser-shot-1').removeClass("active"); 
			jQuery('.browser-shot-2').removeClass("active");
			jQuery('.browser-shot-3').removeClass("active");
			
        }
    });

jQuery('#slogan-section-3').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.goprice').addClass("active");
		}else{
            jQuery('.goprice').removeClass("active"); 	
        }
    });


jQuery('#header-section').bind('inview', function (event, visible) {
        if (visible == true) {
            jQuery('.gobottom').addClass("active"); 
			jQuery('.hero-unit h1 span').addClass("active");
			
        }else{
            jQuery('.gobottom').removeClass("active");  
			jQuery('.hero-unit h1 span').removeClass("active"); 
			
			
        }
    });



		var hero = jQuery('#header-section .hero-unit');
		jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 550) {
					hero.addClass("hide");	
				} else {
					hero.removeClass("hide");	
				}
			});
		
		var navbar = jQuery('#navbartop');
		var navbartop = jQuery('#topnavbar');
			jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 640) {
				
					navbar.addClass("navbar-scroll");
					navbartop.removeClass("navbar-static-top");
					navbartop.addClass("navbar-fixed-top");
					
				} else {
					navbar.removeClass("navbar-scroll");
					navbartop.removeClass("navbar-fixed-top");
					navbartop.addClass("navbar-static-top");
				}
			});
		
        // Basic FitVids Test
			$(".container").fitVids();  
		
		
				jQuery(document).ready(function(){

				jQuery('#map').gMap({
					latitude: -23.567504,
					longitude: -46.054909,
							   panControl: true,
						   zoomControl: true,
							   zoomControlOptions: {
					style: google.maps.ZoomControlStyle.SMALL
							   },
						   mapTypeControl: true,
						   scaleControl: true,
						   streetViewControl: false,
						   overviewMapControl: true,
							   scrollwheel: true,
							   icon: {
						image: "http://www.google.com/mapfiles/marker.png",
						shadow: "http://www.google.com/mapfiles/shadow50.png",
						iconsize: [20, 34],
						shadowsize: [37, 34],
						iconanchor: [9, 34],
						shadowanchor: [19, 34]
					},
						zoom:9,
							   markers: [
							{ 'latitude':-23.567504,'longitude':-46.054909,}
						]
							   
							   
							   }); 
				});

	var $container = $('#members'),
	$filters = $("#filters a");
	$sort = $('#order a');
	$container.isotope({
		itemSelector: '.member',
		masonry: {
			columnWidth: 0
		},
		getSortData: {
			name: '.name',
			job: '.job',
		},
		sortBy: 'name',
	});

	// filter items when filter link is clicked
	$filters.click(function() {
		$filters.removeClass("active");
		$(this).addClass("active");
		var selector = $(this).data('filter');
		$container.isotope({filter: selector});
		return false;
	});

	// sort items when filter link is clicked
	$sort.click(function() {
		$sort.removeClass("active");
		$(this).addClass("active");
		var selector = $(this).data('sort-by');
		$container.isotope({sortBy: selector});
		return false;
	});

	var clock;

	// Grab the current date
	var currentDate = new Date();

	// Set some date in the future. In this case, it's always Jan 1
	var futureDate  = new Date(2014, 06, 28, 09);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Instantiate a coutdown FlipClock
	clock = $('#clock').FlipClock(diff, {
		countdown: true,
		clockFace: 'DailyCounter',
		defaultLanguage: 'pt-br',
	});

		jQuery(function(){
			jQuery('#tweets').tweetable({
				username: 'wrapbootstrap', 
				time: true,
				rotate: false,
				speed: 4000, 
				limit: 1,
				replies: false,
				position: 'append',
				failed: "Sorry, twitter is currently unavailable for this user.",
				html5: true,
				onComplete:function(jQueryul){
					jQuery('time').timeago();
				}
			});
		});
			jQuery('.carousel').carousel()
