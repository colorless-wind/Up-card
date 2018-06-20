$(function() {
	//获取地址栏参数
	GetQueryString(location.href, 'channelId');

	//初始化点击事件绑定
	$('#card16').click(function() {
		location.href = 'ProductLongIntro.html' + '?' + 'channelId=' + GetQueryString(location.href, 'channelId');
	})

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
	//You don't need this timeout in your pages - Safari has stupid issues with our demo system
	window.setTimeout(function() {
		$("#coverflow").coverflow({
			orientation: 'vertical'
		});
	}, $.browser.safari ? 100 : 0);
})