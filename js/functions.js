jQuery(function ($) {
  "use strict";
  var $window = $(window);
  var $root = $("html, body");

  /* ----- Back to Top ----- */
  $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
  var amountScrolled = 700;
  var backBtn = $("a.back-top");
  $window.on("scroll", function () {
    if ($window.scrollTop() > amountScrolled) {
      backBtn.addClass("back-top-visible");
    } else {
      backBtn.removeClass("back-top-visible");
    }
  });
  backBtn.on("click", function () {
    $root.animate({
      scrollTop: 0
    }, 700);
    return false;
  });

	$(".jgbs-advantage-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//		centerMode: true,
//  centerPadding: '60px',
		
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

    ]
  });
	
	
	$(".rank-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    speed: 500,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },

    ]
  });
	
	$(".professor-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
    swipeToSlide: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },

    ]
  });
	
	
$(".leader-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

    ]
  });	
	
$(".placement-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           dots:true,
			arrows:false,
			adaptiveHeight: true,
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

    ]
  });		
	
	
	$(".placelogo-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
		rows:2,
    dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
           
           
        }
      },

      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
        }
      },

    ]
  });
	
	
	$(".collab-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         arrow: true  
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

    ]
  });		
	
	
	$(".collablogo-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
		rows:2,
    dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
            dots: true,
			arrows: false,
           
        }
      },

      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
			dots: true,
			arrows: false,
         
        }
      },

    ]
  });
	
	$(".industry-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

    ]
  });	 
	
	
	$(".alum-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           dots: true,
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots: true,
         
        }
      },

    ]
  });	
	

//	$(".advantage-slider").slick({
//    infinite: true,
//    autoplay: false,
//    autoplaySpeed: 3000,
//    slidesToShow: 4,
//    slidesToScroll: 1,
//    dots: true,
//    speed: 500,
//    pauseOnHover: false,
//    arrows: false,
//    swipeToSlide: true,
//    adaptiveHeight: true,
//     responsive: [{
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 1,
//          infinite: true,
//			dots: true,
//
//        }
//      },
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 1,
//          arrows: false,
//			dots: true,
//         }
//      },
//		{
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 1,
//          slidesToScroll: 1,
//          arrows: false,
//			dots: true,
//        }
//      },
//    ]
//  }); 
	
	
	$(".advantage-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
		dots: true,
    speed: 500,
    pauseOnHover: true,
    arrows: false,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },

    ]
  });
	
	
	$(".inter-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 6,
		rows:2,
    dots: true,
    speed: 500,
    pauseOnHover: true,
    arrows: false,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
           
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
         
        }
      },

    ]
  });
	
	
	
	
	$(".place-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
		rows:2,
    dots: true,
    speed: 500,
    pauseOnHover: true,
    arrows: false,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
           
           
        }
      },

      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
        }
      },

    ]
  });
	
	
	
	$(".alumni-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
			arrows: false,
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots:true,
			arrows: false,
         
        }
      },

    ]
  });
	
	
	$(".student-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
		dots: false,
    speed: 500,
    pauseOnHover: true,
    arrows: true,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           dots: true,
			arrows: false,
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots: true,
			arrows: false,
         
        }
      },

    ]
  });
		
	
	$(".about-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
		dots: true,
    speed: 500,
    pauseOnHover: true,
    arrows: false,
//    swipeToSlide: true,
//    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:true, 
           
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
			dots:true, 
         
        }
      },
		{
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
			dots:true, 
         
        }
      },

    ]
  });
	
	
	
	
	
	
	
	
		
	
	
//	$(".inter-slider").slick({
//    infinite: true,
//    autoplay: false,
//	rows:2,
//	autoplaySpeed: 3000,
//    slidesToShow: 6,
//    slidesToScroll: 3,
//    dots: true,
//    speed: 500,
//    pauseOnHover: false,
//		arrows: false,
//    daptiveHeight: true,
//		swipeToSlide: true,  
//     responsive: [{
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 3,
//          infinite: true,
//			dots: true,
//	
//        }
//      },
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 3,
//           
//         }
//      },
//		{
//        breakpoint: 426,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 3,
//		swipeToSlide: true,
//          
//        }
//      },
// 
//    ]
//  }); 
//	
	
	
	
   $(".mba-slider").slick({
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: false,
    speed: 500,
    pauseOnHover: false,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
			dots: true
        }
      },

    ]
  });
	
	
	$(".recruiter-slider").slick({
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 2,
//    dots: true,
    speed: 500,
    pauseOnHover: false,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
//          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
			dots: true
        }
      },

    ]
  });

	
	
//	$(".recruiter-slider").slick({
//    infinite: false,
//    autoplay: false,
//    rows: 1,
//    autoplaySpeed: 1000,
//    speed: 400,
//    slidesToShow: 5,
//    slidesToScroll: 2,
//    dots: false,
//    pauseOnHover: false,
//    arrows: true,
//    cssEase: 'linear',
//    swipeToSlide: true,
//    responsive: [{
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 5,
//          slidesToScroll: 2,
//		dots: true,
//         arrows: true,
//        }
//      },
//		
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 2,
//          arrows: true,
//			dots:false,
//        }
//      },				 
//		{
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 1,
//          dots: false,
//			arrows: true,
//        }
//      },		 				 
//    ]
//  });

  
	
	

   


	
//	$(".intercollab-slider").slick({
//    infinite: true,
//    autoplay: false,
//    rows: 2,
//    autoplaySpeed: 1000,
//    speed: 400,
//    slidesToShow: 5,
//    slidesToScroll: 2,
//    dots: false,
//    pauseOnHover: false,
//    arrows: true,
//    cssEase: 'linear',
//    swipeToSlide: true,
//    responsive: [{
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 4,
//          slidesToScroll: 2,
//          dots: false
//        }
//      },
//		
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 2,
//          arrows: false,
//        }
//      },				 
//		{
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2,
//          arrows: false,
//        }
//      },		 				 
//    ]
//  });
	
	

  
  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });

  $("#showbtech").click(function () {
    $(".btechbox").show();
  });
  $(".close-container").click(function () {
    $(".btechbox").hide();
  });


  $("#showscience").click(function () {
    $(".sciencebox").show();
  });
  $(".close-container").click(function () {
    $(".sciencebox").hide();
  });

  $("#showlaw").click(function () {
    $(".lawbox").show();
  });
  $(".close-container").click(function () {
    $(".lawbox").hide();
  });

  $("#showmgmt").click(function () {
    $(".mgmtbox").show();
  });
  $(".close-container").click(function () {
    $(".mgmtbox").hide();
  });

});
