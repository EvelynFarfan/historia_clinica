$(document).ready(function(){

	$('.materialboxed').materialbox();
	$(".dropdown-button").dropdown();
	$('.slider').slider();
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();

	if ($(window).width()< 1230){
   		$(".imagen_logoMinsa").attr("src","img/logo_minsa.jpg");
   	}  
   	if($("div").hasClass(".seleccionado")){

   	};
	$(window).scroll(function() { 
		if ($(document).scrollTop() > 50) { 
			$("#menu_navbar").css("height", "65px");
			$("#menu_navbar").css("padding", "0 5% 0 5%");
			$(".imagen_logoMinsa").attr("src","img/logo_minsa.jpg");
			$(".imagen_logoMinsa").css("padding-top", "9%;");

 		} else if ($(document).scrollTop() < 50) {
		    $("#menu_navbar").css("height", "8rem");
			$("#menu_navbar").css("padding", "30px 5% 0 5%");
			$(".imagen_logoMinsa").attr("src","img/minsa_logo.png"); 
		}
		if ($(window).width() <= 770 ){
			if ($(document).scrollTop() > 50) { 
				$("#menu_navbar").css("height", "65px");
				$("#menu_navbar").css("padding", "0 5% 0 5%");
				$(".imagen_logoMinsa").attr("src","img/logo_minsa.jpg");
				$(".imagen_logoMinsa")	.css("padding", "12% 0");
	 		} else if ($(document).scrollTop() < 50) {
			   	$("#menu_navbar").css("height", "65px");
				$("#menu_navbar").css("padding", "0 5% 0 5%");
				$(".imagen_logoMinsa").attr("src","img/logo_minsa.jpg");
				$(".imagen_logoMinsa")	.css("padding", "12% 0");
			} 
   		}

	});

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	
   	$('.carousel.carousel-slider').carousel({fullWidth: true});
// -------------------------- Media Queries ---------------------

	$(window).resize(function(){
    	if ($(window).width() <= 770){
			$(".imagen_logoMinsa").attr("src","img/logo_minsa.jpg");
		}	
   	});     
});
