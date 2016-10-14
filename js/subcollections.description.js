$(document).ready(function(){
	// In this case, we only have two subcollections
	// Subcollection 1
	$('.img1').hover( function(){
		$(".det1").show();
	},
	function(){
		$(".det1").hide();
	});
	// Subcollection 2
	$('.img2').hover( function(){
		$(".det2").show();
	},
	function(){
		$(".det2").hide();
	});
	
	// Subcollection N - foreach with the subcollections (Sobek logic)
	/*$('.subcolOptImgN').hover( function(){
		$(".detN").show();
	},
	function(){
		$(".det2N").hide();
	});*/
});