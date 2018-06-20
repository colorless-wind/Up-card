//呈现内容
$('.mui-content').fadeIn();
//右侧功能按钮
//关注
$('.attention-btn').on('tap', function() {
	location.href = 'https://www.douyin.com/share/user/96463214333';
})
//点赞
$('.zan-btn').on('tap', function() {
	var self = $(this);

	if(self.attr('data-switch') == 'on') {
		self.find('img').attr('src', 'img/zan.png');
		self.attr('data-switch', 'off');
	} else if(self.attr('data-switch') == 'off') {
		self.find('img').attr('src', 'img/zan_right.png');
		self.attr('data-switch', 'on');
	} else {
		console.warn('no data-switch');
	}

})
//分享
$('.share-btn').on('tap', function() {
	$('.share-guide').remove();
	$('body').append('<div class="close-btn-for-share"></div><img src="img/share_guide.png" class="share-guide"/>');
	//关闭按钮绑定
	$('.close-btn-for-share').on('tap', function() {
		$('.share-guide').remove();
		$('.close-btn-for-share').remove();
	})
})
//底部菜单按钮
$('.new-btn').on('tap', function() {
			location.href = 'ProductDetail.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId') +'&' + 'initIndex=' + 6;

})

$('.product-btn').on('tap', function() {
			location.href = 'ProductDetail.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId') +'&' + 'initIndex=' + 11;

})

$('.me-btn').on('tap', function() {
			location.href = 'ProductDetail.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId') +'&' + 'initIndex=' + 3;

})
//音乐按钮旋转
var musicProcess = 0;
var musicPlay = 'stop';
$('.music-btn').on('tap', function() {
	if(musicPlay == 'stop') {
		musicPlay = setInterval(function() {
			musicProcess = musicProcess + 2;
			$('.music-btn').css('transform', 'rotate(' + musicProcess + 'deg)');
		}, 50)
	} else {
		clearInterval(musicPlay);
		musicPlay = 'stop';
	}
})
//模拟数据
var requiredInfo = {
	channelId: '1', //渠道编号   0:app, 1:wechat, 2:platform A, 3:platform B, etc...
	cardId: '', //银行卡编号  0:meo card, 1:constellation card, 2:fire card, etc... 这个页面暂时收集不到
	userName: '', //用户名  这个页面暂时收集不到
	identityType: '', //证件类型  这个页面暂时收集不到
	identityNumber: '', //证件号码  这个页面暂时收集不到
	phone: '', //手机号  这个页面暂时收集不到
	verifyCode: '', //用户名  这个页面暂时收集不到
}

//iSlider 数据列表
var list = [
	// picture
	//	{
	//		content: '<img src="img/Product4.png" style="width:100%;height:100%;"/><a data-card-id="fire03" class="card-apply" style="width: 40%;position:  absolute;z-index:  99999;top: 5%;right: 6%;display:  block;padding: 0;margin: 0;"><img src="img/Apply_btn.png" style="width: 100%;"></a>'
	//	},
	{
		content: '<img src="img/meng.png" style="width:100%;height:100%;"/><a data-card-id="up03" data-index="3" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 20%;right: 25%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<img src="img/xing.png" style="width:100%;height:100%;"/><a data-card-id="up02" data-index="6" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;top: 10%;left: 13%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<img src="img/ran.png" style="width:100%;height:100%;"/><a data-card-id="up01"  data-index="11" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 20%;right: 25%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<img src="img/main.png" style="width:100%;height:100%;"/>'
	},
	//				// HTML String
	//				{
	//					content: '<div style="font-size:4em;color:white;text-align: center">HTML String</div>'
	//				},
	//				// element
	//				{
	//					content: (function() {
	//						var dom = document.createElement('div');
	//						dom.innerHTML = 'Element';
	//						dom.style.cssText = 'font-size:3em;color:rgb(230, 230, 63);';
	//						return dom;
	//					})()
	//				},
	//				// fragment
	//				{
	//					content: (function() {
	//						var frag = document.createDocumentFragment();
	//						var img = new Image()
	//						var dom = document.createElement('div');
	//						dom.innerHTML = 'Fragment';
	//						dom.style.cssText = 'font-size:3em;color:rgb(230, 63, 230);';
	//						frag.appendChild(dom);
	//						return frag;
	//					})()
	//				},
	//				// dom
	//				{
	//					content: document.querySelector('#hidden-space > p')
	//				},
	//				// iframe
	//				{
	//					content: '' +
	//						'<div style="padding-top:.2em;font-size:3em;color:rgb(230, 63, 230);position:absolute;top:0;left:0;height:100%;width:100%;z-index:1">' +
	//						'<span style="padding:.2em;background-color:black;">Iframe</span>' +
	//						'</div>' +
	//						'<iframe style="position:relative;z-index:0;height:100%;" src="http://mobile.baidu.com"></iframe>'
	//				}
];
//iSlider 初始化
var S = new iSlider({
	dom: document.getElementById('iSlider-wrapper'),
	data: list,
	isAutoplay: 0,
	isLooping: 0,
	isOverspread: 1,
	animateTime: 800,
	//animateType:'depth',
	initIndex: 3,
	//	isDebug: true,
	isVertical: true
});
//绑定详情按钮跳转
S.on('slideStart', function() {
	//详情
	$('.show-up-btn').on('tap', function() {
		var self = $(this);
		location.href = 'ProductDetail.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId') + '&' + 'cardId=' + self.attr('data-card-id').trim() + '&' + 'initIndex=' + self.attr('data-index');
	})
})
//滑动后改变菜单状态
S.on('slideChanged', function(index, dom) {

	if(index == 3) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');
	} else if(index == 2) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666_select.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');
	} else if(index == 1) {
		$('.new-btn').find('img').attr('src', 'img/120_select.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');
	} else if(index == 0) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216_select.png');
	} else {
		console.log(index);
	}

})


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