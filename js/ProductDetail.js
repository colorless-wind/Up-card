//呈现内容
$('.mui-content').fadeIn();
//右侧功能按钮
//搜索
$('.search-btn').on('tap', function() {
	var proCode = GetQueryString(location.href,'pro_code');
	location.href = 'https://xyk.cebbank.com/cebmms/apply/ps/card-list.htm?pro_code=' + proCode;
})
//关注
$('.attention-btn').on('tap', function() {
	location.href = 'http://weibo.com/cebcardcenter';
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
	location.href = 'ProductDetail.html' + '?' + 'pro_code=' + GetQueryString(location.href, 'pro_code') + '&' + 'initIndex=' + 3;

})

$('.product-btn').on('tap', function() {
	location.href = 'ProductDetail.html' + '?' + 'pro_code=' + GetQueryString(location.href, 'pro_code') + '&' + 'initIndex=' + 5;

})

$('.me-btn').on('tap', function() {
	location.href = 'ProductDetail.html' + '?' + 'pro_code=' + GetQueryString(location.href, 'pro_code') + '&' + 'initIndex=' + 2;

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
	pro_code: '1', //渠道编号   0:app, 1:wechat, 2:platform A, 3:platform B, etc...
	cardId: '', //银行卡编号  0:meo card, 1:constellation card, 2:fire card, etc... 这个页面暂时收集不到
	userName: '', //用户名  这个页面暂时收集不到
	identityType: '', //证件类型  这个页面暂时收集不到
	identityNumber: '', //证件号码  这个页面暂时收集不到
	phone: '', //手机号  这个页面暂时收集不到
	verifyCode: '', //用户名  这个页面暂时收集不到
}

//iSlider 数据列表
var list = [
	//数据模板
	{
		content: document.querySelector('#meng-series-4-tpl').innerHTML
	},
	{
		content: document.querySelector('#meng-series-3-tpl').innerHTML
	},
	{
		content: document.querySelector('#meng-series-2-tpl').innerHTML
	},
//	{
//		content: document.querySelector('#meng-series-1-tpl').innerHTML
//	},
//	{
//		content: document.querySelector('#xing-series-3-tpl').innerHTML
//	},
//	{
//		content: document.querySelector('#xing-series-2-tpl').innerHTML
//	},
	{
		content: document.querySelector('#xing-series-1-tpl').innerHTML
	},
//	{
//		content: document.querySelector('#ran-series-5-tpl').innerHTML
//	},
	{
		content: document.querySelector('#ran-series-4-tpl').innerHTML
	},
	{
		content: document.querySelector('#ran-series-3-tpl').innerHTML
	},
//	{
//		content: document.querySelector('#ran-series-2-tpl').innerHTML
//	},
//	{
//		content: document.querySelector('#ran-series-1-tpl').innerHTML
//	}
]

var initIndex = parseInt(GetQueryString(location.href, 'initIndex'));

if(initIndex > 3) {
	$('.new-btn').find('img').attr('src', 'img/120.png');
	$('.product-btn').find('img').attr('src', 'img/666_select.png');
	$('.me-btn').find('img').attr('src', 'img/216.png');

	$('.new-btn').removeClass('zoomInOut');
	$('.product-btn').removeClass('zoomInOut');
	$('.me-btn').removeClass('zoomInOut');
	setTimeout(function() {
		$('.product-btn').addClass('zoomInOut');
	}, 50)
} else if(initIndex > 2) {
	$('.new-btn').find('img').attr('src', 'img/120_select.png');
	$('.product-btn').find('img').attr('src', 'img/666.png');
	$('.me-btn').find('img').attr('src', 'img/216.png');

	$('.new-btn').removeClass('zoomInOut');
	$('.product-btn').removeClass('zoomInOut');
	$('.me-btn').removeClass('zoomInOut');
	setTimeout(function() {
		$('.new-btn').addClass('zoomInOut');
	}, 50)
} else if(initIndex <= 2) {
	$('.new-btn').find('img').attr('src', 'img/120.png');
	$('.product-btn').find('img').attr('src', 'img/666.png');
	$('.me-btn').find('img').attr('src', 'img/216_select.png');

	$('.new-btn').removeClass('zoomInOut');
	$('.product-btn').removeClass('zoomInOut');
	$('.me-btn').removeClass('zoomInOut');
	setTimeout(function() {
		$('.me-btn').addClass('zoomInOut');
	}, 50)
} else {
	console.log(initIndex);
}

//iSlider 初始化
var S = new iSlider({
	dom: document.getElementById('iSlider-wrapper'),
	data: list,
	isAutoplay: 0,
	isLooping: 0,
	isOverspread: 1,
	animateTime: 800,
	//	animateType:'flip',
	initIndex: initIndex,
	//	isDebug: true,
	isVertical: true
});

var ran3Swiper;
var xing1Swiper;
var xing2Swiper;
var xing3Swiper;
var meng2Swiper;

ran3Swiper = new Swiper('.swiper-container-ran3', {
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
//						translateX: -20
					}
				},
				on: {
					slideChangeTransitionEnd: function() {

					},
				}
			})

