$(document).ready(function() {
	$('.animateObj').each(function(index, el) {
		setTimeout(function(){
			$(el).removeClass('animateObj');
		}, (index * 150));
	});
	
});