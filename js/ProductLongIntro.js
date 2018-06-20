//滚动事件绑定
/*$(window).scroll(function() {

	var hh = $(window).scrollTop();
	console.log(hh)
	//				$('.test').html(hh)
	if($(window).width() > 320 && hh >= 500) {
		//					$('.main-page').fadeIn();
	}
})*/
//初始化
$(function() {
	//进入页面先滚至页面最下方
//	$(window).scrollTop('99999999');
	//呈现内容
	$('.mui-content').fadeIn();
	//获取地址栏参数
	GetQueryString(location.href, 'channelId');
	//绑定菜单点击
	$('.new-btn').on('tap', function() {
		location.href = 'NewsCenter.html';
	})

	$('.product-btn').on('tap', function() {
		location.href = 'ProductCenter.html';
	})

	$('.me-btn').on('tap', function() {
		location.href = 'PersonalCenter.html';
	})
	//我的主卡点击
	$('.my-main-card').on('tap', function() {
		location.href = 'ProductDetail.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId');;
	})
})