var isFirstPlay = window.localStorage.getItem('first-play');
if(true) {
	window.localStorage.setItem('first-play', 'no');

	$('video').width($(window).width());
	$('video').height($(window).height());

	var music = new Audio('movie/up.mp3');
	music.load();
	music.loop = 'loop';

	$('#up-video1').css('opacity', 1);
	$('#up-video1')[0].play();
	music.play()
	setTimeout(function() {

		$('#up-video1').css('opacity', 0);
		$('#up-video2').css('opacity', 1);
		$('#up-video2')[0].loop = 'loop';
		$('#up-video2')[0].play();
		setTimeout(function() {
			$('#up-video2').css('opacity', 0);
			$('#up-video2').css('z-index', 1);
			$('#up-video2').remove();
			$('body').append('<img src="img/operation_guide.gif" class="operation-guide fadeIn" />');

			$(document).on('touchmove', '.operation-guide', function() {
				$('.operation-guide').hide();
				$('#welcome-video').css('opacity', 1);
				$('video').width($(window).width());
	$('video').height($(window).height());
				$('#welcome-video')[0].play();
				var contentShow = setTimeout(function() {
					//				$('video').css('opacity',0);
					$('video').hide();
					$('.mui-content').fadeIn();
					setTimeout(function() {
						$('.theme-mask').remove();
						$('.up-theme').remove();
						$('body').append('<div class="theme-mask"><img src="img/up-theme.gif" class="up-theme zoomIn" /><a href="ProductDetail.html" class="theme-btn"></a><img src="img/close_btn.png" class="close-btn"></div>');
						$('.close-btn').on('tap', function() {
							$('.theme-mask').remove();
						})
					}, 2000)
				}, 8000)

				$('#welcome-video').on('tap', function() {
					clearTimeout(contentShow);
					$('video').hide();
					$('.mui-content').fadeIn();
					setTimeout(function() {
						$('.theme-mask').remove();
						$('.up-theme').remove();
						$('body').append('<div class="theme-mask"><img src="img/up-theme.gif" class="up-theme zoomIn" /><a href="ProductDetail.html" class="theme-btn"></a><img src="img/close_btn.png" class="close-btn"></div>');
						$('.close-btn').on('tap', function() {
							$('.theme-mask').fadeOut();
						})
					}, 2000)
				})

			})
		}, 2000)

	}, 1950)

} else {
	$('video').remove();
	$('.mui-content').fadeIn();
}

$('.new-btn').on('tap', function() {
	location.href = 'NewsCenter.html';
})

$('.product-btn').on('tap', function() {
	location.href = 'ProductCenter.html';
})

$('.me-btn').on('tap', function() {
	location.href = 'PersonalCenter.html';
})