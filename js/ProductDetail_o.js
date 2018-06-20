//呈现内容
$('.mui-content').fadeIn();
//iSlider 数据列表
var list = [
	// picture
	{
		content: '<img src="img/Product4.png" style="width:100%;height:100%;"/><a data-card-id="fire03" class="card-apply" style="width: 40%;position:  absolute;z-index:  99999;top: 5%;right: 6%;display:  block;padding: 0;margin: 0;"><img src="img/Apply_btn.png" style="width: 100%;"></a>'
	},
	{
		content: 'img/Product3.png'
	},
	{
		content: 'img/Product2.png'
	},
	{
		content: '<img src="img/Product1.png" style="width:100%;height:100%;"/><a data-card-id="up01" class="card-apply" style="width: 26%;height:50px;position: absolute;z-index: 1;bottom: 37%;right: 28%;"></a>'
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
	//				animateType:'depth',
	initIndex: 3,
	isVertical: true
});
S.on('slideStart', function() {
	//申请卡片
	$('.card-apply').on('tap', function() {
		var self = $(this);
		location.href = 'CardApply.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId') + '&' + 'cardId=' + self.attr('data-card-id').trim();
	})
})
//获取地址栏参数
GetQueryString(location.href, 'channelId');
//右侧功能按钮
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

$('.new-btn').on('tap', function() {
	location.href = 'NewsCenter.html';
})

$('.product-btn').on('tap', function() {
	location.href = 'ProductCenter.html';
})

$('.me-btn').on('tap', function() {
	location.href = 'PersonalCenter.html';
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