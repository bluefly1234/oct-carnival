/**
  Author: Kale Chao | FakeCityMan
  Blog: http://kalechao87.github.io/
**/
// 页面背景色变量
$color1 = '#64caff'; // 封面第一页
$color2 = '#4f6c9d'; // 第二页
$color3 = '#a3d0e3'; // 第三页
$color4 = '#5d5f77'; // 第四页
$color5 = ''; // 第五页
$color6 = '#454e8d'; // 第六页
$color7 = '#0f0c24'; // 第七页
$color8 = '#9f7954'; // 第八页
$color9 = '#422a5c'; // 第九页
$color10 = '#4ba9d5'; // 第十页
$color11 = '#3870aa'; // 第十一页
$color11 = '#ff4750'; // 第十二页

// 预加载
var sourceArr = [
    'images/logo.png',
    //music
    'images/music-bg.png',
    'images/music-icon.png',
    // cover
    'images/ticket-back.png',
    'images/ticket-front.png',
    'images/cover-content.png',
    'images/cover-guide.png',
    'images/cover-back.png',
    'images/moutain.png',
    'images/trees.png',
    // clouds
    'images/cloud1.png',
    'images/cloud2.png',
    'images/cloud3.png',
    'images/cloud4.png',
    // hlg
    'images/hlg-bg.png',
    'images/water1.png',
    'images/water2.png',
    'images/jump-people.png',
    'images/boat.png',
    'images/swing-people.png',
    'images/hlg-people.png',
    'images/hlg-mt.png',
    'images/hlg-banner.png',
    // ticket
    'images/plug-bg.png',
    'images/plug-top.png',
    'images/ticket-plug.png',
    'images/tap-guide.png',
    // ms
    'images/ms-bg.png',
    'images/ms-building1.png',
    'images/ms-building2.png',
    'images/ms-building3.png',
    'images/ms-tree.png',
    'images/ms-water.png',
    'images/ms-people1.png',
    'images/ms-people2.png',
    'images/ms-tag.png'

]; //需要加载的资源列表

new mo.Loader(sourceArr,{
	onLoading : function(count,total){
		console.log('onloading:single loaded:',arguments);
        console.log('加载中...（'+count/total*100+'%）');
        var loadPercent = Math.floor(count/total*100);
        $('#loading-num').html(loadPercent+'%');
	},
	onComplete : function(time){
		console.log('oncomplete:all source loaded:',arguments);
        setBgImages(); // 设置css背景图片及音乐
        var hideLoading = new TimelineMax({
            delay: 2,
            onComplete: function () {
                TweenMax.set('#music-control', {autoAlpha: 1});
                // coverShow.play(0);
                bgAud.play(); // 播放背景音乐
            }
        });
        hideLoading.to('#loading-num', 0.6, {autoAlpha: 0})
                    .set('#loading-num', {display: 'none'})
	}
});

// 设置css背景图片
function setBgImages() {
    // music
    $('#bg-music').attr('src', 'media/bgmusic.mp3');
    $('#music-control-main').css('background-image', 'url(images/music-bg.png)');
    $('.music-control-icon').css('background-image', 'url(images/music-icon.png)');

    // cover
    $('#ticket-back').css('background-image', 'url(images/ticket-back.png)');
    $('#ticket-front').css('background-image', 'url(images/ticket-front.png)');
    $('#cover-content').css('background-image', 'url(images/cover-content.png)');
    $('#cover-guide').css('background-image', 'url(images/cover-guide.png)');
    $('#cover-back').css('background-image', 'url(images/cover-back.png)');
    $('.moutain').css('background-image', 'url(images/moutain.png)');
    $('.tree').css('background-image', 'url(images/trees.png)');

    // clouds
    $('#cloud1').css('background-image', 'url(images/cloud1.png)');
    $('#cloud2').css('background-image', 'url(images/cloud2.png)');
    $('.cloudl').css('background-image', 'url(images/cloud3.png)');
    $('.clouds').css('background-image', 'url(images/cloud4.png)');

    // hlg
    $('#hlg-container').css('background-image', 'url(images/hlg-bg.png)');
    $('#water1').css('background-image', 'url(images/water1.png)');
    $('#water2').css('background-image', 'url(images/water2.png)');
    $('#jump-people').css('background-image', 'url(images/jump-people.png)');
    $('#boat').css('background-image', 'url(images/boat.png)');
    $('#swing-people').css('background-image', 'url(images/swing-people.png)');
    $('#hlg-people').css('background-image', 'url(images/hlg-people.png)');
    $('#hlg-mt').css('background-image', 'url(images/hlg-mt.png)');
    $('#hlg-banner').css('background-image', 'url(images/hlg-banner.png)');

    // ticket
    $('#ticket-container').css('background-image', 'url(images/plug-bg.png)');
    $('#plug-top').css('background-image', 'url(images/plug-top.png)');
    $('#ticket-plug').css('background-image', 'url(images/ticket-plug.png)');
    $('#tap-guide').css('background-image', 'url(images/tap-guide.png)');

    // ms
    $('#ms-container').css('background-image', 'url(images/ms-bg.png)');
    $('#ms-building1').css('background-image', 'url(images/ms-building1.png)');
    $('#ms-building2').css('background-image', 'url(images/ms-building2.png)');
    $('#ms-building3').css('background-image', 'url(images/ms-building3.png)');
    $('#ms-tree').css('background-image', 'url(images/ms-tree.png)');
    $('#ms-water').css('background-image', 'url(images/ms-water.png)');
    $('#ms-people1').css('background-image', 'url(images/ms-people1.png)');
    $('#ms-people2').css('background-image', 'url(images/ms-people2.png)');
    $('#ms-tag').css('background-image', 'url(images/ms-tag.png)');

}

// music-control--------------
var musicCtrl = new TimelineMax({repeat: -1, paused:true });
var musicRotation = new TimelineMax({repeat: -1, paused:true});
musicCtrl.to($(".music-control-icon"), 2, {rotation: 360, ease: Power0.easeNone});
musicRotation.to($(".music-control-icon:nth(1)"), 0.5, {x: "-=20",y: "-=20", autoAlpha:0, ease: Power0.easeNone})
              .to($(".music-control-icon:nth(2)"), 0.5, {x: "+=20", y: "-=20", autoAlpha:0, ease: Power0.easeNone})
              .to($(".music-control-icon:nth(3)"), 0.5, {x: "-=20", y: "+=20", autoAlpha:0, ease: Power0.easeNone})
              .to($(".music-control-icon:nth(4)"), 0.5, {x: "+=20", y: "+=20", autoAlpha:0, ease: Power0.easeNone})
// 音乐初始化
var bgAud = $("#bg-music")[0];
console.log(bgAud);
function initAud(){
    if (bgAud.currentTime){
        console.log("背景音乐开始播放");
        musicCtrl.play();
        musicRotation.play();
        bgAud.removeEventListener("timeupdate", initAud, false); //只执行一次，防止控制按钮动画无法暂停
    }
}

bgAud.addEventListener("timeupdate", initAud, false);

function playBM() {
    bgAud.play();
    musicCtrl.play();
    musicRotation.play();
}

function pauseBM() {
    bgAud.pause();
    musicCtrl.pause();
    musicRotation.pause();
}

// 音乐控制
$("#music-control").on('touchstart', function(){
    if(bgAud.paused){
        playBM();
    }else{
        pauseBM();
    }
});
// music-control End------------------------------

// 设置背景图片
(function($) {
    $(document).ready(function() {
        console.log('Ready');
    });  //Document ready
})(jQuery);
