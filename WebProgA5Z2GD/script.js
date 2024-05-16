$(document).ready(function()
    {
	$('#teljeselem').load("kezdooldal.html");
	$(".menuelem1").hover(function()
		{
		$(".menuelem1").animate({height: '50px', opacity: '1'}, 500);
		$(".menuelem1").css({color: 'gray'}, 500);
		}, 
	function()
		{
		$(".menuelem1").animate({height: '30px', opacity: '0.8'}, 500);
		$(".menuelem1").css({color: 'black'}, 500);
		});
	$(".menuelem2").hover(function()
		{
		$(".menuelem2").animate({height: '50px', opacity: '1'}, 500);
		$(".menuelem2").css({color: 'gray'}, 500);
		}, 
	function()
		{
		$(".menuelem2").animate({height: '30px', opacity: '0.8'}, 500);
		$(".menuelem2").css({color: 'black'}, 500);
		}); 
	$(".menuelem3").hover(function()
		{
		$(".menuelem3").animate({height: '50px', opacity: '1'}, 500);
		$(".menuelem3").css({color: 'gray'}, 500);
		}, 
	function()
		{
		$(".menuelem3").animate({height: '30px', opacity: '0.8'}, 500);
		$(".menuelem3").css({color: 'black'}, 500);
		}); 
	$(".menuelem4").hover(function()
		{
		$(".menuelem4").animate({height: '50px', opacity: '1'}, 500);
		$(".menuelem4").css({color: 'gray'}, 500);
		}, 
	function()
		{
		$(".menuelem4").animate({height: '30px', opacity: '0.8'}, 500);
		$(".menuelem4").css({color: 'black'}, 500);
		}); 
	$(".menuelem5").hover(function()
		{
		$(".menuelem5").animate({height: '50px', opacity: '1'}, 500);
		$(".menuelem5").css({color: 'gray'}, 500);
		}, 
	function()
		{
		$(".menuelem5").animate({height: '30px', opacity: '0.8'}, 500);
		$(".menuelem5").css({color: 'black'}, 500);
		});
	$(".menuelem1").click(function()
		{
		$('#teljeselem').load("kezdooldal.html");
		});
	$(".menuelem2").click(function()
		{
		$('#teljeselem').load("ujdonsagaink.html");
		});
	$(".menuelem3").click(function()
		{
	$('#teljeselem').load("tanfolyamok.html");
		});
	$(".menuelem4").click(function()
		{
	$('#teljeselem').load("araink.html");
		});
    });