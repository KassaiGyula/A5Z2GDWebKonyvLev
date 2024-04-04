$(document).ready(function()
    {
    $(".fixed").hide();
    /*$(fejlec).mouseleave(function()
        {
        alert("Információ!");
        });*/
    $(".gombsor").click(function()
        {
        $("ul li:first-child").hide("slow");
        $("[href]").hide("slow");
        });
    $(fejlec).mouseleave(function()
        {
        alert("Információ");
        //$(p1).hide("slow");
        });
    $(".input1").hover(function()
        {
        $(".input1").css('border', '2px solid red');
        },
    function()
        {
        $(".input1").css('border', '2px solid gray');
        });
    $(".input2").hover(function()
        {
        $(".input2").css('border', '2px solid red');
        },
    function()
        {
        $(".input2").css('border', '2px solid gray');
        });
    $(".input3").hover(function()
        {
        $(".input3").css('border', '2px solid red');
        },
    function()
        {
        $(".input3").css('border', '2px solid gray');
        });
    $(k1).click(function()
        {
        $(p1).hide("slow");
        });
    $(k2).dblclick(function()
        {
        $(p2).hide("slow");
        });
    $(".jelentkezes").mouseover(function()
        {
        $(".fixed").show("slow");
        });
    $(".jelentkezes").mouseout(function()
        {
        $(".fixed").hide("slow");
        });
    });