//加载完页面才执行

var page1 = document.getElementById('page1');
// 页面加载looading 
var modalBg = document.getElementById('modal-bg');
var modalImg = document.getElementById('modal-img');
setTimeout(function () {
	// modalBg.setAttribute('class', 'modal-bg fadeOut');
	// modalImg.setAttribute('class', 'modal-img fadeOut');
	page1.style.display = 'block';
	modalBg.style.display = 'none';
	modalImg.style.display = 'none';
}, 500);

window.onload = function () {

var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');
var page6 = document.getElementById('page6');

var music = document.getElementById('music');
//获取audio是是一个数组，因为页面上只有一个audio,所以通过下标0即可获取
var audio = document.getElementsByTagName('audio')[0];

page1.addEventListener('touchstart', function (e) {
	audio.play();
});
music.addEventListener('touchstart', function (e) {
	if (audio.paused) {
		audio.play();
		music.style.background = "url('images/play.png') no-repeat center center";
		music.style.backgroundSize = "100%";
	}
	else {
		audio.pause();
		music.style.background = "url('images/stop.png') no-repeat center center";
		music.style.backgroundSize = "100%";
	}
}, false);



// 规则
var gz = document.getElementById('gz');
var gzModal = document.getElementById('gzModal');
gz.addEventListener('touchstart', function (e) {
	$('.gz-modal').show();
	e.preventDefault();
});
gzModal.addEventListener('touchstart', function (e) {
	$('.gz-modal').hide();
	e.preventDefault();
});

// 测试开始
var statr = document.getElementById('statr');
statr.addEventListener('touchstart', function (e) {
	page2.style.display = 'block';
	page2.style.top = '100%';
	setTimeout(function () {
		page1.setAttribute('class', 'page fadeOut');
		page2.setAttribute('class', 'page fadeIn  answerPage ');
	}, 1000)
	e.preventDefault();
});

// 模态层 控制只能选一次
var modal = document.getElementById('modal');

// 页面一的答案
var answerOption1A = document.getElementById('answerOption1A');
var answerOption1B = document.getElementById('answerOption1B');
var answerOption1C = document.getElementById('answerOption1C');
var submit1 = document.getElementById('submit1');

// 页面二的答案
var answerOption2A = document.getElementById('answerOption2A');
var answerOption2B = document.getElementById('answerOption2B');
var answerOption2C = document.getElementById('answerOption2C');
var submit2 = document.getElementById('submit2');

// 页面三的答案
var answerOption3A = document.getElementById('answerOption3A');
var answerOption3B = document.getElementById('answerOption3B');
var answerOption3C = document.getElementById('answerOption3C');
var submit3 = document.getElementById('submit3');

// 操作
//btz update 2018116
var lottery = document.getElementById('lottery');
var reset = document.getElementById('reset');
var shareWx = document.getElementById('shareWx');
// var sharePyq = document.getElementById('sharePyq');
var shareBg = document.getElementById('shareBg');

// 第二页面跳到第三
function jumpPage2() {

	page3.style.display = 'block';
	page3.style.top = '100%';
	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page2.setAttribute('class', 'page fadeOut answerPage ');
		page3.setAttribute('class', 'page fadeIn  answerPage ');
		setTimeout(function () {
			page2.setAttribute('class', 'page answerPage');
			page2.style.display = "none";
			answerOption1A.style.animation = "none";
			answerOption1B.style.animation = "none";
			answerOption1C.style.animation = "none";
		}, 500);
	}, 2000);
	// page5.style.display = 'block';
	// page5.style.top = '100%';
	// modal.style.zIndex = "999";
	// setTimeout(function () {
	// 	modal.style.zIndex = "-1";
	// 	page2.setAttribute('class', 'page fadeOut answerPage ');
	// 	page5.setAttribute('class', 'page fadeIn');

	// 	setTimeout(function () {  
	// 		page2.setAttribute('class', 'page answerPage ');
	// 		answerOption1A.style.animation = "none";
	// 		answerOption1B.style.animation = "none";
	// 		answerOption1C.style.animation = "none";
	// 	}, 500);
	// }, 2000)
}
function resetA() {
	answerOption1A.setAttribute('class', 'answer');
	answerOption1B.setAttribute('class', 'answer');
	answerOption1C.setAttribute('class', 'answer');
}
answerOption1A.addEventListener('touchstart', function (e) {
	resetA();
	answerOption1A.setAttribute('class', 'answer selected');

	e.preventDefault();
});
answerOption1B.addEventListener('touchstart', function (e) {
	resetA();
	answerOption1B.setAttribute('class', 'answer selected');
	e.preventDefault();
});
answerOption1C.addEventListener('touchstart', function (e) {
	resetA();
	answerOption1C.setAttribute('class', 'answer selected');
	e.preventDefault();
});
submit1.addEventListener('touchstart', function (e) {
	var selected = document.getElementsByClassName('selected')[0];
	selected.style.animation = "flash 3s ease 0s 1 both";
	jumpPage2();
	e.preventDefault();
});

