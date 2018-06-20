//呈现内容
$('.mui-content').fadeIn();
//右侧功能按钮
//关注
$('.attention-btn').bind('tap', function() {
	location.href = 'https://www.douyin.com/share/user/96463214333';
})
//点赞
$('.zan-btn').bind('tap', function() {
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
$('.share-btn').bind('tap', function() {
	$('.share-guide').remove();
	$('body').append('<div class="close-btn-for-share"></div><img src="img/share_guide.png" class="share-guide"/>');
	//关闭按钮绑定
	$('.close-btn-for-share').bind('tap', function() {
		$('.share-guide').remove();
		$('.close-btn-for-share').remove();
	})
})
//底部菜单按钮
$('.new-btn').bind('tap', function() {
	location.href = 'NewsCenter.html';
})

$('.product-btn').bind('tap', function() {
	location.href = 'ProductCenter.html';
})

$('.me-btn').bind('tap', function() {
	location.href = 'PersonalCenter.html';
})
//音乐按钮旋转
var musicProcess = 0;
var musicPlay = 'stop';
$('.music-btn').bind('tap', function() {
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
		content: '<img src="img/meng.png" style="width:100%;height:100%;"/><a data-card-id="up03" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 20%;right: 25%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<img src="img/xing.png" style="width:100%;height:100%;"/><a data-card-id="up02" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;top: 10%;left: 13%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: document.querySelector('#meng-series-2')
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
	dom: document.getElementById('iSlider-wrapper1'),
	data: list,
	isAutoplay: 0,
	isLooping: 0,
	isOverspread: 1,
	animateTime: 800,
	//animateType:'depth',
	initIndex: 1,
	//	isDebug: true,
	isVertical: true
});
//绑定详情按钮跳转
S.bind('slideStart', function() {
	//详情
	$('.show-up-btn').bind('tap', function() {
		var self = $(this);
		location.href = 'ProductDetail.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId') + '&' + 'cardId=' + self.attr('data-card-id').trim();
	})
})
//滑动后改变菜单状态
S.bind('slideChanged', function(index, dom) {

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
var mySwiper
$(function() {
	//获取地址栏参数
	GetQueryString(location.href, 'channelId');

	//初始化点击事件绑定
	//	$('#card16').click(function() {
	//		location.href = 'ProductLongIntro.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId');
	//	})

	$('.new-btn').click(function() {
		location.href = 'NewsCenter.html';
	})

	$('.product-btn').click(function() {
		location.href = 'ProductCenter.html';
	})

	$('.me-btn').click(function() {
		location.href = 'PersonalCenter.html';
	})
	
	//滑动初始化
mySwiper = new Swiper('.swiper-container-xing3', {
	//		direction: '',
	loop: true,
	effect: 'coverflow',
	slidesPerView: 3,
	//		centeredSlides: true,
	//		setWrapperSize: true,
	//		height:200,//你的slide高度
	//		autoHeight:true,
	coverflowEffect: {
		rotate: 0,
		stretch: 30,
		depth: 90,
		modifier: 2,
		slideShadows: false,
		other: {
			type: 'xing',
			translateX: -10
		}
	},
	on: {
		slideChangeTransitionEnd: function() {
			console.log($('.swiper-slide-next').attr('data-name'))
			$('.constellation').text($('.swiper-slide-next').attr('data-name'));
		},
	}
})
	
	//滑动初始化
	mySwiper = new Swiper('.swiper-container1', {
		//		direction: '',
		loop: true,
		effect: 'coverflow',
		slidesPerView: 3,
		centeredSlides: true,
		//		setWrapperSize: true,
		//		height:200,//你的slide高度
		//		autoHeight:true,
		coverflowEffect: {
			rotate: 0,
			stretch: 20,
			depth: 120,
			modifier: 2,
			slideShadows: false,
			other: {
				type: 'ran',
				translateX: -10
			}
		},
		on: {
			slideChangeTransitionEnd: function() {
				$('.constellation').text($('.swiper-slide-next').attr('data-name'));

			},
		}
	})

	$('.card').bind('touchstart', function() {
		S.hold()
	})

	$('.card').bind('touchend', function() {
		S.unhold()
	})
})