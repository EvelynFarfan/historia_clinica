$(document).ready(function(){

	$('.materialboxed').materialbox();
	$(".dropdown-button").dropdown();
	$('.slider').slider();
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
	$('.modal').modal();
	$('select').material_select();
	if ($(window).width()< 1230){
   		$(".imagen_logoMinsa").attr("src","img/logo_minsa.jpg");
   	}  
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
   	$("#botonEnviarComent").click(function(){
   		$("#formValidate").validate({
		    rules: {
		        uname: {
		            required: true,
		            minlength: 5
		        },
		        cdni:{
		            required: true,
		            maxlength: 8
		        },
		        cemail: {
		            required: true,
		            email:true
		        },
		        password: {
					required: true,
					minlength: 5
				},
				cpassword: {
					required: true,
					minlength: 5,
					equalTo: "#password"
				},
				curl: {
		            required: true,
		            url:true
		        },
		        crole:"required",
		        ccomment: {
					required: true,
					minlength: 15
		        },
		        cgender:"required",
				cagree:"required",
		    },
		    //For custom messages
		    messages: {
		        uname:{
		            required: "Ingrese su nombre completo",
		            minlength: "Ingrese más de 5 caracteres"
		        },
		        cdni:{
		            required: "Ingrese su DNI",
		            maxlength: "No ingrese más de 8 caracteres"
		        },
		        cemail:{
		            required: "Ingrese su email",
		            email: "Ingrese una dirección de email correcta"
		        },
		        cphone:{
		        	required: "Ingrese un número de teléfono",
		        },
		        curl: "Enter your website",
		    },
		    errorElement : 'div',
		    errorPlacement: function(error, element) {
		      var placement = $(element).data('error');
		      if (placement) {
		        $(placement).append(error)
		      } else {
		        error.insertAfter(element);
		      }
		    }
		});
   	});
   	$('#cdni').unbind('keyup change input paste').bind('keyup change input paste',function(e){
   		e.preventDefault();
	    var $this = $(this);
	    var val = $this.val();
	    var valLength = val.length;
	    var maxCount = $this.attr('maxlength');
	    if(valLength>maxCount){
	        $this.val($this.val().substring(0,maxCount));
	    }
	})
   	$("#botonLimpiar").click(function(e){
   		e.preventDefault();
   		$("#formValidate")[0].reset();
   	});
	// -------------------------- Media Queries ---------------------
	$(window).resize(function(){
    	if ($(window).width() <= 770){
			$(".imagen_logoMinsa").attr("src","img/logo_minsa.jpg");
		}	
   	});
});