function reset2() {
	answerOption2A.setAttribute('class', 'answer');
	answerOption2B.setAttribute('class', 'answer');
	answerOption2C.setAttribute('class', 'answer');
}
// 第三页面跳到第四
function jumpPage3() {
	page4.style.display = 'block';
	page4.style.top = '100%';
	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page3.setAttribute('class', 'page fadeOut answerPage');
		page4.setAttribute('class', 'page fadeIn  answerPage');

		setTimeout(function () {
			page3.setAttribute('class', 'page answerPage ');
			page3.style.display = "none";
			answerOption2A.style.animation = "none";
			answerOption2B.style.animation = "none";
			answerOption2C.style.animation = "none";
		}, 500);

	}, 2000)
}
answerOption2A.addEventListener('touchstart', function (e) {
	reset2();
	answerOption2A.setAttribute('class', 'answer selected');
	e.preventDefault();
});
answerOption2B.addEventListener('touchstart', function (e) {
	reset2();
	answerOption2B.setAttribute('class', 'answer selected');
	e.preventDefault();
});
answerOption2C.addEventListener('touchstart', function (e) {
	reset2();
	answerOption2C.setAttribute('class', 'answer selected');
	e.preventDefault();
});
submit2.addEventListener('touchstart', function (e) {
	var selected = document.getElementsByClassName('selected')[1];
	selected.style.animation = "flash 3s ease 0s 1 both";
	jumpPage3();
	e.preventDefault();
});

function reset3() {
	answerOption3A.setAttribute('class', 'answer');
	answerOption3B.setAttribute('class', 'answer');
	answerOption3C.setAttribute('class', 'answer');
}
// 第四页面跳到第五
function jumpPage4() {
	page5.style.display = 'block';
	page5.style.top = '100%';
	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page4.setAttribute('class', 'page fadeOut answerPage');
		page5.setAttribute('class', 'page fadeIn');

		setTimeout(function () {
			page4.setAttribute('class', 'page answerPage ');
			page4.style.display = "none";
			answerOption3A.style.animation = "none";
			answerOption3B.style.animation = "none";
			answerOption3C.style.animation = "none";
		}, 500);

	}, 2000)
}
answerOption3A.addEventListener('touchstart', function (e) {
	reset3();
	answerOption3A.setAttribute('class', 'answer selected');
	e.preventDefault();
});
answerOption3B.addEventListener('touchstart', function (e) {
	reset3();
	answerOption3B.setAttribute('class', 'answer selected');
	e.preventDefault();
});
answerOption3C.addEventListener('touchstart', function (e) {
	reset3();
	answerOption3C.setAttribute('class', 'answer selected');
	e.preventDefault();
});
submit3.addEventListener('touchstart', function (e) {
	var selected = document.getElementsByClassName('selected')[2];
	selected.style.animation = "flash 3s ease 0s 1 both";
	jumpPage4();
	e.preventDefault();
});


