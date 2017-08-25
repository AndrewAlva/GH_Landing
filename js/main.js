$(document).ready(function() {
	
	setTimeout(function(){
		$('.leftWrap').removeClass('enterBg');

		setTimeout(function(){
			$('.animateObj').each(function(index, el) {
				setTimeout(function(){
					$(el).removeClass('animateObj');
				}, (index * 150));
			});
		}, 1600);

	}, 500);
	
});