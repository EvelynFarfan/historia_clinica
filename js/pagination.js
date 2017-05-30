$(document).ready(function(){
    $("#tabla_dos").css("display", "none");
    $("#tabla_tres").css("display", "none");
    $("#numUno").css("color", "#fff");
    $('#pagination-demo').twbsPagination({
        totalPages: 3,
        visiblePages: 3,
        next: '<i class="material-icons">chevron_right</i>',
        prev: '<i class="material-icons">chevron_left</i>',
        onPageClick: function (event, page) {
            $(".first").css("display", "none");
            $(".last").css("display", "none");
            $("#pagination-demo li:nth-child(3)").click(function(){
                $("#tabla_uno").css("display", "block");
                $("#tabla_dos").css("display", "none");
                $("#tabla_tres").css("display", "none");
            });
            $("#pagination-demo li:nth-child(4)").click(function(){
                $("#tabla_uno").css("display", "none");
                $("#tabla_dos").css("display", "block");
                $("#tabla_tres").css("display", "none");
            });
            $("#pagination-demo li:nth-child(5)").click(function(){
                $("#tabla_uno").css("display", "none");
                $("#tabla_dos").css("display", "none");
                $("#tabla_tres").css("display", "block");
            });
            $(".prev").click(function(){
                if($("#pagination-demo li:nth-child(4)").hasClass("active")){
                    $(this).removeClass("active");
                    $("#pagination-demo li:nth-child(3)").addClass("active");
                    $("#tabla_uno").css("display", "block");
                    $("#tabla_dos").css("display", "none");
                    $("#tabla_tres").css("display", "none");
                }
                else if($("#pagination-demo li:nth-child(5)").hasClass("active")){
                    $(this).removeClass("active");
                    $("#pagination-demo li:nth-child(4)").addClass("active");
                    $("#tabla_uno").css("display", "none");
                    $("#tabla_dos").css("display", "block");
                    $("#tabla_tres").css("display", "none");
                }
            });
            $(".next").click(function(){
                if($("#pagination-demo li:nth-child(3)").hasClass("active")){
                    $(this).removeClass("active");
                    $("#pagination-demo li:nth-child(4)").addClass("active");
                    $("#tabla_uno").css("display", "none");
                    $("#tabla_dos").css("display", "block");
                    $("#tabla_tres").css("display", "none");
                }
                else if($("#pagination-demo li:nth-child(4)").hasClass("active")){
                    $(this).removeClass("active");
                    $("#pagination-demo li:nth-child(5)").addClass("active");
                    $("#tabla_uno").css("display", "none");
                    $("#tabla_dos").css("display", "none");
                    $("#tabla_tres").css("display", "block");
                }
            });
        }
    });
});