// 抽奖，重新测试，分享的方法
lottery.addEventListener('touchstart', function (e) {
	lottery.style.animation = "flash 3s ease 0s 1 both";

	page6.style.display = 'block';
	page6.style.top = '100%';
	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page5.setAttribute('class', 'page fadeOut ');
		page6.setAttribute('class', 'page fadeIn');
	}, 2000)
	e.preventDefault();
});
function initReset() {
	answerOption1A.setAttribute('class', 'answer');
	answerOption1B.setAttribute('class', 'answer');
	answerOption1C.setAttribute('class', 'answer');
	answerOption2A.setAttribute('class', 'answer');
	answerOption2B.setAttribute('class', 'answer');
	answerOption2C.setAttribute('class', 'answer');
	answerOption3C.setAttribute('class', 'answer');
	answerOption3A.setAttribute('class', 'answer');
	answerOption3B.setAttribute('class', 'answer');
	answerOption3C.setAttribute('class', 'answer');
}
// 重新测试;
reset.addEventListener('touchstart', function (e) {
	reset.style.animation = "flash 3s ease 0s 1 both";
	initReset();
	//重置3个答题页的样式。 
	page2.style.display = 'block';
	page2.style.top = '100%';

	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page2.setAttribute('class', 'page fadeIn  answerPage');
		page5.setAttribute('class', 'page fadeOut');

		setTimeout(function () {
			page5.style.display = 'none';
			reset.style.animation = 'none'
			page5.setAttribute('class', 'page');
		}, 500);

	}, 2000)

});

//btz update 20181228
//btz update 2018116
shareWx.addEventListener('touchstart', function (e) {
	console.log('微信好友分享')
	e.preventDefault();
	$('.share-bg').show();
	$('.share-icon').show();
	$('.share-modal').show();
	$('.share-wx').show();
	$('.wx').show();
});
//分享, 微信好友，朋友圈，取消
// sharePyq.addEventListener('touchstart', function (e) {
// 	console.log('朋友圈分享')
// 	e.preventDefault();
// 	$('.share-bg').show();
// 	$('.share-icon').show();
// 	$('.share-modal').show();
// 	$('.pyq').show();
// });
shareBg.addEventListener('touchstart', function (e) {
	e.preventDefault();
	$('.share-bg').hide();
	$('.share-icon').hide();
	$('.share-modal').hide();
	$('.wx').hide();
	$('.pyq').hide();
});
// var wx = $('.wx')[0];
// var pyq = $('.pyq')[0];
// var shareClose = $('.share-close')[0];
// wx.addEventListener('touchstart', function (e) {
// 	console.log('微信好友') 
// });
// pyq.addEventListener('touchstart', function (e) {
// 	console.log('朋友圈') 
// 	e.preventDefault(); 
// });
// shareClose.addEventListener('touchstart', function (e) {
// 	console.log('取消分享')
// 	e.preventDefault();
// 	$('.share-bg').hide();
// 	$('.share-modal').hide();
// });

// 未中奖和中奖 
// var close = document.getElementById('close');
var action = document.getElementById('action');
var prize = document.getElementById('prize');
var prizeSub = document.getElementById('prizeSub');
// var shut = document.getElementById('shut');
var ok = document.getElementById('ok');



// close.addEventListener('touchstart', function (e) {
// 	$('.dialog').css('display', 'none');
// 	e.preventDefault();
// });
action.addEventListener('touchstart', function (e) {
	$('.dialog').css('display', 'none');
	e.preventDefault();
});
prize.addEventListener('touchstart', function (e) {
	$('.dialog').css('display', 'none');
	$('.prizeDialog').css('display', 'block');
	$('.content-add').css('display', 'block');
	$('.content-update').css('display', 'none');
	e.preventDefault();
});
prizeSub.addEventListener('touchstart', function (e) {

	var name = $('.name').val();
	var phone = $('.phone').val();
	var address = $('.address').val();
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if (name == '') {
		alert('收货人不能为空');
	} else if (phone == '') {
		alert('联系电话不能为空');
	} else if (phone.length != 11) {
		alert("请输入有效的手机号码");
	} else if (!myreg.test(phone)) {
		alert("请输入有效的手机号码");
	}
	else if (address == '') {
		alert('收货地址不能为空');
	} else {
		$('.prizeDialog').css('display', 'none');
		$('.oKDialog').css('display', 'block');
	}
	e.preventDefault();
});
// shut.addEventListener('touchstart', function (e) {
// 	$('.oKDialog').css('display', 'none');
// 	e.preventDefault();
// });
ok.addEventListener('touchstart', function (e) {
	$('.oKDialog').css('display', 'none');
	e.preventDefault();
});

