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
                goToCover();
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
    $('#cloud1, #cloud11').css('background-image', 'url(images/cloud1.png)');
    $('#cloud2, #cloud21').css('background-image', 'url(images/cloud2.png)');
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

// 初始加载页至封面
var ww = window.innerWidth;
var wh = window.innerHeight;
var dx = ww/2 - 40 - 177/2;
var dy = wh/2 - 17 - 58/2;
function goToCover() {
    var loadToCover = new TimelineMax({
        onStart: showCover
    });
    loadToCover.add('toCoverStart')
                .to('#logo', 0.6, {x: -dx, y: -dy}, 'toCoverStart')
                .to('body', 0.6, {backgroundColor: $color1}, 'toCoverStart');
}

// 显示封面云朵
function showCoverClouds() {
    var coverCloudsShow = new TimelineMax({
        onComplete: function () {
            cloud11Float.play(0);
            cloud21Float.play(0);
        }
    });
    coverCloudsShow.set('#clouds', {display: 'block', autoAlpha: 1})
    .set('.cloud-noline', {autoAlpha: 0})
    .fromTo('#cloud1', 0.8, {y: -400}, {y: 0, ease: Back.easeOut.config(1)})
    .fromTo('#cloud2', 0.8, {y: -400}, {y: 0, ease: Back.easeOut.config(1)}, '-=0.7')
    .add('#cloud12Float')
    .to('#cloud1', 6, {x: 473, ease: Power0.easeNone}, '#cloud12Float')
    .to('#cloud2', 7, {x: 242, ease: Power0.easeNone}, '#cloud12Float')
    .set(['#cloud1', '#cloud2'], {display: 'none'})
}

// 云朵1飘动
var cloud11Float = new TimelineMax({
    paused: true,
    repeat: -1
});

cloud11Float.fromTo('#cloud11', 12, {x: 0}, {x: 786, ease: Power0.easeNone});


// 云朵2飘动
var cloud21Float = new TimelineMax({
    paused: true,
    repeat: -1
});

cloud21Float.fromTo('#cloud21', 18, {x: 0}, {x: 834, ease: Power0.easeNone});


// 封面
function showCover() {
    var coverShow = new TimelineMax();
    coverShow.set('#cover', {display: 'block', autoAlpha: 1})
        .add('coverStart')
        .fromTo('#cover-back', 0.6, {autoAlpha: 0}, {autoAlpha: 1}, 'coverStart')
        .fromTo('#mt-container', 0.8, {autoAlpha: 0, y: 400}, {
            autoAlpha: 1,
            y: 0,
            onComplete: function () {
                mtMove.play(0); // 山树开始移动
            }
        }, 'coverStart')
        .add('coverContent')
        .fromTo('#ticket', 0.8, {autoAlpha: 0, x: -640}, {
            autoAlpha: 1,
            x: 0,
            ease: Back.easeOut.config(1),
            onComplete: function () {
                ticketBreath.play(0);
            }
        }, 'coverContent')
        .fromTo('#cover-content', 0.8, {autoAlpha: 0, y: -100}, {autoAlpha: 1, y: 0}, 'coverContent+=0.2')
        .fromTo('#cover-guide', 0.8, {autoAlpha: 0, y: 100}, {
            autoAlpha: 1,
            y: 0,
            onComplete: function () {
                coverGuideMove.play(0); // 播放点击票指示
                showCoverClouds();
            }
        }, 'coverContent+=0.2')
}

// 封面点击票指示
var coverGuideMove = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
coverGuideMove.to('#cover-guide', 1, {y: -30, ease: Power1.easeInOut});

// 票呼吸
var ticketBreath = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true
});
ticketBreath.to('#ticket-back', 0.6, {autoAlpha: 0, ease: Power1.easeInOut});

// 山树移动
var mtMove = new TimelineMax({
    paused: true,
});

mtMove.add('mtStart')
    .to('#moutains', 80, {x: 814, ease: Power0.easeNone, repeat: -1}, 'mtStart')
    .to('#trees', 30, {x: 653, ease: Power0.easeNone, repeat: -1}, 'mtStart');

// 封面消失
function hideCover() {
    var coverHide = new TimelineMax({
        onStart: function () {
            coverGuideMove.pause(0); // 暂停coverGuide
        },
        onComplete: function () {
            mtMove.pause(0); // 暂停山树移动
            ticketBreath.pause(0); // 暂停票呼吸
        }
    });
    coverHide.add('coverHideStart')
    .to('#cover-content', 0.5, {autoAlpha: 0, y: -100}, 'coverHideStart')
    .to('#cover-guide', 0.5, {autoAlpha: 0, y: 100}, 'coverHideStart')
    .add('coverColorChange')
    .to(['#mt-container', '#cover-back'], 0.5, {autoAlpha: 0}, 'coverColorChange')
    .to('#ticket', 0.8, {x: 640, ease: Back.easeIn.config(1.2)}, 'coverColorChange-=0.3')
    .to('body', 0.6, {backgroundColor: $color2}, 'coverColorChange');
}

// 点击封面票
$('#ticket').on('touchstart', hideCover);


(function($) {
    $(document).ready(function() {
        console.log('Ready');
    });  //Document ready
})(jQuery);
