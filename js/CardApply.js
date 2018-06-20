//返回
$('.go-back').on('tap', function() {
	history.back();
})
//点击下一步提交
$('.next-btn').on('tap', function() {
	//获取页面数据及地址栏参数
	var channelId = GetQueryString(location.href, 'channelId');
	var cardId = GetQueryString(location.href, 'cardId');
	var userName = $('.username').val().trim();
	var identityType = $('.identity-type').val().trim();
	var identityNumber = $('.identity-number').val().trim();
	var phone = $('.phone').val().trim();
	var verifyCode = $('.verify-code').val().trim();

	//最终获得数据
	var finalGetInfo = {
		channelId: channelId, //渠道编号   0:app, 1:wechat, 2:platform A, 3:platform B, etc...
		cardId: cardId, //银行卡编号  0:meo card, 1:constellation card, 2:fire card, etc... 
		userName: userName, //用户名  在此页面收集
		identityType: identityType, //证件类型  在此页面收集
		identityNumber: identityNumber, //证件号码  在此页面收集
		phone: phone, //手机号  在此页面收集
		verifyCode: verifyCode, //用户名  在此页面收集
	}

	var param = finalGetInfo;
	var url = 'xxx';
	var successCallBack = function(response) {
		console.log(response);
	}
	var errorCallBack = function(err) {
		console.warn(err)
	}

	console.log(param);
	//发送信用卡申请请求
	sendAjax(url, 'post', param, 1, successCallBack, errorCallBack);
})