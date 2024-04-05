$(document).ready(function()
    {
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
    $(elrejt).click(function()
        {
        $(p1).hide("slow");
        $(p2).hide("slow");
        $(p3).hide("slow");
        });
    $(megjelenit).click(function()
        {
        $(p1).show("slow");
        $(p2).show("slow");
        $(p3).show("slow");
        });
    $(urlapelrejt).click(function()
        {
        $(urlap).hide("slow");
        });
    $(urlapmegjelenit).click(function()
        {
        $(urlap).show("slow");
        });
    $(egy).click(function()
        {
        $(urlap).css('opacity', '0.1');
        });
    $(ot).click(function()
        {
        $(urlap).css('opacity', '0.5');
        });
    $(nyolc).click(function()
        {
        $(urlap).css('opacity', '0.8');
        });
    $(kibekapcsol).click(function()
        {
        $(p1).toggle("slow");
        $(p2).toggle("slow");
        $(p3).toggle("slow");
        });
    $(urlapkibekapcsol).click(function()
        {
        $(urlap).toggle("slow");
        });
    });