$(function() {  
	$("#cover-link").click(function() { 
		$("#covernarration").removeClass("animate-text"); 
		$("#covernarration").toggleClass("animation-ftb").delay(800).queue(function(){
			window.open("page1.html","_self");  
		});
	});  
});
$(function() {  
	$("#p2btn").click(function() {  
		$("#p2narration").toggleClass("animation-afc"); 
		$("#duke").toggleClass("animation-fadein"); 
	});  
});
$(function() {  
	$("#p3btn").click(function() {  
		$("#p3narration").toggleClass("animation-afc");  
		$("#rica").toggleClass("animation-fadein"); 
	});  
});
$(function() {  
	$("#p6btn").click(function() {  
		$(".panel6").addClass("animation-overflow-visible");
		$("#p6bill1").toggleClass("animation-p6bills").delay(1000).queue(function(){  
		$("#p6bill2").toggleClass("animation-p6bills"); 
		});
	});  
});
$(function() {  
	$("#p7btn").click(function() {  
		$("#p7narration").toggleClass("animation-afc");  
		$("#p8narration").toggleClass("animation-ufb-p8delay");  
	});  
});
$(function() {  
	$("#p9btn").click(function() {  
		$("#p9narration").toggleClass("animation-dft-slow"); 
		$(".p9dude").toggleClass("animation-afc-p9delay"); 
		$("#p10narration").toggleClass("animation-afc-p10delay");
	});  
});
$(function() {  
	$("#p11btn").click(function() {  
		$("#p11narration").toggleClass("animation-afc-p11slow"); 
		$("#p13narration").toggleClass("animation-afc-p13delay");
	});  
});
$(function() {  
	$("#p14btn").click(function() {  
		$("#p14img").toggleClass("animation-scroll-p14");
		$("#p14narration1").toggleClass("animation-scroll-p14");
		$("#p14narration2").toggleClass("animation-scroll-p14");
		$("#p14btn").toggleClass("animation-scroll-p14");
		$("#p14btn-up").toggleClass("animation-scroll-p14");
		$("#p15narration1").toggleClass("animation-afc-p15delay").delay(400).queue(function(){
			$("#p15narration2").toggleClass("animation-afc-p15delay").delay(600).queue(function(){
				$("#p15narration3").toggleClass("animation-afc-p15delay");
			});
		});
	});  
});
/*$(function() {  
	$("#p14btn-up").click(function() {  
		$("#p14img").toggleClass("animation-scrollup-p14");
		$("#p14narration1").toggleClass("animation-scrollup-p14");
		$("#p14narration2").toggleClass("animation-scrollup-p14");
		$("#p14btn").toggleClass("animation-scrollup-p14");
		$("#p14btn-up").toggleClass("animation-scrollup-p14");
	});  
});*/

$(window).scroll(function() {
	$('#p4narration').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+300) {
			$(this).addClass("animation-ltr");
		}
	});
});
$(window).scroll(function() {
	$('#p5narration').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("animation-afc-p5delay");
		}
	});
});
$(window).scroll(function() {
	$('#p6narration').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+300) {
			$(this).addClass("animation-rtl-p6delay");
		}
	});
});