$(document).ready(() => {

$("p").hide();

$(".btn1").click(function(){
	$(".para1").css("display","block");
	$(".para2").css("display","none");
	$(".para3").css("display","none");

});

$(".btn2").click(function(){
	$(".para1").css("display","none");
	$(".para2").css("display","block");
	$(".para3").css("display","none");
});

$(".btn3").click(function(){
	$(".para1").css("display","none");
	$(".para2").css("display","none");
	$(".para3").css("display","block");
});



});