// $( document ).ready(function() {
// 	$("#buttonEnviarHome").click(function(){
// 		$("#register").validate({
// 			debug: false,
// 			rules: {
// 				"name": {
// 					required: true
// 				},
// 				"surname": {
// 					required: true
// 				},
// 				"surname2": {
// 					required: true
// 				},
// 				"email": {
// 					required: true,
// 					email: true
// 				},
// 				"cpostal": {
// 					required: true,
// 					number:true,
// 					minlength: 5,
// 					maxlength: 5
// 				}
// 			},
// 			messages: {
// 				"name": {
// 					required: "Introduce tu nombre."
// 				},
// 				"surname": {
// 					required: "Apellido obligatorio."
// 				},
// 				"surname2": {
// 					required: "Apellido obligatorio."
// 				},
// 				"email": {
// 					required: "Introduce tu correo.",
// 					email: ""
// 				},
// 				"cpostal": {
// 					required: "Introduce tu código postal.",
// 					number: "Introduce un código postal válido.",
// 					maxlength: "Debe contener 5 dígitos.",
// 					minlength: "Debe contener 5 dígitos."
// 				}
// 			}
// 		});
// 	})
// });


// $(document).ready(function () {
//     var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
//     $("#buttonEnviarHome").click(function (){
//         $(".error").remove();
//         if( $("#name").val() == "" ){
//             $("#name").focus().after("<span class='error'>Ingrese su nombre</span>");
//             return false;
//         }else if( $("#email").val() == "" || !emailreg.test($("#email").val()) ){
//             $("#email").focus().after("<span class='error'>Ingrese un email correcto</span>");
//             return false;
//         }else if( $(".asunto").val() == ""){
//             $(".asunto").focus().after("<span class='error'>Ingrese un asunto</span>");
//             return false;
//         }else if( $(".mensaje").val() == "" ){
//             $(".mensaje").focus().after("<span class='error'>Ingrese un mensaje</span>");
//             return false;
//         }
//     });
//     $("#name, .asunto, .mensaje").keyup(function(){
//         if( $(this).val() != "" ){
//             $(".error").fadeOut();
//             return false;
//         }
//     });
//     $("#email").keyup(function(){
//         if( $(this).val() != "" && emailreg.test($(this).val())){
//             $(".error").fadeOut();
//             return false;
//         }
//     });
// });

$("#register").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
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
            name:{
                required: "Enter a username",
                minlength: "Enter at least 5 characters"
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