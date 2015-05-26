<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>登陆送豪礼</title>
<meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no" name="viewport" id="viewport" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no, email=no">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes"><!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black"><!-- 设置苹果工具栏颜色 -->
<meta name="format-detection" content="telphone=no, email=no"><!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
<!-- 适应移动端end -->
<meta name="nightmode" content="enable/disable">
<meta name="imagemode" content="force">
<meta name="format-detection" content="telephone=no,email=no">	
	<link rel="stylesheet" type="text/css" href="../../../css/activity/scdl/style/footer_header<?php echo $status ?>.css">
</head>
<body>
    <div class="con_720">
    	<div class="banner">
    	   <img src="../../../css/activity/scdl/img/app-c2.png" alt="">
   		</div>
        <div class="con">
   			<dl<?php if ($status == 1): ?> class="con-hd"<?php endif ?>>
   				<dt>活动时间：</dt>
   				<dd>即日起~2015年6月30日。</dd>
   			</dl>
   			<dl>
   				<dt>活动规则：</dt>
   				<dd>活动期间，新注册用户首次登录U美直播社区，即可获得10U币奖励！</dd>
   			</dl>
   			 <h2 class="zc">快快<?php if ($status == 0): ?>注册<?php else: ?>加入<?php endif ?>！与主播一起High起来吧！</h2>
            <?php if ($status == 0): ?>
              <a href="#" class="lj_zc" onclick="window.uumieActivity.toRegister();">立即注册领U币</a>
            <?php endif ?>
   		</div>
    </div>
<!--todo window.uumieActivity.toRecharge();-->
</body>
</html>