$(document).ready(function(){
	// Tiles display title information (event - mouse over)
	$("img[id^='sbkThumbnailImg']").each(function(){
		var n = $(this);
		var t = n.attr("id").split("g")[1];
		var u = $("#descThumbnail"+t).html();
		var i = 'center left';
		var r = 'center right';
		if(t%5==0){
			i='center right';
			r='center left';
		}
		$(this).qtip({
	             content: {
	                 text: u
	             },
	             position: {
	                 my: i,
	                 at: r
	             },
	             style: {
	                 classes: 'qtip-tipsy'
	             }
	         });
	});
});