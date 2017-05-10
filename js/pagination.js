$(document).ready(function(){
    $("#tabla_dos").css("display", "none");
    $("#tabla_tres").css("display", "none");
    $("#numUno").css("color", "#fff");

    $( "#numDos" ).click(function() {
        $("#numUno").css("color", "#000");
        $("#numDos").css("color", "#fff");
        $("#numTres").css("color", "#000");
        $(".liPagUno").removeClass("activado");
        $(".liPagDos").addClass("activado");
        $(".liPagTres").removeClass("activado");
        $("#tabla_uno").css("display", "none");
        $("#tabla_dos").css("display", "block");
        $("#tabla_tres").css("display", "none");
        $(".previous").removeClass("disabled");
        $(".next").removeClass("disabled");
    });

    $( "#numTres" ).click(function() {
        $("#numUno").css("color", "#000");
        $("#numDos").css("color", "#000");
        $("#numTres").css("color", "#fff");
        $(".liPagUno").removeClass("activado");
        $(".liPagDos").removeClass("activado");
        $(".liPagTres").addClass("activado");
        $("#tabla_uno").css("display", "none");
        $("#tabla_dos").css("display", "none");
        $("#tabla_tres").css("display", "block");
        $(".next").addClass("disabled");
    });

    $( "#numUno" ).click(function() {
        $("#numUno").css("color", "#fff");
        $("#numDos").css("color", "#000");
        $("#numTres").css("color", "#000");
        $(".liPagUno").addClass("activado");
        $(".liPagDos").removeClass("activado");
        $(".liPagTres").removeClass("activado");
        $("#tabla_uno").css("display", "block");
        $("#tabla_dos").css("display", "none");
        $("#tabla_tres").css("display", "none");
        $(".previous").addClass("disabled");
    });
});