xing1Swiper = new Swiper('.swiper-container-xing1', {
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
						console.log($('#xing-series-1').find('.swiper-slide-next').attr('data-name'))
						$('#xing-series-1').find('.constellation').text($('#xing-series-1').find('.swiper-slide-next').attr('data-name'));
					},
				}
			})

meng2Swiper = new Swiper('.swiper-container-meng2', {
				direction: 'vertical',
				loop: true,
				effect: 'coverflow',
				slidesPerView: 2.5,
				centeredSlides: true,
				//		setWrapperSize: true,
				height: 200, //你的slide高度
				//		autoHeight:true,
				coverflowEffect: {
					rotate: 1,
					stretch: 0,
					depth: 10,
					modifier: 10,
					slideShadows: false,
					other: {
						type: 'meng',
						translateZ: 130
					}
				},
			})

S.on('slideChanged', function(index, dom) {
	if(index > 3) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666_select.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');

		$('.new-btn').removeClass('zoomInOut');
		$('.product-btn').removeClass('zoomInOut');
		$('.me-btn').removeClass('zoomInOut');
		setTimeout(function() {
			$('.product-btn').addClass('zoomInOut');
		}, 50)
	} else if(index > 2) {
		$('.new-btn').find('img').attr('src', 'img/120_select.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');
		$('.new-btn').removeClass('zoomInOut');
		$('.product-btn').removeClass('zoomInOut');
		$('.me-btn').removeClass('zoomInOut');
		setTimeout(function() {
			$('.new-btn').addClass('zoomInOut');
		}, 50)
	} else if(index <= 2) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216_select.png');
		$('.new-btn').removeClass('zoomInOut');
		$('.product-btn').removeClass('zoomInOut');
		$('.me-btn').removeClass('zoomInOut');
		setTimeout(function() {
			$('.me-btn').addClass('zoomInOut');
		}, 50)
	} else {
		console.log(index);
	}
	console.log(index);
	$('.operation-guide').show();
	if(index == 999) {
		$('.music-btn').find('img').attr('src', 'img/icon_up.png');
	} else if(index == 999) {
		$('.music-btn').find('img').attr('src', 'img/icondou.png');
	} else if(index == 5) {
		$('.music-btn').find('img').attr('src', 'img/iconcup.png');
	} else if(index == 4) {
		$('.music-btn').find('img').attr('src', 'img/iconbasket.png');
	} else if(index == 999) {
		$('.music-btn').find('img').attr('src', 'img/iconhong.png');
	} else if(index == 3) {
		$('.music-btn').find('img').attr('src', 'img/iconxing.png');
	} else if(index == 999) {
		$('.music-btn').find('img').attr('src', 'img/iconxing.png');
	} else if(index == 999) {
		$('.music-btn').find('img').attr('src', 'img/iconxing.png');
	} else if(index == 999) {
		$('.music-btn').find('img').attr('src', 'img/icon_pet.jpg');
	} else if(index == 2) {
		$('.music-btn').find('img').attr('src', 'img/icon_duck.png');
	} else if(index == 1) {
		$('.music-btn').find('img').attr('src', 'img/iconfamily.png');
	} else if(index == 0) {
		$('.music-btn').find('img').attr('src', 'img/iconfamily.png');
		$('.operation-guide').hide();
	} else {
		console.log(index);
	}

	//滑动初始化
	if(document.querySelector('#ran-series-3')) {
		if(!ran3Swiper) {
			ran3Swiper = new Swiper('.swiper-container-ran3', {
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

					},
				}
			})
			$('#ran-series-3').find('.card-apply').on('tap', function() {
				if($('#ran-series-3').find('.swiper-slide-active').attr('data-name') == '光大VISA世界杯卡') {
					var pro_code = GetQueryString(location.href, 'pro_code');
					var cardId = $('#ran-series-3').find('.swiper-slide-active').attr('data-card-id');
					location.href = 'https://xyk.cebbank.com/cebmms/apply/ps/card-index.htm?req_card_id='+ cardId +'&pro_code=' + pro_code + '&c2c_recom_flag=';
				}
			})
		}
	} else {
		ran3Swiper = null;
	}
	//滑动初始化
	if(document.querySelector('#xing-series-1')) {
		if(GetQueryString(location.href, 'initIndex') != index && xing1Swiper || !xing1Swiper) {
			xing1Swiper = new Swiper('.swiper-container-xing1', {
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
						console.log($('#xing-series-1').find('.swiper-slide-next').attr('data-name'))
						$('#xing-series-1').find('.constellation').text($('#xing-series-1').find('.swiper-slide-next').attr('data-name'));
					},
				}
			})
		}
	} else {
		xing1Swiper = null;
	}

	//滑动初始化
	if(document.querySelector('#xing-series-2')) {
		if(!xing2Swiper) {
			xing2Swiper = new Swiper('.swiper-container-xing2', {
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
						console.log($('#xing-series-2').find('.swiper-slide-next').attr('data-name'))
						$('#xing-series-2').find('.constellation').text($('#xing-series-2').find('.swiper-slide-next').attr('data-name'));
					},
				}
			})
		}
	} else {
		xing2Swiper = null;
	}
	//滑动初始化
	if(document.querySelector('#xing-series-3')) {
		if(!xing3Swiper) {
			/*xing3Swiper = new Swiper('.swiper-container-xing3', {
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
						console.log($('#xing-series-3').find('.swiper-slide-next').attr('data-name'))
						$('#xing-series-3').find('.constellation').text($('#xing-series-3').find('.swiper-slide-next').attr('data-name'));
					},
				}
			})*/

			xing3Swiper = new Swiper('.swiper-container-xing3', {
				//		direction: '',
				loop: true,
				effect: 'coverflow',
				slidesPerView: 2,
				//		centeredSlides: true,
				//		setWrapperSize: true,
				//		height:200,//你的slide高度
				//		autoHeight:true,
				coverflowEffect: {
					rotate: 0,
					stretch: 70,
					depth: 30,
					modifier: 2,
					slideShadows: false,
					other: {
						type: 'xing3',
						//						translateX: -10
					}
				},
				on: {
					slideChangeTransitionEnd: function() {
						console.log($('#xing-series-3').find('.swiper-slide-next').attr('data-name'))
						$('#xing-series-3').find('.constellation').text($('#xing-series-3').find('.swiper-slide-next').attr('data-name'));
					},
				}
			})
		}
	} else {
		xing3Swiper = null;
	}

	if(document.querySelector('#meng-series-2')) {
		if(!meng2Swiper) {
			meng2Swiper = new Swiper('.swiper-container-meng2', {
				direction: 'vertical',
				loop: true,
				effect: 'coverflow',
				slidesPerView: 2.5,
				centeredSlides: true,
				//		setWrapperSize: true,
				height: 200, //你的slide高度
				//		autoHeight:true,
				coverflowEffect: {
					rotate: 1,
					stretch: 0,
					depth: 10,
					modifier: 10,
					slideShadows: false,
					other: {
						type: 'meng',
						translateZ: 130
					}
				},
			})
		}
	} else {
		meng2Swiper = null;
	}
	//解决同向滑动事件父元素与子元素冲突问题
	$('#meng-series-2 .card-cover').bind('touchstart', function() {
		S.hold()
	})

	$('#meng-series-2 .card-cover').bind('touchend', function() {
		S.unhold()
	})

})