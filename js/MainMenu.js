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
	pro_code: 'MM1', //渠道编号   0:app, 1:wechat, 2:platform A, 3:platform B, etc...
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
		content: '<div class="slogan">你有你的选择 I have my ATTITUDE</div><img src="img/toutiao.png" style="width:100%;height:100%;"/><a data-card-id="up05" data-index="0" class="show-up-btn1" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 20%;right: 25%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<div class="slogan">对你不仅仅是喜欢 My love in it</div><img src="img/tencent.png" style="width:100%;height:100%;"/><a data-card-id="up04" data-index="0" class="show-up-btn1" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 20%;right: 25%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<div class="slogan">承 |萌| |光| 爱，带我回家</div><img src="img/meng.png" style="width:100%;height:100%;"/><a data-card-id="up03" data-index="2" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 20%;right: 25%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<div class="slogan">以神的名义守护你</div><img src="img/xing.png" style="width:100%;height:100%;"/><a data-card-id="up02" data-index="3" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;top: 10%;left: 13%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
	},
	{
		content: '<div class="slogan">青春就要放肆闯 UP UP，再无NG！</div><img src="img/ran.png" style="width:100%;height:100%;"/><a data-card-id="up01"  data-index="5" class="show-up-btn" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 20%;right: 25%;"><img src="img/btn_showup.png" style="width: 100%;"></a>'
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
	initIndex: 5,
	//	isDebug: true,
	isVertical: true
});
//绑定详情按钮跳转
S.on('slideStart', function() {
	//详情
	$('.show-up-btn').on('tap', function() {
		var self = $(this);
		location.href = 'ProductDetail.html' + '?' + 'pro_code=' + GetQueryString(location.href, 'pro_code') + '&' + 'cardId=' + self.attr('data-card-id').trim() + '&' + 'initIndex=' + self.attr('data-index');
	})
})
//滑动后改变菜单状态
S.on('slideChanged', function(index, dom) {

	$('.operation-guide').show();
	if(index == 5) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');
		$('.new-btn').find('img').removeClass('zoomInOut');
		$('.product-btn').find('img').removeClass('zoomInOut');
		$('.me-btn').find('img').removeClass('zoomInOut');
		$('.me-btn').show();

	} else if(index == 4) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666_select.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');
		$('.new-btn').find('img').removeClass('zoomInOut');
		$('.product-btn').find('img').removeClass('zoomInOut');
		$('.me-btn').find('img').removeClass('zoomInOut');
		setTimeout(function() {
			$('.product-btn').find('img').addClass('zoomInOut');
		}, 50)
		$('.me-btn').show();
	} else if(index == 3) {
		$('.new-btn').find('img').attr('src', 'img/120_select.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216.png');
		$('.new-btn').find('img').removeClass('zoomInOut');
		$('.product-btn').find('img').removeClass('zoomInOut');
		$('.me-btn').find('img').removeClass('zoomInOut');
		setTimeout(function() {
			$('.new-btn').find('img').addClass('zoomInOut');
		}, 50)
		$('.me-btn').show();
	} else if(index == 2) {
		$('.new-btn').find('img').attr('src', 'img/120.png');
		$('.product-btn').find('img').attr('src', 'img/666.png');
		$('.me-btn').find('img').attr('src', 'img/216_select.png');
		$('.new-btn').find('img').removeClass('zoomInOut');
		$('.product-btn').find('img').removeClass('zoomInOut');
		$('.me-btn').find('img').removeClass('zoomInOut');
		setTimeout(function() {
			$('.me-btn').find('img').addClass('zoomInOut');
		}, 50)
		$('.me-btn').show();
	} else if(index == 1) {
		$('.new-btn').find('img').attr('src', 'img/520_select.png');
		$('.product-btn').find('img').attr('src', 'img/youtaidu.png');
		$('.me-btn').find('img').attr('src', '');
		$('.new-btn').find('img').removeClass('zoomInOut');
		$('.product-btn').find('img').removeClass('zoomInOut');
		$('.new-btn').find('img').removeClass('zoomInOut');
		setTimeout(function() {
			$('.new-btn').find('img').addClass('zoomInOut');
		}, 50)
		$('.me-btn').hide();
	} else if(index == 0) {
		$('.new-btn').find('img').attr('src', 'img/520.png');
		$('.product-btn').find('img').attr('src', 'img/youtaidu_select.png');
		$('.me-btn').find('img').attr('src', '');
		$('.new-btn').find('img').removeClass('zoomInOut');
		$('.product-btn').find('img').removeClass('zoomInOut');
		$('.product-btn').find('img').removeClass('zoomInOut');
		setTimeout(function() {
			$('.product-btn').find('img').addClass('zoomInOut');
		}, 50)
		$('.me-btn').hide();
		$('.operation-guide').hide();
	} else {
		console.log(index);
	}

})