//btz update 20181228
// 次数用完的提示
// var countShut = document.getElementById('countShut');
var countOk = document.getElementById('countOk');
// countShut.addEventListener('touchstart', function (e) {
// 	$('.countDialog').css('display', 'none');
// 	e.preventDefault();
// });
countOk.addEventListener('touchstart', function (e) {
	$('.countDialog').css('display', 'none');
	e.preventDefault();
});

//btz update 2019-01-04 我的奖品 
var myPrize = $('.myPrize')[0];
myPrize.addEventListener('touchstart', function (e) {
	// $('.countDialog').css('display', 'none');
	// console.log('查看我的奖品');
	// myPrize.style.animation = "flash 3s ease 0s 1 both";
	// page7.style.display = 'block';
	// page7.style.top = '100%';
	// modal.style.zIndex = "999";
	// setTimeout(function () {
	// 	modal.style.zIndex = "-1";
	// 	page6.setAttribute('class', 'page fadeOut');
	// 	page7.setAttribute('class', 'page fadeIn');

	// 	setTimeout(function () {
	// 		page6.style.display = 'none';
	// 		myPrize.style.animation = 'none'
	// 		page6.setAttribute('class', 'page');
	// 	}, 500);

	// }, 2000);

	myPrize.style.animation = "flash 3s ease 0s 1 both";
	//重置3个答题页的样式。 
	page7.style.display = 'block';
	page7.style.top = '100%';

	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page6.setAttribute('class', 'page fadeOut ');
		page7.setAttribute('class', 'page fadeIn ');

		setTimeout(function () {
			page6.style.display = 'none';
			myPrize.style.animation = 'none'
			page6.setAttribute('class', 'page');
		}, 500);

	}, 2000)

	e.preventDefault();
});

// 修改真实信息和返回上一页
var updatePrize = $('.updatePrize')[0];
var back = $('.back')[0];
var back1 = $('.back')[1];
updatePrize.addEventListener('touchstart', function (e) {
	// console.log('修改真实信息');
	$('.dialog').css('display', 'none');
	$('.prizeDialog').css('display', 'block');
	$('.content-add').css('display', 'none');
	$('.content-update').css('display', 'block');
	e.preventDefault();
});
back.addEventListener('touchstart', function (e) {
	// console.log('返回  没有中奖的');
	back.style.animation = "flash 3s ease 0s 1 both";
	page6.style.display = 'block';
	page6.style.top = '100%';
	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page7.setAttribute('class', 'page fadeOut ');
		page6.setAttribute('class', 'page fadeIn');

		setTimeout(function () {
			page7.style.display = 'none';
			back.style.animation = 'none'
			page7.setAttribute('class', 'page');
		}, 500);

	}, 2000);
	e.preventDefault();
});
back1.addEventListener('touchstart', function (e) {
	// console.log('返回 有中奖的');
	back1.style.animation = "flash 3s ease 0s 1 both";
	page6.style.display = 'block';
	page6.style.top = '100%';
	modal.style.zIndex = "999";
	setTimeout(function () {
		modal.style.zIndex = "-1";
		page7.setAttribute('class', 'page fadeOut ');
		page6.setAttribute('class', 'page fadeIn');

		setTimeout(function () {
			page7.style.display = 'none';
			back1.style.animation = 'none'
			page7.setAttribute('class', 'page');
		}, 500);

	}, 2000);
	e.preventDefault();
});

// 确认修改地址和取消
var prizeUpdateSub = $('#prizeUpdateSub')[0];
var cancel = $('#cancel')[0];
prizeUpdateSub.addEventListener('touchstart', function (e) {
	var name = $('.name').val();
	var phone = $('.phone').val();
	var address = $('.address').val();
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if (name == '') {
		alert('姓名不能为空');
	} else if (phone == '') {
		alert('电话不能为空');
	} else if (phone.length != 11) {
		alert("请输入有效的手机号码");
	} else if (!myreg.test(phone)) {
		alert("请输入有效的手机号码");
	}
	else if (address == '') {
		alert('地址不能为空');
	} else {
		$('.prizeDialog').css('display', 'none');
		$('.oKDialog').css('display', 'block');
	}
	e.preventDefault();
});
cancel.addEventListener('touchstart', function (e) {
	$('.dialog').css('display', 'none');
	e.preventDefault();
});

}
